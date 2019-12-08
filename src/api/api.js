import axiosServe from '@/js/axiosServe'

export const getSalt = params => {
    return axiosServe({ url: '/api/getSalt', method: 'get', params })
}