import React, { useState } from 'react';
import './Counter.css';

export function Counter() {
  const [count, setCount] = useState(1);
  const price = 6370;
  let totalPrice = price * count;

  const handleMiusButton = () => {
    console.log('mius');
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handlePlusButton = () => {
    console.log('plus');
    setCount(count + 1);
  };

  return (
    <>
      <div className="counter">
        <button className="button" onClick={handleMiusButton}>
          -
        </button>
        <p className="count">{count}</p>
        <button className="button" onClick={handlePlusButton}>
          +
        </button>
      </div>
      <div className="total">
        <p className="totalPriceInfo">총 상품 금액</p>
        <p className="totalCount">총 수량 {count}개</p>
        <p className="totalPrice">{priceToString(totalPrice)}원</p>
      </div>
    </>
  );
}

/* 숫자 천단위 콤마 */
function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
