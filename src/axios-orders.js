import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builders.firebaseio.com/'
});

export default instance;