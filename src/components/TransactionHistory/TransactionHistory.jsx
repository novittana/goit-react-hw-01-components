import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export function TransactionHistory({ items }) {
  return (
      <table className={css.transaction_history}>
          <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency},index) => {
          return (
            <tr key={id} className={index%2===0 ? css.item_pair : css.item}>
              <td className={css.type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
