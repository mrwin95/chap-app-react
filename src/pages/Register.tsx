import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage, db} from '../firebase';
import { doc, setDoc } from "firebase/firestore";    
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


export default function Register() {

    const [err, setError] = useState(false);

const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)    
        const storageRef = ref(storage, displayName);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',    
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          },      
        (error) => {
            console.log('e1', error.code);
            setError(true);
        }, 
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                await updateProfile(res.user, {                
                    displayName,
                    photoURL: downloadURL
                });

                        // Add a new document in collection "cities"
                        try {
                            await setDoc(doc(db, "users", res.user.uid), {
                                uid: res.user.uid,
                                displayName,
                                email,
                                photoURL: downloadURL
                            });            
                        } catch (error) {
                            console.log('err', error);
                            
                        }
                

            });
        }
        );

        
    } catch (error) {
        console.log('e2', error);
        
        setError(true);    
    }    
}
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat app</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='display name'/>
                <input type='text' placeholder='email'/>
                <input type='text' placeholder='password'/>
                <input type='file' id='file' style={{display: "none"}}/>
                <label htmlFor='file'>
                    <img src='' alt='' />
                    <span>Add an avatar</span>
                </label>
                
                <button>Sign up</button>
                {err && <span>Something went wrong</span>}
            </form>

            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}
