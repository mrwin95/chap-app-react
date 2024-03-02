import React from 'react'

export default function Register() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat app</span>
            <span className='title'>Register</span>
            <form>
                <input type='text' placeholder='display name'/>
                <input type='text' placeholder='email'/>
                <input type='text' placeholder='password'/>
                <input type='file' id='file' style={{display: "none"}}/>
                <label htmlFor='file'>
                    <img src='' alt='' />
                    <span>Add an avatar</span>
                </label>
                
                <button>Sign up</button>
            </form>

            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}
