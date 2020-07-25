import React from "react";
import Input, { InputProps } from "../Input";

type CheckboxProps = InputProps & {
    type: "checkbox";
    checked: boolean;
};

const Checkbox: React.FC<CheckboxProps> = (
    props
) => <Input {...props} type="checkbox" />

export default Checkbox;