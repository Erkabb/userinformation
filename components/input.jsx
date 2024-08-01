import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Input = ({ handleChange }) => {
  const [searchName, setSearchName] = useState("");
  const changeVal = (e) => {
    handleChange(e.target.value);
  };
  return (
    <div className=" w-28 h-20 group">
      {" "}
      <button>
        <FaSearch />
      </button>
      <input type="text" onChange={changeVal} />
    </div>
  );
};

export default Input;
