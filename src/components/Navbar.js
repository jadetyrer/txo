import React from 'react';
import { NavContainer, NavLogo, BurgerIcon, BurgerLabel } from './StyledComponents';
import WebNav from './WebNav'


const Navbar = () => {
  return (
    <NavContainer>
      <NavLogo src="/txo_logo_2.svg" alt="txo logo"></NavLogo>
      <BurgerIcon>
        <BurgerLabel for="toggle">&#9776;</BurgerLabel>
        <input type="checkbox" style={{display: "none"}}/>
      </BurgerIcon>
      <WebNav />
    </NavContainer>
  )
}

export default Navbar