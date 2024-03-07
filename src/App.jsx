import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Profile from "./assets/components/Profile/Profile.jsx";
import userData from "../src/userData.json";
import friends from "../src/friends.json";
import FriendList from "./assets/components/FriendList/FriendList.jsx";
import TransactionHistory from "./assets/components/TransactionHistory/TransactionHistory.jsx";
import transactions from "../src/transactions.json";

function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
