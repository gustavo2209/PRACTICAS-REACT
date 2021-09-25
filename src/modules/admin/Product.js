import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";

const Product = ({product, index, handleDelete}) =>{

    const {name, detail, price, stock, id} = product;

    const type = (stock ? 'has-text-grey' : 'has-text-danger');

    return (
        <Fragment>
            <tr>
                <td className="has-text-grey">{index+1}</td>
                <td className="has-text-grey">{name}</td>
                <td className="has-text-grey">{detail}</td>
                <td className="has-text-grey">{price}</td>
                <td className={type}>{stock}</td>
                <td>
                    <a className="button is-small is-danger" style={{marginRight: '10px'}} onClick={()=>{handleDelete(id)}}>Eliminar</a>
                    <Link className="button is-small is-info" to={`products/${id}`}>Editar</Link>
                </td>
            </tr>
        </Fragment>
    );
}

export default Product;