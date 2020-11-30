import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        return Promise.reject(err);
    })
    instance.interceptors.request.use(res => {
        return res
    }, err => {
        console.log(err)
    })
    return instance(config)
}