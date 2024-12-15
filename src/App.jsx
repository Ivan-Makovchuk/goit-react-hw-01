import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import userData from "../src/components/Profile/userData.json";
import myFriends from "../src/components/FriendList/friends.json";
import transactions from "../src/components/TransactionHistory/transactions.json";

import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={myFriends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
