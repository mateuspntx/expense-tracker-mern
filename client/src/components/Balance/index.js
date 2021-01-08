import { useExpenseTracker } from '../../context/GlobalState';
import { formatNumber } from '../../utils/formatNumber';

const Balance = () => {
  const { transactions } = useExpenseTracker();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${formatNumber(total)}</h1>
    </>
  );
};

export default Balance;
