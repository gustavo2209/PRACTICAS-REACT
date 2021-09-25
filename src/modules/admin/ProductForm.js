import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

const productScheme = yup.object({
    name : yup.string().required().min(6),
    detail : yup.string().required().min(15),
    price : yup.string().required(),
    stock : yup.number().required().min(0)
});

export default ({ title, product, submit, back }) => {
    return(
        <div className="container">
            <div className="columns">
                <div className="column is-8 is-offset-2">
                    <Formik 
                        enableReinitialize={true} 
                        initialValues={product} 
                        validationSchema={productScheme} 
                        onSubmit={(values) => {
                            values.stock = parseInt(values.stock, 10);
                            submit(values);
                        }}
                    >
                        {({
                            values, isValid, handleChange, handleSubmit
                        }) => (
                            <form action="" noValidate autoComplete="off">
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            placeholder="Nombre (min. 6 caracteres)"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            name="detail"
                                            value={values.detail}
                                            onChange={handleChange}
                                            placeholder="Detalle (min. 15 caracteres)"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            name="price"
                                            value={values.price}
                                            onChange={handleChange}
                                            placeholder="Precio"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            name="stock"
                                            value={values.stock}
                                            onChange={handleChange}
                                            placeholder="Stock"
                                        />
                                    </div>
                                </div>
                                <div className="field is-grouped is-grouped-centered">
                                    <p className="control">
                                        <button type="button" className="button" onClick={() => back()}>
                                            Regresar
                                        </button>
                                    </p>
                                    <p className="control">
                                        <button type="button" onClick={handleSubmit} className="button is-dark" disabled={!isValid}>
                                            {title}
                                        </button>
                                    </p>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};