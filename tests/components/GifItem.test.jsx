import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('<GifItem /> component', () => { 

    const title = 'The office';
    const url = 'https://test.com/the-office-image.jpg';

    test('should match with the snapshot', () => { 
        const { container } = render(<GifItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
    })

    test('should display the image with URL and ALT', () => { 
        render(<GifItem title={ title } url={ url } />);
        const { src, alt } = screen.getByRole('img');
        expect( alt ).toBe(title);
        expect( src ).toBe(url);
    })

    test('should display the title as a text', () => { 
        render(<GifItem title={ title } url={ url } />);
        expect( screen.getByText(title) ).toBeTruthy();
    })

})