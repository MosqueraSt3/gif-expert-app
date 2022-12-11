import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('useFetchGifs custom hook', () => { 

    test('Should return the default value', () => {

        const { result } = renderHook( () => useFetchGifs('the walking dead' ));
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    })

    test('Should return images array and isLoading false', async () => {

        const { result } = renderHook( () => useFetchGifs('the walking dead' ));
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
        );
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    })

})