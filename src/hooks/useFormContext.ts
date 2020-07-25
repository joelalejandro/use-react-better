import { useContext } from "react";
import FormContext, { FormContextProps } from "../components/form/FormContext";

const createFormContextUpdater = (formContext: FormContextProps) => (inputName: string, inputValue: string | number) => {
    formContext.inputValues[inputName] = inputValue;
};

const useFormContext = () => {
    const formContext = useContext(FormContext);
    return [formContext, createFormContextUpdater(formContext)] as const;
}

export default useFormContext;

