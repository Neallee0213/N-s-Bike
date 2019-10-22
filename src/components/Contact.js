import React from 'react'
import styled from "styled-components";
import "../App.css"
const ContactForm = styled.div`
    height:100vh;
.contact-form{
    margin:0 auto;
    margin-top:15%;
}
h1,p{
    text-align:center;
 
}
h1{
    font-size:4rem;
    color:var(--mainWhite)
}
p{
    color:var(--pColor);
    font-size:2rem;
}
label{
    color:var(--mainWhite);
}
.btn{
    display: block;
    outline: none;
    border: 1px solid white;
    border-radius: 10%;
    background: white;
    color:var(--mainDark);
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 50px;
    margin-left: 45%;
    width: 10%;
    font-size: 1.5rem;
    font-weight: 100;
    letter-spacing: 2px;
    
  }
`;
const ContactUs = () => {
    return (
        <>


            <ContactForm className="contact_hero">

                <div className="container mt-10">
                    <div className="row">
                        <div className="contact-form col-10">
                            <h1>Any question?</h1>
                            <p>Please, Feel free to ask questions at any point!</p>
                            <br />
                            <div className="txtb">
                                <label>Full Name :</label>
                                <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                            </div>
                            <div className="txtb">
                                <label>Email :</label>
                                <input className="form-control" id="email" name="email" placeholder="Email" type="text" required />
                            </div>
                            <div className="txtb">
                                <label>Phone Number :</label>
                                <input className="form-control" id="Phone" name="Phone" placeholder="Phone Number" type="text" required />
                            </div>
                            <div className="txtb mt-5">
                                <textarea name="message" id="message" rows="5" className="form-control" placeholder="Message"></textarea>
                            </div>

                            <button className="btn">
                                Send
                        </button>
                        </div>
                    </div>


                </div>
            </ContactForm>
        </>
    )
}

export default ContactUs
