import React from "react";

export type InputValues<T = string | number> = { [key: string]: T }

export type FormContextProps = {
    inputValues: InputValues;
}

const FormContext = React.createContext<FormContextProps>({
    inputValues: {}
});

export default FormContext;