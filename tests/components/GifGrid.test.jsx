import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('<GifGrid /> component', () => { 

    const category = 'career opportunities';

    test('should display the loading', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={ category } /> );

        expect( screen.getByText('Loading...') );
        expect( screen.getByText(category) );
    })

    test('should display items when the images are loaded through useFetchGifs hook', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'career opportunities',
                url: 'https://gifs.com/career-opportunities.jpg',
            },
            {
                id: 'ABCD',
                title: 'breaking bad',
                url: 'https://gifs.com/breaking-bad.jpg',
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render( <GifGrid category={ category } /> );

        expect( screen.getAllByRole('img').length ).toBe(2);
    })

})