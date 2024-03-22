import userData from "../data/userData.json";
import friendsData from "../data/friends.json";
import Profile from "./Profile/Profile.jsx";
import  FriendList  from "./FriendList/FriendList.jsx";
import './App.css';
import transactions from "../data/transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";

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