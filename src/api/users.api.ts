import { ApiApp } from '.';
import { API_PRODUCTS } from '../constant';
// import { appApi } from '.


const productsApi = {
    getProducts: () => ApiApp.get(API_PRODUCTS),
    createProducts: () => ApiApp.post(API_PRODUCTS, { 'name': '123', 'id': 10 }),
    editProducts: (id: number) => ApiApp.put(API_PRODUCTS + '/' + id, { 'name': '123', 'id': 10 }),
    deleteProducts: (id: number) => ApiApp.delete(API_PRODUCTS + '/' + id)
};


export const { getProducts, createProducts, editProducts, deleteProducts } = productsApi;