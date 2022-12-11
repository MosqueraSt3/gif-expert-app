import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('<GifExpertApp /> component', () => { 

    test('should match with the snapshot', () => { 
        const { container } = render(<GifExpertApp />);
        expect( container ).toMatchSnapshot();
    })

    test('Should containt the title', () => {

        render( <GifExpertApp /> );

        expect(screen.getByText('GifExpertApp'));

    })

})