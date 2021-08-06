// write your custom hook here to control your checkout form
import { useState } from 'react';

const useLocalStorage = (key, initValue) => {
    const [value, setValue] = useState(() => {
        if(localStorage.getItem(key)){
            return(JSON.parse(localStorage.getItem(key)));
        }
        localStorage.setItem(key, JSON.stringify(initValue));
        return(initValue);
    });
    const setLocalStorage = (value) => {
        setValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }
    return [value, setLocalStorage];
};


const useForm = (initValue) => {
    const [input, setInput] = useLocalStorage("form", initValue);

    const handleChanges = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
      };

    return[input, handleChanges];
}
export default useForm;