import React, { useRef, useState } from 'react'

const UseRefTwo = () => {
    const inputRef =useRef(null);
    const [name,setName]=useState('____');
  return (
    <div>
        <input type="text" placeholder='Enter your name...' ref={inputRef} />
        <button onClick={()=>setName(inputRef.current.value)} className='border ml-2'>Click me!</button>
        <h3>welcome {name}</h3>
    </div>
  )
}

export default UseRefTwo