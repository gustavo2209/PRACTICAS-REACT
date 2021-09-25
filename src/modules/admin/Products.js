import React, { Component } from 'react';
import SearchProduct from './SearchProduct';
import Product from './Product';
import { ProductService } from '../services/ProductService';
import { Link } from 'react-router-dom';

/*const products = [
    {
        id: 1,
        name: 'SAMSUNG TV 49 4K UHD',
        detail: 'Modelo: 4UK6200',
        price: '1499.99',
        stock: 10
    },
    {
        id: 2,
        name: 'SONY TV 79 6K UHD',
        detail: 'Modelo: 4UK7200',
        price: '11499.99',
        stock: 2
    },
    {
        id: 3,
        name: 'PHILIPS TV 105 10K WUHD',
        detail: 'Modelo: 10UKX100',
        price: '499.99',
        stock: 1
    }
];*/

class Products extends Component {

    constructor(props){
        super(props);
        this.state = {
            titles : ['#', 'Nombre', 'Detalle', 'Precio', 'Stock', 'Acciones'],
            filteredProducts: [],
            products: []
        }
    }

    componentDidMount (){
        ProductService.getProducts().then(response => {
            const {data: products} = response;
            this.setState({products, filteredProducts: products});
        });
    }

    /*handleDelete = id => {
        const products = this.state.products.filter(product=> product.id !== id);
        this.setState ({
            products,
            filteredProducts: products
        });
    };*/

    handleDelete = id => {
        ProductService.removeProduct(id).then( () => {
            const products = this.state.products.filter(product=> product.id !== id);
            this.setState ({
                products,
                filteredProducts: products
            });
        });
    }

    handleSearchProduct = searchValue => {
        if(searchValue){
            const value = searchValue.toLowerCase();
            this.setState(prevState => {
                return{
                    filteredProducts : prevState.products.filter(product => (product.name.toLowerCase().includes(value)))
                }
            });
        }else{

        }
    }

    render(){

        const {titles, filteredProducts} = this.state;

        return (
            <div className="columns" style={{marginTop:'20px'}}>
                <div className="column is-10 is-offset-1">
                    <div className="level">
                        <div className="level-left">
                            <h2 className="subtitle is-3">
                                Lista de Productos
                            </h2>
                        </div>
                        <div className="level-right">
                            <Link to="/admin/products/new" className="button is-link">Nuevo Producto</Link>
                        </div>
                    </div>

                    { filteredProducts.length > 0 ? (
                        <>

                            <SearchProduct handleSearchProduct = {this.handleSearchProduct}/>

                            <table className="table is-striped is-hoverable is-bordered is-fullwidth">
                                <thead>
                                    <tr>
                                        {
                                            titles.map((title, index) => (
                                                <th key={index}>
                                                    {title}
                                                </th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filteredProducts.map((product, index) => (
                                            <Product product = {product} key={product.id} index={index} handleDelete={this.handleDelete} />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </>
                    ) : <p className="has-next-centered">NO HAY PRODUCTOS, PROCEDA A CREAR UNO</p>
                    }
                </div>
            </div>
        );
    }
}

export default Products;