import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  showTheAmount,
  selectCount,
  selectFacts,
} from './factsSlice';

function Facts() {
  const count = useSelector(selectCount);
  const facts = useSelector(selectFacts);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');

  const amountValue = Number(amount) || 0;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(showTheAmount(amountValue));
  };

  const handleIncrement = () => {
    dispatch(increment());

    setAmount(amount + 1);
  };

  const handleDecrement = () => {
    dispatch(decrement());
    setAmount(amount - 1);
  };

  return (
    <>
      <h1 className="py-3">Star Wars Fun Facts</h1>

      <div className="facts">
        <h4 className="mt-4">How many facts should we show? </h4>
        <form className="form my-3" onSubmit={handleSubmit}>
          <div className="container">
            <div className=" row">
              <div className="col-10">
                <input
                  type="number"
                  min={0}
                  max={10}
                  className="form-control"
                  id="amount"
                  name="amount"
                  aria-describedby="service"
                  placeholder="just type any number between 1 and 10"
                  value={amount}
                  onChange={(evt) => setAmount(Number(evt.target.value))}
                  autoFocus
                  required
                />
              </div>
              <div className="col-2">
                <button className="btn btn-warning col" type="submit">
                  Show
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="facts-frame p-2">
          <ul className="list">
            {facts.map((item) => (
              <li className="mb-2 card-wraper" key={item.id}>
                <div className="card">
                  {item.img && (
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt={item.alt}
                    />
                  )}
                  <div className="card-body">{`${item.id}. ${item.fact}`}</div>
                </div>
                {/* {`${item.id}. ${item.fact}`} */}
              </li>
            ))}
          </ul>
          {count > 0 && (
            <div>
              <a href="https://bestlifeonline.com/star-wars-facts/">BestLife</a>
              , thanks for the facts!
            </div>
          )}

          {count <= 0 && (
            <>
              <div className="facts-frame p-2">
                <div>
                  We know a lot of unexpected facts about Star Wars. Go ahead
                  and choose how many of them you would like to know.
                </div>
              </div>
              <button className="btn btn-warning m-2" onClick={handleIncrement}>
                Show first!
              </button>
            </>
          )}

          {count > 0 && count < 10 && (
            <button className="btn btn-warning m-2" onClick={handleIncrement}>
              Show me more!
            </button>
          )}
          {count > 0 && (
            <button className="btn btn-warning m-2" onClick={handleDecrement}>
              Show me less!
            </button>
          )}

          {count === 10 && (
            <div className="my-3">We will add more facts soon. Stay tuned!</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Facts;
