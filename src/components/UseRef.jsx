import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const number= useRef(0);
  useEffect(() => {
    number.current +=1;
  });
  return (
    <div>
      <h2> Count value is : {count}</h2>
      <h2> Render value is : {number.current}</h2>
      <button onClick={() => setCount(count + 1)} className="border px-2">
        Increase
      </button>
    </div>
  );
};

export default UseRef;
