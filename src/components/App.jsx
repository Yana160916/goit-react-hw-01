import userData from "../userData.json";
import friendsData from "../friends.json";
import Profile from "./Profile.jsx";
import { FriendList } from "./Friends.jsx";
import './App.css';
import transactions from "../transactions.json";
import TransactionHistory from "./TransactionHistory.jsx";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;