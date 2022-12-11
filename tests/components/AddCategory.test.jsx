import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('<AddCategory /> component', () => { 

    const inputValue = 'luffy';

    test('should change the input value', () => { 
        render(<AddCategory onAddCategory={ () => {} } />);
        const inputRender = screen.getByRole('textbox');

        fireEvent.input( inputRender, { target: { value: inputValue } } );

        expect(inputRender.value).toBe(inputValue);
    })

    test('should call onAddCategory func If has a value', () => {

        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={ onAddCategory } />);
        const inputRender = screen.getByRole('textbox');
        const formRender = screen.getByRole('form');

        fireEvent.input( inputRender, { target: { value: inputValue } } );
        fireEvent.submit(formRender);

        expect( inputRender.value ).toBe('');
        expect( onAddCategory ).toHaveBeenCalledTimes(1);
        expect( onAddCategory ).toHaveBeenCalledWith(inputValue);

    })

    test('Should not call onAddCategory If the input is empty', () => {

        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={ onAddCategory } />);
        const formRender = screen.getByRole('form');

        fireEvent.submit(formRender);

        expect( onAddCategory ).not.toHaveBeenCalled();

    })

})