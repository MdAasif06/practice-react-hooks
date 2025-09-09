import { useState } from "react";

const TaskTwo = () => {
  const colors = ["Red", "Blue", "Green", "Orange", "Purple"];
  const [bgColor, setBgColor] = useState("yellow");
  

  return (
    <div className="min-h-96" style={{ backgroundColor: bgColor }}>
      <h1 className="text-3xl mb-2 ml-2">Select Background Color!</h1>
      {colors.map((color, index) => (
        <button
          onClick={() => setBgColor(color)}
          className="px-2 text-2xl text-white border border-black rounded-sm m-1 cursor-pointer"
          key={index}
          style={{ backgroundColor: color }}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default TaskTwo;
