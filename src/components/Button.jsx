import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="border-[2px] solid white rounded-[10px] px-3 py-3 mt-5">
        {props.text}
      </button>
    </div>
  );
};

export default Button;
