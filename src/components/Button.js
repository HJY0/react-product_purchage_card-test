import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import './Button.css';

export function Button() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  function changeButton() {
    if (counte) {
      const purchaseButton = document.querySelector('button');
    }
  }

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <button className="purchaseBtn">
        {isHovering ? (
          <svg
            width="318"
            height="56"
            viewBox="0 0 286 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_703_180)">
              <rect
                x="4"
                width="278"
                height="48"
                rx="6"
                fill="#0AAE4F"
                shape-rendering="crispEdges"
              />
              <rect
                width="28"
                height="28"
                transform="translate(99 10)"
                fill="white"
              />
              <path
                d="M106 17H110.719L115.263 23.5971V17H120V31H115.263L110.293 24.1082V31H106V17Z"
                fill="#03C75A"
              />
              <path
                d="M147.264 25.024V23.54H145.57C145.892 21.734 145.892 20.432 145.892 19.214V18.052H136.946V19.536H144.086C144.086 20.656 144.058 21.902 143.736 23.54H135.616V25.024H140.432V30.204H142.308V25.024H147.264ZM159.471 17.296H157.721V22.224H156.643V17.506H154.921V29.616H156.643V23.708H157.721V30.19H159.471V17.296ZM148.775 18.626V26.984H153.857V18.626H148.775ZM150.497 25.542V20.082H152.149V25.542H150.497ZM173.19 23.876V22.35H171.342V17.31H169.494V30.204H171.342V23.876H173.19ZM165.854 19.214V17.534H164.006V19.214H161.15V20.684H168.654V19.214H165.854ZM164.944 21.412C163.068 21.412 161.668 22.686 161.668 24.478C161.668 26.312 163.068 27.572 164.944 27.572C166.806 27.572 168.192 26.312 168.192 24.478C168.192 22.686 166.806 21.412 164.944 21.412ZM164.944 26.06C164.048 26.06 163.432 25.5 163.432 24.492C163.432 23.484 164.048 22.91 164.944 22.91C165.84 22.91 166.442 23.512 166.442 24.478C166.442 25.486 165.84 26.06 164.944 26.06ZM184.767 17.296H182.905V30.19H184.767V17.296ZM180.931 18.64H174.743V20.11H179.041C178.775 22.966 177.347 24.996 174.057 26.564L175.023 28.02C179.601 25.822 180.931 22.574 180.931 18.64Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_703_180"
                x="0"
                y="0"
                width="286"
                height="56"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_703_180"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_703_180"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        ) : (
          <svg
            width="318"
            height="48"
            viewBox="0 0 278 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="278" height="48" rx="6" fill="#03C75A" />
            <rect
              width="28"
              height="28"
              transform="translate(95 10)"
              fill="white"
            />
            <path
              d="M102 17H106.719L111.263 23.5971V17H116V31H111.263L106.293 24.1082V31H102V17Z"
              fill="#03C75A"
            />
            <path
              d="M143.264 25.024V23.54H141.57C141.892 21.734 141.892 20.432 141.892 19.214V18.052H132.946V19.536H140.086C140.086 20.656 140.058 21.902 139.736 23.54H131.616V25.024H136.432V30.204H138.308V25.024H143.264ZM155.471 17.296H153.721V22.224H152.643V17.506H150.921V29.616H152.643V23.708H153.721V30.19H155.471V17.296ZM144.775 18.626V26.984H149.857V18.626H144.775ZM146.497 25.542V20.082H148.149V25.542H146.497ZM169.19 23.876V22.35H167.342V17.31H165.494V30.204H167.342V23.876H169.19ZM161.854 19.214V17.534H160.006V19.214H157.15V20.684H164.654V19.214H161.854ZM160.944 21.412C159.068 21.412 157.668 22.686 157.668 24.478C157.668 26.312 159.068 27.572 160.944 27.572C162.806 27.572 164.192 26.312 164.192 24.478C164.192 22.686 162.806 21.412 160.944 21.412ZM160.944 26.06C160.048 26.06 159.432 25.5 159.432 24.492C159.432 23.484 160.048 22.91 160.944 22.91C161.84 22.91 162.442 23.512 162.442 24.478C162.442 25.486 161.84 26.06 160.944 26.06ZM180.767 17.296H178.905V30.19H180.767V17.296ZM176.931 18.64H170.743V20.11H175.041C174.775 22.966 173.347 24.996 170.057 26.564L171.023 28.02C175.601 25.822 176.931 22.574 176.931 18.64Z"
              fill="white"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
