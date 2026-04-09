import { useState } from "react";

const Data = [
    {
      id: 1,
      name: "Akhil Kumar",
      age: 27 
    },
    {
      id: 2,
      name: "Priya Sharma",
      age: 28
    },
    {
      id: 3,
      name: "Rahul Verma",
      age: 30
    },
    {
      id: 4,
      name: "Sneha Reddy",
      age: 24
    },
    {
      id: 5,
      name: "Arjun Patel",
      age: 27
    }
  ];

export default function Counter() {
  const [users, setUsers] = useState(Data)
  

  return (
    <>
      {users.map((data) => (
        <h1>
          {data.name} - {data.age}
        </h1>
      ))}
    </>
  );
}