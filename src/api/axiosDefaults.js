import axios from 'axios';

axios.defaults.baseURL = 'https://drfapiappy-f779baf3bc38.herokuapp.com/'

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

axios.defaults.withCredentials = true;