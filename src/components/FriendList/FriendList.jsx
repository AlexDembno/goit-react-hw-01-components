import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  const element = friends.map(({ id, isOnline, avatar, name }) => (
    <li key={id} className={styles.item}>
      {isOnline ? (
        <span className={styles.isOnline}>{isOnline}</span>
      ) : (
        <span className={styles.isNotOnline}>{isOnline}</span>
      )}
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  ));
  return (
    <section className={styles.section}>
      <ul className={styles.friendList}>{element}</ul>
    </section>
  );
}

export default FriendList;

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
