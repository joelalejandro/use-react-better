import React from "react";
import useFormContext from "../../hooks/useFormContext";

export type InputProps = {
    type: string;
    value: string | number;
    name: string;
}

const Input: React.FC<InputProps> = (props) => {
    const [formContext, updateFormContext] = useFormContext();
    return <input
        onChange={({ target }) => updateFormContext(props.name, target.value)}
        value={formContext[props.name]}
        {...props} />
};

export default Input;