import React from "react";

const Usercard = (userimg, firstname) => {
  return (
    <div>
      <img src={userimg} className="w-10 h-10 rounded-full" alt="" />
      <div>
        <h1>{name}</h1>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default Usercard;
