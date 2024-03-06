import React from 'react'
import { TiAttachment } from "react-icons/ti";
import { BiImageAdd } from "react-icons/bi";
export default function Input() {
  return (
    <div className='input'>
        <input type="text" placeholder='Type something...' />
        <div className="send">
            <TiAttachment size={24} />
            <input type="file" style={{display: "none"}} id='file' />
            <label htmlFor='file'>
                <BiImageAdd size={24} style={{cursor: "pointer"}} />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}
