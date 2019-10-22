import React, { Component } from 'react'
import Title from "../Title"
import CartColumns from "./CartColumns"
import EmptyCart from "./EmptyCart"
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";


export default class Cart extends Component {
    render() {
        return (
            <div className="container-fluid cart">


                <section>
                    <div className="py-5" />
                    <ProductConsumer>

                        {value => {
                            const { cart } = value;
                            if (cart.length > 0) {
                                return (
                                    <>
                                        <Title name="your" title="cart" />
                                        <div className="py-3" />
                                        <CartColumns />
                                        <CartList value={value} />
                                        <div className="mb-5" />
                                        <CartTotals value={value} history={this.props.history} />
                                    </>
                                )
                            }
                            else {
                                return (
                                    <EmptyCart />
                                )
                            }
                        }}
                    </ProductConsumer>

                </section>

            </div>
        );
    }
}
