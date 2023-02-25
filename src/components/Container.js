import React, { useState } from 'react';
import productList from '../data/products';
import './Container.css';

export function Container() {
  // const [product, setProduct] = useState(productList);
  // const { name, sale, price } = productList
  // console.log(productList.name);

  return (
    <main>
      <p className="img">
        <img src="../assets/product.png" alt="상품 이미지" />
      </p>
      <div>
        <h2>래피젠 코로나 자가 검사 키트</h2>
        <h2>2개입X1박스</h2>
      </div>
      <div className="price">
        <p>88%</p>
        <p>56,760원</p>
        <p>6,370원</p>
      </div>
      <div className="info">
        <p>택배배송</p>
        <p>3,000원</p>
        <p>(주문시 결제)</p>
        <p>10개마다 부과</p>
      </div>
    </main>
  );
}
