export const getGifs = async (category) => {
    const token = 'XLCHw3gbM9OGc8868YiMABvBKOLzKtzE';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ token }&q=${ category }&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((value) => ({
        id: value.id,
        title: value.title,
        url: value.images.downsized_medium.url,
    }));
    return gifs;
}