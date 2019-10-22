import React, { Component } from "react";
import Product from "./Product";
import styled from "styled-components";
import Title from "./Title";
import { ProductConsumer } from "../context";
const ForProduct = styled.div`
// width:50%
`;
export default class ProductList extends Component {
  render() {
    return (
      <>
        <div className="py-5" />

        <div className="container">
          <Title name="our" title="products"></Title>
          <div className="py-5" />
          <ForProduct className="row justify-content-center">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </ForProduct>
        </div>

      </>
    );
  }
}
