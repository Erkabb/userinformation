import React, { useState } from "react";

const Input = () => {
  const [searchName, setSearchName] = useState("");
  const handleCHange = (e) => {
    console.log(e.target.value);
    setSearchName(e.target.value);
  };
  return (
    <>
      {" "}
      <input
        type="text"
        className=" border border-solid border-black"
        onChange={handleCHange}
      />
      <p>Search value:{searchName}</p>
    </>
  );
};

export default Input;
