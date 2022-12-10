import { getGifs } from '../../src/helpers/getGifs';

describe('getGifs() helper', () => { 

    test('Should return gifs array', async () => {
        const gifs = await getGifs('The office');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id:    expect.any(String),
            title: expect.any(String),
            url:   expect.any(String),
        })
    })

})