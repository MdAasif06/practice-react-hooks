import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { useCallback } from "react";

const UseCallback = () => {
  const [counter, setCounter] = useState(0);
  const demo = useCallback(()=>{},[])
  return (
    <div>
      <Navbar func={demo} />
      <h1 className="font-semibold text-2xl">Counter value is: {counter}</h1>
      <button
        className="border border-gray-700 px-1.5 rounded-2xl ml-2.5"
        onClick={() => setCounter(counter + 1)}
      >
        click me!
      </button>
    </div>
  );
};

export default UseCallback;
