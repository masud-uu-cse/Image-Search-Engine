import axios, { AxiosError, AxiosResponse } from 'axios';
import ResponseInterface, { ErrorResponseInterface } from '../interfaces/response.interface';

// ## handle http request response
export const responseBody = (response: AxiosResponse) => {
    return response.data;
};

// ## handle http request error
export const errorResponseBody = (error: AxiosError) => {
    // console.log('error.response:: ', error.response);
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        const response = error.response.data as ErrorResponseInterface;
        if (response?.code === 401) {
            console.log("Error:: ", response)
        }
        return response;
    }

    return error.request;
};

const client_id = import.meta.env.VITE_UNSPLASH_API_KEY;
if (!client_id) throw new Error("Client Id Not Found!!");

const axiosInstance = axios.create({
    timeout: 10000,
    headers: {
        Authorization: `Client-ID ${client_id}`,
    },
});

const httpRequest = {
    get: <T>(url = '', params = {}) =>
        axiosInstance.get<ResponseInterface<T>>(url, { params: params }).then(responseBody).catch(errorResponseBody),

    post: <T>(url = '', body = {}) => axiosInstance.post<ResponseInterface<T>>(url, body).then(responseBody).catch(errorResponseBody),

    put: <T>(url = '', body = {}) => axiosInstance.put<ResponseInterface<T>>(url, body).then(responseBody).catch(errorResponseBody),

    delete: <T>(url = '', params = {}, body = {}) =>
        axiosInstance
            .delete<ResponseInterface<T>>(url, {
                data: body,
                params: params,
            })
            .then(responseBody)
            .catch(errorResponseBody),
};

export default httpRequest;
