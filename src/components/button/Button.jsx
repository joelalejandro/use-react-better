import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
    const children = props.children;
    const type = props.type;

    return (
        <button type={type} className="ui-button">
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
};

export default Button;
