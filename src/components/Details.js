import React, { Component } from 'react';
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button"
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, newone, img, info, price, title, inCart } =
                        value.detailProduct;
                    return (
                        <div className="container detail py-5 mt-5">
                            {/* <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    {title}
                                </div>
                            </div> */}
                            <div className="row my-5">
                                <div className="col-10 mx-auto col-lg-6 my-3">
                                    <img src={img} alt="img" className="img-fluid" />
                                </div>
                                <div className="col-10 mx-auto col-lg-6 my-3 text-capitalize">
                                    <h1 className="font-weight-light">Model: {title}</h1>
                                    <h4 className="text-title text-uppercase text-muted mt-5 mb-2">
                                        <span className="text-uppercese">{newone === true ? "New Product!" : null}</span>
                                    </h4>
                                    <h4 className="mt-5">
                                        <p className="text-muted">
                                            price: <span>$</span>
                                            {price}
                                        </p>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-5 mb-0">
                                        some info about product:
                                    </p>
                                    <p className="text-muted lead mt-3">
                                        {info}
                                    </p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                Back to product
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            cart
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? "added" : "add to cart"}
                                        </ButtonContainer>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )

                }}
            </ProductConsumer>
        )
    }
}
