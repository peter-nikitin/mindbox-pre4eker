import React from "react";
import PropTypes from "prop-types";

const Cross = ({ color }) => (
  <div>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.21972 8L0 3.78028L3.78028 0L8 4.21972L12.2197 0L16 3.78028L11.7803 8L16 12.2197L12.2197 16L8 11.7803L3.78028 16L0 12.2197L4.21972 8Z"
        fill={color || "#000"}
      />
    </svg>
  </div>
);

Cross.defaultProps = {
  color: "",
};

Cross.propTypes = {
  color: PropTypes.string,
};

export default Cross;
