import React, { Component } from 'react';
import { useParams, withRouter } from 'react-router';
import ProductForm from './ProductForm';
import { ProductService } from '../services/ProductService';

class NewProduct extends Component{

    constructor(props){
        super(props);
    }

    handleSubmit = product => {
        ProductService.createProduct(product).then(response => {
            this.goBack();
        });
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render(){

        const product = {name: '', detail: '', price: '', stock: ''};
        //{JSON.stringify(product, null, 2)}
        return (
            <div class="columns">
                <div className="column is-10 is-offset-1">
                    <h2 className="subtitle is-3 has-text-centered">Crear Producto</h2>
                    <div>
                        <ProductForm title ="Crear Producto" product = {product} submit = {this.handleSubmit} back = {this.goBack}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter ((props) => (<NewProduct {...props} params={useParams()} />));