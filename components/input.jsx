import React, { useState } from "react";

const Input = ({ handleChange }) => {
  // const [searchName, setSearchName] = useState("");
  const changeVal = (e) => {
    handleChange(e.target.value);
  };
  return (
    <>
      {" "}
      <input
        type="text"
        className=" border border-solid border-black"
        onChange={changeVal}
      />
    </>
  );
};

export default Input;
