import React from 'react';
import {FooterContainer, FooterLogo, FooterLink, LeftSection, RightSection} from './StyledComponents'

const Footer = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", marginBottom: "1.5em", marginTop: "7em"}}>
    <FooterContainer>
      <LeftSection>
        <FooterLogo src="thirdway.svg" alt="footer logo"></FooterLogo>
      </LeftSection>
      <RightSection>
        <FooterLink>Terms and Conditions</FooterLink>
        <FooterLink>Privacy Policy</FooterLink>
        <FooterLink>Cookie Policy</FooterLink>
        <FooterLink>Accessibility</FooterLink>
      </RightSection>
    </FooterContainer>
    </div>
  )
}

export default Footer