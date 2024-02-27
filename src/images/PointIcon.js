import React from "react";

const PointIcon = ({ bg, borderColor }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none">
      <circle
        cx={13}
        cy={13}
        r={10}
        fill={bg}
        stroke={borderColor}
        strokeWidth={6}
      />
    </svg>
  );
};

export default PointIcon;
