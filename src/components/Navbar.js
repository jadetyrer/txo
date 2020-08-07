import React, {useState} from 'react';
import {NavLogo, NavContainer, NavLink, NavGroupDiv, ContactDiv, BurgerIcon, BurgerContactDiv, BurgerNavLink, BurgerNavGroupDiv, BurgerNavContainer, BurgerTop, CrossIcon} from './StyledComponents';


const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  function handelMenuOpen() {
    setShowMenu(true)
  }
  function handelMenuClose() {
    setShowMenu(false)
  }

  console.log(showMenu)

  return (
    <div>
      {showMenu && (
        <BurgerNavContainer>
        <BurgerTop>
          <NavLogo src="/txo_logo_2.svg" alt="txo logo"></NavLogo> 
          <CrossIcon src="/close.png" alt="cross menu icon" onClick={handelMenuClose}></CrossIcon>
        </BurgerTop>
        <BurgerContactDiv>
          <BurgerNavGroupDiv>
            <BurgerNavLink>ENQUIRIES</BurgerNavLink>
            <BurgerNavLink>General</BurgerNavLink>
            <BurgerNavLink>+44 (0) 020 3613 4733</BurgerNavLink>
            <BurgerNavLink>Info@txowork.com</BurgerNavLink>
            <BurgerNavLink></BurgerNavLink><br></br>
            <BurgerNavLink>Sales</BurgerNavLink>
            <BurgerNavLink>+44 (0) 020 3613 4733</BurgerNavLink>
            <BurgerNavLink>Info@txowork.com</BurgerNavLink>
          </BurgerNavGroupDiv>
          <BurgerNavGroupDiv>
            <BurgerNavLink>ADDRESS</BurgerNavLink>
            <BurgerNavLink>Morelands</BurgerNavLink>
            <BurgerNavLink>5-23 Old Street</BurgerNavLink>
            <BurgerNavLink>London EC1V 9HL</BurgerNavLink>
          </BurgerNavGroupDiv>
          <BurgerNavGroupDiv>
            <BurgerNavLink>CONNECT</BurgerNavLink>
            <BurgerNavLink>Instagram</BurgerNavLink>
            <BurgerNavLink>LinkedIn</BurgerNavLink>
            <BurgerNavLink>Facebook</BurgerNavLink>
          </BurgerNavGroupDiv>
        </BurgerContactDiv>
        </BurgerNavContainer>
      )}
      {!showMenu && (
        <NavContainer>
        <NavLogo src="/txo_logo_2.svg" alt="txo logo"></NavLogo>
        <ContactDiv>
        <BurgerIcon src="/menu.svg" alt="burger menu icon" onClick={handelMenuOpen}></BurgerIcon>
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
      )}
    </div>
  )
}

export default Navbar