import './profile.css';
import PropTypes from 'prop-types';

function Profile({ username, tag, location, avatar, stats }) {
  const keysStats = Object.keys(stats);
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">{keysStats[0]}</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">{keysStats[1]}</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">{keysStats[2]}</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
