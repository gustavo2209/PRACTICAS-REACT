import axios from 'axios';

export const ProductService = {
    REACT_APP_API_URL:require('dotenv').config(),
    API: 'products',
    getProducts(){
        const URL = `${process.env.REACT_APP_API_URL}/${this.API}`;
        console.log(URL);
        return axios.get(URL);
    },
    getProduct(id) {
        const URL = `${process.env.REACT_APP_API_URL}/${this.API}/${id}`;
        return axios.get(URL);
    },
    createProduct (product) {
        const URL = `${process.env.REACT_APP_API_URL}/${this.API}`;
        console.log(URL);
        return axios.post(URL, product);
    },
    updateProduct (product ){
        const URL = `${process.env.REACT_APP_API_URL}/${this.API}/${product.id}`;
        return axios.patch(URL, product);
    },
    removeProduct(id)  {
        const URL = `${process.env.REACT_APP_API_URL}/${this.API}/${id}`;
        return axios.delete(URL);
    },
}