import React from "react";

const ReverseArrow = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={443}
      height={216}
      fill="none"
    >
      <path
        fill={color}
        d="M8.707 167.293a1 1 0 0 0-1.414 0l-6.364 6.364a1 1 0 1 0 1.414 1.414L8 169.414l5.657 5.657a1 1 0 1 0 1.414-1.414l-6.364-6.364ZM440.5.5V185h2V.5h-2Zm-29 213.5H38v2h373.5v-2ZM9 185v-17H7v17h2Zm29 29c-16.016 0-29-12.984-29-29H7c0 17.121 13.88 31 31 31v-2Zm402.5-29c0 16.016-12.984 29-29 29v2c17.121 0 31-13.879 31-31h-2Z"
      />
    </svg>
  );
};

export default ReverseArrow;
