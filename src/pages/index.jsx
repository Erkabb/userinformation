import { useState } from "react";
import Input from "../../components/input";
import Usercard from "../../components/user-card";
import { MdOutlineClear } from "react-icons/md";
import { GrFormViewHide } from "react-icons/gr";

const profiles = [
  {
    id: 1,
    firstName: "John Doe",

    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    firstName: "Jane Smith",

    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    firstName: "Alice Johnson",

    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    firstName: "Bob Brown",

    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    firstName: "Charlie Davis",

    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export default function Home() {
  const [searchName, setSearchName] = useState("");
  const [users, setUser] = useState([
    {
      id: 1,
      firstName: "John Doe",

      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      firstName: "Jane Smith",

      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      firstName: "Alice Johnson",

      imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      firstName: "Bob Brown",

      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      firstName: "Charlie Davis",

      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ]);
  const handleChange = (text) => {
    setSearchName(text);
    const findUser = profiles.filter((user) => user.firstName.includes(text));
    setUser(findUser);
  };
  const deleteUser = (userID) => {
    const deletedUser = users.filter((user) => user.id !== userID);
    setUser(deletedUser);
  };

  return (
    <main className="flex flex-col items-center gap-10">
      <h1 className="w-80 h-5 bg-slate-600 shadow-md shadow-black text-center mt-20 rounded">
        User find app
      </h1>
      <div className="">
        <div className="flex">
          <Input handleChange={handleChange} />{" "}
          <p className="text-gray-200">{searchName}</p>
          <button
            className="border-none"
            onClick={() => {
              console.log("clear");
              setUser(null);
            }}
          >
            <MdOutlineClear />
          </button>
          <button
            className="border-none px-5"
            onClick={() => {
              console.log("view");
              setUser(profiles);
            }}
          >
            <GrFormViewHide />
          </button>
        </div>
        {users?.map((user) => {
          return (
            <Usercard
              userImg={user.imageUrl}
              firstName={user.firstName}
              userID={user.id}
              deleteUser={deleteUser}
            />
          );
        })}
        {!users && <p>Empty</p>}
      </div>
    </main>
  );
}
