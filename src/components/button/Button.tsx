import React from "react";

type ButtonProps = {
    type: "submit" | "button"
};

const Button: React.FC<ButtonProps> = (props) => {
    const children = props.children;
    const type = props.type;

    return (
        <button type={type} className="ui-button">
            {children}
        </button>
    );
}

export default Button;