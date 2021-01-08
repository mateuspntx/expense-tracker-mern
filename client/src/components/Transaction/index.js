import { useExpenseTracker } from '../../context/GlobalState';
import { formatNumber } from '../../utils/formatNumber';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useExpenseTracker();

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text}{' '}
        <span>
          {sign}${formatNumber(Math.abs(transaction.amount))}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction._id)}
        >
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
