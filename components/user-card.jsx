import React from "react";
import { MdOutlineClear } from "react-icons/md";

const Usercard = ({ userImg, firstName }) => {
  return (
    <div className="w-72 h-28 flex items-center border border-solid border-black rounded-md mt-20">
      <img src={userImg} alt="" />
      <div className="flex">
        <h1 className="">{firstName}</h1>
        <button>
          {" "}
          <MdOutlineClear className="group-hover:font-semibold" />
        </button>
      </div>
    </div>
  );
};

export default Usercard;
