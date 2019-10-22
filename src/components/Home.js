import React from 'react'
import NewOne from "./NewOne";
import Map from "./Map";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io"
import imgRepair from "../imgs/home_repair.jpeg"

const Home = () => {

    const MainSection = styled.div`
        margin-top: 30%;
        margin-left: -5%;

        @media only screen and (max-width: 1024px){
            margin-left: 2%;           
        }
        @media only screen and (max-width: 768px){
            margin-left: 3%;           
        }
        @media only screen and (max-width: 425px){
            margin-top: 100%;
            margin-left: 0%;
            border: 1px solid;
            border-color: transparent;
            background: rgba(225, 223, 224, 0.9);
            width:100%;
            text-align:center;

        }
        
    `;

    const ExploreBtn = styled.a`
        margin-top: 3rem;
        background: transparent;
        color: var(--mainBlack)
        margin: 0 atuo;
        cursor:pointer;
        border-color: var(--mainBlack)
        text-transform: uppercase;
        
        outline:none;
        .btn:focus{
            outline: none;
            // color:var(--mainBlack);
            // background: none;
        }
        &:active{
            outline: none;
        }
        &:hover{
            outline: none;
        }
        @media only screen and (max-width: 425px){
            margin-top: 10px;
            background: rgba(225, 223, 224, 0.9);
        }
    `;
    const HomeArrow = styled.a`
    margin-top:15%;
    margin-left:-3%;
    border: none;
    background:transparent;
    animation: animate 1s linear infinite;
    cursor:pointer;
    h1:nth-child(1){
        margin-top: -45px;
    }
    h1:nth-child(2){
        margin-top: -45px;
    }
    
    @keyframes animate{
        0%{
            color:#222;
            transform:translate(0,0);
        }
        20%{
            color:#222;
            transform:translate(0,15px);       
        }
        20.1%,100%{
            color:#222;      
        }
        
}
@media only screen and (max-width: 1024px){
    margin-left:3%;
    margin-top: 10%;
}        
@media only screen and (max-width: 768px){
    margin-left:5%;
    margin-top: 10%;
}        
@media only screen and (max-width: 425px){
    margin-left:40%;
    margin-top: 70%;
}        
`;
    const IntroSection = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    h1,h3,p{
        margin-top: 5rem;
        letter-spacing: 2px;
    }
    h1{
        font-weight:200;
        text-transform: uppercase;
    }
`;
    const Insta = styled.div`
    width 30%;
    text-align: center;
    margin-top: 10rem;
    h3{
        letter-spacing: 4px;
        font-weight: 200;
    }
    a{
        text-decoration: none;
    }
    &:hover{ 
        transform: scale(1.1);
        transition: all ease 500ms;  
      }
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1);
        100% { transform: scale(1); }
        }
      }
      
    }
    p{  margin-top:100px;
        padding: 20px;
        letter-spacing: 4px;
        border: 2px solid black;
        font-weight:500;
        color:black
    }
   
    
`;

    return (
        <>

            <div className="container-fluid hero">
                <div className="container">
                    <div className="row">
                        <MainSection className="col-12 col-md-6">
                            <h1>
                                We designed from scteach.
                            </h1>
                            <p>Et incididunt ex aliqua quis ex qui consequat ea laboris sunt ipsum laboris.</p>
                            <ExploreBtn className="btn" href="#section2">Explore our product</ExploreBtn>
                        </MainSection>
                    </div>
                    <div className="row">
                        <HomeArrow href="#section2">
                            <h1><IoIosArrowDown /></h1>
                            <h1><IoIosArrowDown /></h1>
                        </HomeArrow>
                    </div>
                </div>

            </div>
            <IntroSection className="container" id="section2">
                <div className="row justify-content-between">
                    <div className="col-12 col-md-6">
                        <img src={imgRepair} alt="repaire" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-5">
                        <h1>THE N's Bike COMPANY</h1>
                        <h3>You design it, We built it</h3>
                        <p>
                            Ad velit excepteur sunt aute. Do reprehenderit dolore magna veniam occaecat ipsum elit pariatur sint.
                            Tempor exercitation labore tempor quis. Commodo tempor ut laborum enim. Veniam labore laboris irure laborum aliqua officia.
                            Cillum velit Lorem occaecat dolor Lorem ullamco.
                            Irure enim ad esse sint amet.
                            Esse occaecat excepteur aliquip ea dolor excepteur ipsum.
                            Excepteur minim esse proident do ipsum dolor dolor.
                        </p>
                        <p>
                            Do reprehenderit dolore magna veniam occaecat ipsum elit pariatur sint.
                            Tempor exercitation labore tempor quis. Commodo tempor ut laborum enim. Veniam labore laboris irure laborum aliqua officia.
                            Cillum velit Lorem occaecat dolor Lorem ullamco.
                        </p>
                    </div>
                </div>
            </IntroSection>
            <div className="container-fluid">
                <NewOne />
            </div>
            <Map />
            <Insta className="container">
                <div className="row">
                    <div className="col py-5">
                        <h3>FOLLOW OUR JOURNEYS ON</h3>
                        <a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                            <p>#N's Bike</p>
                        </a>
                    </div>
                </div>
            </Insta>


        </>
    )
}

export default Home
