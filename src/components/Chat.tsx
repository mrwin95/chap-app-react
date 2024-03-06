import React from 'react'
import {HiOutlineVideoCamera, HiUserPlus, HiOutlineSquaresPlus} from 'react-icons/hi2'
import Messages from './Messages'
import Input from './Input'

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
        <Messages />
        <Input />
    </div>
  )
}
