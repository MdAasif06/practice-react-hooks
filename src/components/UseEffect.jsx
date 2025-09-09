import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [number,setNumber]=useState(0);
    const [change,setChange]=useState(0);

    //useEffect with dependency
    useEffect(()=>{
      setChange(change+1)
    },[number])
    //useEffect without dependency
    const [render,setRender]=useState(0);
    useEffect(()=>{
    //   setRender(render+1)
    })


    //useEffect with empty dependency
    useEffect(()=>{
        console.log("fetching data form database");
    },[])

  return (
    <div>
        <h1 className='text-3xl font-medium'>Counter value is : {number}</h1>
        <i className='text-3xl font-medium'>change value is : {change}</i>
        <div>
            <button onClick={()=>setNumber(number+1)} className='border px-2 m-2 rounded'>Increase</button>
            <button onClick={()=>setNumber(number-1)} className='border px-2 m-2 rounded'>Decrease</button>
            <button onClick={()=>setNumber(0)} className='border px-2 m-2 rounded'>Reset</button>
        </div>
        <br />
        <h3>render is : {render}</h3>
    </div>
  )
}

export default UseEffect