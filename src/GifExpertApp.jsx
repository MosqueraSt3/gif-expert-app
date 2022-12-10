import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One punch man']);

    const onAddCategory = (inputValue) => {
        if(categories.find((category) => category === inputValue)) return;
        setCategories([ inputValue, ...categories ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onAddCategory={ onAddCategory }

            />

            { 
                categories.map((category) => (
                    <GifGrid key={ category } category={ category } />
                )) 
            }
        </>
    )
}
