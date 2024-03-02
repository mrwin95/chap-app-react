import React from 'react'

export default function Login() {
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
        <span className='logo'>Chat app</span>
        <span className='title'>Login</span>
        <form>
            
            <input type='text' placeholder='email'/>
            <input type='text' placeholder='password'/>
            
            <button>Sign in</button>
        </form>

        <p>You don't have an account? Register</p>
    </div>
</div>
  )
}
