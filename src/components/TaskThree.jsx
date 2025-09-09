import React, { useState } from "react";

const TaskThree = () => {
  const[text,setTest]=useState(true)
  return (
    <div className="grid justify-center mt-20">
      <div className="border w-50 h-15 text-center pt-4 mb-4 text-3xl font-medium">
        {text?`Subscribe`:null}
        </div>
      <div className="flex justify-between">
        <button onClick={()=>setTest(!text)} className="bg-red-500 border w-20 rounded cursor-pointer">Hide</button>
        <button onClick={()=>setTest(!text)} className="bg-blue-300 border w-20 rounded cursor-pointer">Show</button>
      </div>
    </div>
  );
};

export default TaskThree;
