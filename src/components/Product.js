import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

const ProductWrapper = styled.div`
margin-bottom: 3rem;
.card {
  margin :auto;
  width:90%;
    box-shadow: 4px 6px 13px 0px rgba(0,0,0,0.75);
    border-color: transparent;
    border:0;
    transition: all 1s linear;
  }
  .card-footer{
      background: transparent;
      border-top: transparent;
      transition: all 1s linear;
      
  }
  &:hover{
      .card{
        box-shadow: 6px 8px 13px 0px rgba(0,0,0,0.75);
      }
      .card-footer{
          background: rgba(247,247,247);
      }
  }
  .img-container{
      position:relative;
      overflow:hidden;
      background: var(--mainWhite);
      
      
  }
  .img-top{
    transition: all .3s linear;
  }
  .img-container:hover .img-top{
      transform:scale(1.1);
  }
  .cart-btn{
      position: absolute
      bottom:0;
      right:0;
      padding:.5rem 1rem;
      background: var(--pColor);
      border: none;
      color: var(--mainWhite);
      font-size:1.4rem;
      border-radius: .2rem 0 0 0;
      transform:translate(100%,100%);
      transition: all 0.3s linear;
  }
  .img-container:hover .cart-btn{
  transform: translate(0,0);
  }
  .cart-btn:hover{
      color:var(--mainDark);
      background:var(--mainWhite);
      cursor:pointer;
  }
  
  .infos{
    text-align: center;
    margin-top:15px;
    h5{
      font-weight: 300;
    }
    p{
      color:var(--pColor)
    }
  }
`;

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-12 col-md-6 col-lg-4">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container"
                onClick={() => {
                  value.handleDetatil(id);
                }}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="img-fluid img-top"></img>
                </Link>
                <div className="infos">
                  <h5>{title}</h5>
                  <p>${price}</p>
                </div>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      {" "}
                      added
                </p>
                  ) : (
                      <i className="fas fa-cart-plus"></i>
                    )}
                </button>
              </div>
            )}
          </ProductConsumer>
        </div>
      </ProductWrapper >
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
