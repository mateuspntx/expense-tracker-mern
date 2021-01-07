import { useState } from 'react';
import { useExpenseTracker } from '../../context/GlobalState';

const AddTransaction = () => {
  const { addTransaction } = useExpenseTracker();

  const [showAddTransactionBox, setShowAddTransactionBox] = useState(false);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <div className="add-new-transaction__header">
        <h4>Add new transaction</h4>
        <button
          className={showAddTransactionBox ? 'btn btn-close' : 'btn'}
          onClick={() =>
            setShowAddTransactionBox((prevState) => prevState != true)
          }
        >
          {showAddTransactionBox ? 'x' : '+'}
        </button>
      </div>

      {showAddTransactionBox && (
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..."
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      )}
    </>
  );
};

export default AddTransaction;
