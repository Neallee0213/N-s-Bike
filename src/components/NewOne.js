import React, { Component } from "react";
import Title from "./Title";
import { ProductContext } from "../context";

export default class NewOne extends Component {
    static contextType = ProductContext
    render() {
        const { products } = this.context;
        return (
            <>
                <div className="py-5" />
                <Title name="our New" title="products"></Title>
                <div className="py-5" />

                <div className="container">

                    <div className="row justify-content-center">

                        {products.map(product => {
                            if (product.newone === true) {
                                return (
                                    <div className="col-md-4 col-12 newone py-2 px-2" key={product.id}>
                                        <img className="img-fluid" src={product.img} alt={product.title} />
                                    </div>
                                )
                            }
                        })

                        }

                    </div>

                </div>
            </>
        );
    }
}