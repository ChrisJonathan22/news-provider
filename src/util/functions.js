import axios from 'axios';

export async function fetchNews (endpoint, callback) {
    const RESULT = await axios.get(endpoint);
    callback(RESULT);
}