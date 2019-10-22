import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.2rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${props => props.cart ? "var(--pColor)" : " var(--lightBlue)"};
  color:${prop => prop.cart ? "var(--pColor)" : "var(--lightBlue)"};
  border-radius: .5rem;
  padding .2rem .5rem;
  cursor:pointer;
  margin .2rem .5rem .2rem 0;
  transition: all .5s ease-in-out;
  &:hover{
      background:${prop => prop.cart ? "var(--pColor)" : "var(--lightBlue)"};
      color:white !important;
color: var(--mainBlue);
  }
  &: focus{
  outline: none;
}
`;
