import styles from './FriendListItem.module.css';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.isOnline : styles.isNotOnline}></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
