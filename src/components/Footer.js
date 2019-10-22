import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";

const Footer = styled.div`
background:black;
    
    h2,h4{
        color:white;
    }
    p,li a{
        color: rgba(255,255,255,.5);
    }
    .links{
      ul {
          list-style-type: none;
        }
      li a{
        transition: color .2s;
        &:hover{
          text-decoration:none;
          color:white;
          }
      }
    }
    i{
        font-size: 25px;
    }
    a{
        color:white;
        transition: color .2s;
        &:hover{color:#4180CB}
      }
    .location{
      i{font-size: 18px;}
    }
    .copyright p{
        border-top:1px solid rgba(255,255,255,.1);
    } 
  
`;
const footer = () => {
    return (
        <>

            <Footer className="pt-3 pb-5 footer container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-xs-12 about-company">
                        <h2>N's Bike</h2>
                        <p className="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
                        <p>
                            <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank"><IoLogoFacebook /></a>
                            <a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank"><IoLogoInstagram /></a>
                        </p>
                    </div>
                    <div className="col-lg-2 col-xs-12 links">
                        <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                        <ul className="m-0 p-0">
                            <li><NavLink to="/">home</NavLink></li>
                            <li><NavLink to="/products">products</NavLink></li>
                            <li><NavLink to="/contact">contact</NavLink></li>
                            <li><NavLink to="/cart">cart</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-xs-12 location">
                        <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                        <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                        <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
                        <p><i className="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
                    </div>
                </div>
                <div className="row mt-5" />
            </Footer>
        </>
    )
}

export default footer
