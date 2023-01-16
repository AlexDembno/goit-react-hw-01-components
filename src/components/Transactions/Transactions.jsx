import styles from './Transactions.module.css';
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
  const element = items.map(({ id, type, amount, currency }) => (
    <tr key={id}>
      <td className={styles.tbody}>{type}</td>
      <td className={styles.tbody}>{amount}</td>
      <td className={styles.tbody}>{currency}</td>
    </tr>
  ));
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.thead}>Type</th>
          <th className={styles.thead}>Amount</th>
          <th className={styles.thead}>Currency</th>
        </tr>
      </thead>

      <tbody>{element}</tbody>
    </table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
