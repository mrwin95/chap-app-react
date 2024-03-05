import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <span className="logo">Chat app</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/20466748/pexels-photo-20466748/free-photo-of-a-woman-in-a-red-dress-standing-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
            <span>Win</span>
            <button>logout</button>
        </div>
    </div>
  )
}
