import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import './Button.css';

export function Button({ disabled }) {
  /* function changeButton() {
    if (total === 0) {
      disabled = true;
    } else {
      disabled = false;
    }
  } */

  return (
    <>
      <button className="purchaseBtn" type="button" disabled={disabled}>
        <span className="logo">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="28" height="28" fill="white" />
            <path
              d="M7 7H11.719L16.2628 13.5971V7H21V21H16.2628L11.293 14.1082V21H7V7Z"
              fill="#03c75a"
            />
          </svg>
        </span>
        <span className="logoText">구매하기</span>
      </button>
    </>
  );
}
