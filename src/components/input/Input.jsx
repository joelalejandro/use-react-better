import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
    return <input {...props}></input>
};

Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Input;