import React from 'react'
import {HiOutlineVideoCamera, HiUserPlus, HiOutlineSquaresPlus} from 'react-icons/hi2'

export default function Chat() {
  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>Win</span>
            <div className="chatIcons">
            <HiOutlineVideoCamera />
            <HiUserPlus />
            <HiOutlineSquaresPlus />
            </div>
        </div>
    </div>
  )
}
