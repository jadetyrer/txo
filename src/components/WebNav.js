import React from 'react';
import {NavGroupDiv, NavLink, ContactDiv} from './StyledComponents';

const WebNav = () => {
  return (
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
  )
}

export default WebNav