import React from 'react'

export default function Message() {
  return (
    <div className='message owner'>
        <div className="messageInfo">
        <img src="https://images.pexels.com/photos/20466748/pexels-photo-20466748/free-photo-of-a-woman-in-a-red-dress-standing-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
            <span>just now</span>
        </div>
        <div className="messageContent">
        <img src="https://images.pexels.com/photos/20466748/pexels-photo-20466748/free-photo-of-a-woman-in-a-red-dress-standing-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" /> 
            <p>Hello</p>
        </div>
    </div>
  )
}
