import React from "react";
const Navbar = ({func}) => {
  console.log("navbar is re-render");
  return (
    <div className="flex justify-between items-center bg-amber-200">
      <h1 className="">Navbar</h1>
      <ul className="flex gap-16">
        <li>Home</li>
        <li>Product</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default React.memo(Navbar);
