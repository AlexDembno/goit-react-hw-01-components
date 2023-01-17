import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';

function FriendList({ friends }) {
  const element = friends.map(({ id, ...props }) => (
    <FriendListItem key={id} {...props} />
  ));
  return (
    <section className={styles.section}>
      <ul>{element}</ul>
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
