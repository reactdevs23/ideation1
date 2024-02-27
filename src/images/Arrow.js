import React from "react";

const Arrow = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={156} height={16} fill="none">
      <path
        fill={color}
        d="M155.707 8.707a1 1 0 0 0 0-1.414L149.343.929a1 1 0 1 0-1.414 1.414L153.586 8l-5.657 5.657a1 1 0 1 0 1.414 1.414l6.364-6.364ZM0 9h155V7H0v2Z"
      />
    </svg>
  );
};

export default Arrow;
