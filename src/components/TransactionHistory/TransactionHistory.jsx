import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead className={css.transactionHead}>
        <tr>
          <th className={css.transactionTitle}>Type</th>
          <th className={css.transactionTitle}>Amount</th>
          <th className={css.transactionTitle}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transactionBody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.transactionBodyTr}>
              <td className={css.transactionBodyTd}>{type}</td>
              <td className={css.transactionBodyTd}>{amount}</td>
              <td className={css.transactionBodyTd}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
