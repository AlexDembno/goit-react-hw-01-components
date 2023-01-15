import './friendList.css';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  const element = friends.map(friend => (
    <li key={friend.id} className="item">
      <span className="status">{friend.isOnline}</span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  ));
  return (
    <section className="friendList">
      <ul className="friend-list">{element}</ul>
    </section>
  );
}

export default FriendList;

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
