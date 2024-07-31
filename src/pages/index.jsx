import { useState } from "react";
import Input from "../../components/input";
import Usercard from "../../components/user-card";

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
    setSearchName(text``);
    const findUser = profiles.filter((user) => user.firstName.includes(text));
    setUser(findUser);
  };

  return (
    <main className="flex flex-col items-center">
      <h1>User find app</h1>
      <div>
        <Input handleChange={handleChange} />
        <p>Search value:{searchName}</p>
        <button
          className="border border-rounded"
          onClick={() => {
            console.log("clear");
            setUser = null;
          }}
        >
          clear
        </button>
        <button
          className="border border-rounded"
          onClick={() => {
            console.log("view");
          }}
        >
          view
        </button>
        {users?.map((user) => {
          return (
            <Usercard userImg={user.imageUrl} firstName={user.firstName} />
          );
        })}
        {!users && <p>Empty</p>}
      </div>
    </main>
  );
}
