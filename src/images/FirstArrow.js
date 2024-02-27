import React from "react";

const FirstArrow = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={119} height={16} fill="none">
      <path
        fill={color}
        d="M.667 8a5.333 5.333 0 1 0 10.666 0A5.333 5.333 0 0 0 .667 8Zm118.04.707a1 1 0 0 0 0-1.414L112.343.929a1 1 0 1 0-1.414 1.414L116.586 8l-5.657 5.657a1 1 0 1 0 1.414 1.414l6.364-6.364ZM6 9h112V7H6v2Z"
      />
    </svg>
  );
};

export default FirstArrow;
