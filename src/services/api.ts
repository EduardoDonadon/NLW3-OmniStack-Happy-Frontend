import axios from 'axios';

const api = axios.create({
    baseURL: 'https://happy-next-level-week.herokuapp.com',
});

export default api;