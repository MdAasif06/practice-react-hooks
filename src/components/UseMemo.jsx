import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const [counter,setCounter]=useState(0);
  const [num,setNum]=useState('');


  const cubeOfNumber=(num)=>{
    console.log("calaulation of cube a number")
    return num*num*num;
  }
  let result=useMemo(()=>{
    return cubeOfNumber(num)
  },[num])
  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>Count is : {counter}</button><br />
      <input type="text" placeholder='enter a number' value={num} onChange={(e)=>setNum(e.target.value)}/>
      <h3>Cube is : {result}</h3>
    </div>
  )
}

export default UseMemo