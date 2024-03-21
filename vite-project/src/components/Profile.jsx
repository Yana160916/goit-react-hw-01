import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profileContainer}> 
      <div className={styles.profileInfo}>
        <img
          src={image}
          alt="User avatar"
          className={styles.profileImage} 
        />
        <p className={styles.Name}>{name}</p>
        <p className={styles.Tag}>@{tag}</p>
        <p className={styles.Location}>{location}</p>
      </div>

      <ul className={styles.profileStats}> 
        <li className={styles.List}>
          <span className={styles.ListStats}>Followers</span>
          <span className={styles.ListStatsItems}>{stats.followers}</span>
        </li>
        <li className={styles.List}>
          <span className={styles.ListStats}>Views</span>
          <span className={styles.ListStatsItems}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.ListStats}>Likes</span>
          <span className={styles.ListStatsItems}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;