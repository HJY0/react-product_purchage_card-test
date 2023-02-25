import React, { useState } from 'react';
import productList from '../data/products';
import './Container.css';

export function Container() {
  // const [product, setProduct] = useState(productList);
  // const { name, sale, price } = productList
  // console.log(productList.name);

  return (
    <main>
      <img
        className="productImg"
        src="https://www.docdocdoc.co.kr/news/photo/202107/2012563_2016096_377.png"
        alt="상품 이미지"
      />
      <div>
        <h2>래피젠 코로나 자가 검사 키트</h2>
        <h2>2개입X1박스</h2>
      </div>
      <div className="price">
        <span className="a11y">할인율</span>
        <p className="sale" tabIndex={0}>
          88%
        </p>
        <span className="a11y">정가가</span>
        <p className="originalprice" tabIndex={0}>
          56,760원
        </p>
        <span className="a11y">할인가</span>
        <p className="saleprice" tabIndex={0}>
          6,370원
        </p>
      </div>
      <div className="info">
        <span>택배배송</span>
        <span>3,000원</span>
        <span>(주문시 결제)</span>
      </div>
      <span className="description">10개마다 부과</span>
    </main>
  );
}
