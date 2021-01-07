import { useExpenseTracker } from '../../context/GlobalState';

import Transaction from '../Transaction';

const TransactionList = () => {
  const { transactions } = useExpenseTracker();

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length === 0 && (
          <p className="no-transactions">No transactions yet</p>
        )}
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
