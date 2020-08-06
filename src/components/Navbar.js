import React from 'react';
import {NavLogo, NavContainer, NavLink, NavGroupDiv, ContactDiv, BurgerIcon} from './StyledComponents';


const Navbar = () => {
  return (
    <NavContainer>
      <NavLogo src="/txo_logo_2.svg" alt="txo logo"></NavLogo>
      <BurgerIcon src="/menu.svg" alt="burger menu icon"></BurgerIcon>
      <ContactDiv>
      <NavGroupDiv>
        <NavLink style={{marginBottom: "10px"}}>ENQUIRIES</NavLink>
        <NavLink>General</NavLink>
        <NavLink>+44 (0) 020 3613 4733</NavLink>
        <NavLink>Info@txowork.com</NavLink>
      </NavGroupDiv>
      <NavGroupDiv>
        <NavLink></NavLink><br></br>
        <NavLink>Sales</NavLink>
        <NavLink>+44 (0) 020 3613 4733</NavLink>
        <NavLink>Info@txowork.com</NavLink>
      </NavGroupDiv>
      <NavGroupDiv>
        <NavLink style={{marginBottom: "10px"}}>ADDRESS</NavLink>
        <NavLink>Morelands</NavLink>
        <NavLink>5-23 Old Street</NavLink>
        <NavLink>London EC1V 9HL</NavLink>
      </NavGroupDiv>
      <NavGroupDiv>
        <NavLink style={{marginBottom: "10px"}}>CONNECT</NavLink>
        <NavLink>Instagram</NavLink>
        <NavLink>LinkedIn</NavLink>
        <NavLink>Facebook</NavLink>
      </NavGroupDiv>
    </ContactDiv>
    </NavContainer>
  )
}

export default Navbar