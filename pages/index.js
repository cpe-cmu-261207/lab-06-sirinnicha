import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import React from "react";
import axios from "axios";
import { useState } from "react";
import UserCard from "./components/UserCard";

export default function Home() {
  const [genAmount, setGenAmount] = useState(1);
  const [users, setUsers] = useState([]);

  const genUsers = async () => {
    if (genAmount < 1) {
      alert("invalid number");
      return;
    }
    const resp = await axios.get(
      `https://randomuser.me/api/?results=${genAmount}`
    );
    const newUser = [];
    for (const x of resp.data.results) {
      newUser.push({
        name: x.name.first + " " + x.name.last,
        email: x.email,
        imgUrl: x.picture.large,
        address: `${x.location.city} ${x.location.state} ${x.location.country} ${x.location.postcode}`,
      });
    }
    setUsers(newUser);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>
      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          id="input"
          onChange={(e) => setGenAmount(e.target.value)}
        />
        <button className="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>
      <p className="text-center mt-3 text-muted fst-italic">
        made by Sirinnicha Tawiwuttirat 620612152
      </p>

      {users.map((x) => (
        <UserCard
          key={x.name}
          name={x.name}
          img={x.imgUrl}
          email={x.email}
          address={x.address}
        />
      ))}
    </div>
  );
}
