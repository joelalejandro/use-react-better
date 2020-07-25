import React from "react";
import FormContext from "./FormContext";
import useFormContext from "../../hooks/useFormContext";

const Form: React.FC = (props) => {
    const [formContext] = useFormContext();
    const { children } = props;
    return <form>
        <FormContext.Provider value={formContext}>
            {children}
        </FormContext.Provider>
    </form>
};

export default Form;