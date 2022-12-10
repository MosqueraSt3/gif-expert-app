import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const inputSanitized = inputValue.trim()
        if (inputSanitized.length <= 1) return;
        onAddCategory(inputSanitized);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Search gifs" 
                value={ inputValue }
                onChange= { onInputChange  }
            />
        </form>
    )
}
