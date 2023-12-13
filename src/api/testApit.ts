import axios from 'axios';


const testApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export default testApi; 