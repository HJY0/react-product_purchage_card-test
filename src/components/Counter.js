import React, { useState } from 'react';
import './Counter.css';

export function Counter(total) {
  const [count, setCount] = useState(1);

  const price = 6370;
  let totalPrice = price * count;

  const handleIncrement = () => {
    // console.log('mius');
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleDecrement = () => {
    // console.log('plus');
    setCount(count + 1);
  };

  return (
    <>
      <div className="counter">
        <button className="button" onClick={handleIncrement}>
          -
        </button>
        <p className="count" tabIndex={0}>
          {count}
        </p>
        <button className="button" onClick={handleDecrement}>
          +
        </button>
      </div>
      <div className="total">
        <p className="totalPriceInfo">총 상품 금액</p>
        <div className="totalDeploy">
          <p className="totalCount" tabIndex={0}>
            총 수량 {count}개
          </p>
          <p className="totalPrice" tabIndex={0}>
            {priceToString(totalPrice)}원
          </p>
        </div>
      </div>
    </>
  );
}

/* 숫자 천단위 콤마 */
function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
