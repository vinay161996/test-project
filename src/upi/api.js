
const BASE_URL = 'https://api.tvmaze.com'

export const fetchDataFromApi = async (url) => {
    try {
        const data = await fetch(`${BASE_URL}${url}`).then(res => res.json());
        return data;
    } catch (err) {
        console.error(err)
        return err;
    }
}