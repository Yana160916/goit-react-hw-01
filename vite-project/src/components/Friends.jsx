import styles from "./Friends.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendListItem}>
      <div className={styles.friend}>
        <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={isOnline ? styles.online : styles.offline}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </div>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export { FriendList, FriendListItem };