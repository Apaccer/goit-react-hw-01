import css from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead className={css.tableThred}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(items) &&
            items.map((item) => {
              return (
                <tr className={css.tr} key={item.id}>
                  <td className={css.type}>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.currency}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
