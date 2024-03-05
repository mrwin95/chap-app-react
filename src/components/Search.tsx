import React from 'react'

export default function Search() {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type='text' placeholder='find a user '/>
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/20466748/pexels-photo-20466748/free-photo-of-a-woman-in-a-red-dress-standing-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
            <div className="userChatInfo">
                <span>Win</span>
            </div>
        </div>
    </div>
  )
}
