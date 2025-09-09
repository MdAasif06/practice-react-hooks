import React from 'react'

const TaskOne = () => {
    const colors=["#EF7743","#0A400C","#0D5EA6","#03A6A1","#2F5249","red"]
  return (
    <div>
        <h1 className='text-4xl m-4'>Color Buttons</h1>
        <div className='ml-2'>
            {colors.map((color,index)=>(
                <button className='border p-2 font-semi-bold text-white' key={index} style={{background:color}}>{color}</button>
            ))}
        </div>
    </div>
  )
}

export default TaskOne