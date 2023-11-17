import axios from "axios";
const httpAxios = axios.create({
  baseURL: 'http://localhost/quynhduong/public/api/',
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'}
});
export default httpAxios;