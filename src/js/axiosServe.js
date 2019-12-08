import axios from 'axios';
import {storage} from "./storage";

const axiosServe = axios.create({
   timeout:18000,
});

axiosServe.interceptors.request.use((config)=>{
    const token = storage.getToken();
    if (token){
        config.headers['X-Token'] = token;
        config.headers['X-UserType'] = storage.getUserInfo().userType;
    }
    return config;
},(error) =>{
    return Promise.reject(error)
});

axiosServe.interceptors.response.use((response) =>{
return response
},(error)=>{
    return Promise.reject(error)
});

export  default  axiosServe
