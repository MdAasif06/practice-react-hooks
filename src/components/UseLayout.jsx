import React from 'react'
import { useEffect,useLayoutEffect } from 'react'
const UseLayout = () => {
    useEffect(()=>{
        console.log("message from useEffect")
    },[])
    useLayoutEffect(()=>{
        console.log("message from useLayoutEffect")
    },[])
  return (
    <>
        <h2>Test Message</h2>
        {Array(40).fill('').map((item,index)=>(
            <li key={index}>{Math.pow(Math.random(),10)}</li>
        ))}
    </>
  )
}

export default UseLayout