import React from "react";

const ColorfulMessages = (props) => {
  const { color, message } = props;
  const contentsStyle = {
    color: color,
    fontSize: "20px"
  };

  return <p style={contentsStyle}>{message}</p>;
};

export default ColorfulMessages;
