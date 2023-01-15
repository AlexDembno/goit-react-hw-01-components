import './statistics.css';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  const element = stats.map(({ id, label, percentage }) => (
    <li key={id} className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  ));
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">{element}</ul>
    </section>
  );
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

export default Statistics;

Statistics.defaultProps = {
  stats: [],
};

Statistics.prototype = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
