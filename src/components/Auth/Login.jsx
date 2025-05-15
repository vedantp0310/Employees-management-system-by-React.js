import React, { useState } from 'react'

function Login({ handleLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')

  }
  return (
    <div className='flex h-full w-full items-center justify-center '>
      <div className='border-2 p-20 border-amber-300 rounded-3xl'>
        <form className='flex flex-col item-center justify-center'
          onSubmit={(e) => {
            submitHandler(e)
          }}>
          <h1 className='text-3xl text-center text-emerald-700 font-bold'>Login</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='mt-4 outline-none bg-transparent border-2 border-emerald-600 py-3 rounded-full px-5 placeholder:text-gray-200'
            type="email"
            placeholder='Enter the email'
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='mt-4 outline-none bg-transparent border-2 border-emerald-600 py-3 rounded-full px-5 placeholder:text-gray-200'
            type="password"
            placeholder='Enter the password'
          />
          <button className='text-white m-5 border-none outline-none  border-2 bg-emerald-600 py-3 rounded-full px-5 placeholder:text-white'>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Login