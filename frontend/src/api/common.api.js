import fetch from 'cross-fetch';
import URI, { HOST, headers } from './config';
import { token } from '../utils/auth.util';
export const getAllCategories = async () => {
    const response = await fetch(`${HOST}/${URI.API_URI.CATEGORY}`, {
        method: 'get'
    });
    const json = await response.json();
    try {
        if (!json) throw json;
        else return json;
    } catch (error) {
        console.error(error);
    }

}
export const getAllUserWallets = async () => {
    const response = await fetch(`${HOST}/${URI.API_URI.WALLET}`, {
        method: 'get',
        headers: {
            ...headers,
            authorization: 'Bearer ' + token().access_token
        }
    });
    const json = await response.json();
    try {
        if (json.detail) throw json;
        else return json;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export const createCategory = async body => {
    try {
        const response = await fetch(`${HOST}/${URI.API_URI.CATEGORY}`, {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                authorization: 'Bearer ' + token().access_token
            }
        });
        const json = await response.json();

        if (!json) throw json;
        else return json;
    } catch (error) {
        console.error("error:",error);
        throw error;
    }
}