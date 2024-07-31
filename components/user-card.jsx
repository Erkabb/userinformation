import React from "react";

const Usercard = ({ userImg, firstName }) => {
  return (
    <div className="w-72 h-20 flex">
      <img src={userImg} className="w-10 h-10 rounded-full" alt="" />
      <div>
        <h1>{firstName}</h1>
      </div>
    </div>
  );
};

export default Usercard;
