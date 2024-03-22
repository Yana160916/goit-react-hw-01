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


export default  FriendListItem 