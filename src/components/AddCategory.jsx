import { useState } from 'react';
import PropTypes from 'prop-types';

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
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text"
                placeholder="Search gifs" 
                value={ inputValue }
                onChange= { onInputChange  }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}
