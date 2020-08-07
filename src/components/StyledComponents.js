import styled from 'styled-components'

// Navbar styles
export const NavLogo = styled.img `
  width: 7em;
  height: 7em;
  margin-left: 1.5em;
  @media (max-width: 420px) {
    width: 80px;
    height: 80px;
    margin-left: 10px
  }
`
export const NavContainer = styled.div `
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100vw;
  height: auto;
  background-color: #F9F5EE;
  z-index: 10;
  padding: 0;
`
export const NavGroupDiv = styled.li `
  display: flex;
  flex-direction: column;
  Letter-spacing: -0.045em;
  margin: 1em 3em 0em 0em;
  @media screen and (max-width: 750px) {
    visibility: none;
    display: none;
  }
`
export const NavLink = styled.div `
  Font-size: .8em;
  Line-height: 1em;
  Letter-spacing: -0.045em;
  font-weight: lighter;
`
export const ContactDiv = styled.div `
  display: flex;
  justify-content: flex-end;
`
export const BurgerNavContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100vw;
  height: auto;
  background-color: #F9F5EE;
  z-index: 10;
  padding: 0;
`
export const BurgerIcon = styled.img `
  display: none;
  @media only screen and (max-width: 750px) {
    display: flex;
    width: 40px;
    height: auto;
    padding-right: 20px;
  }
`
export const BurgerContactDiv = styled.div `
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
` 
export const BurgerNavLink = styled.div `

`
export const BurgerNavGroupDiv = styled.div `
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 20px;
  border-top: 2px solid #756355;
  padding-top: 10px;
`
export const BurgerTop = styled.div `
  display: flex;
  justify-content: space-between; 
`
export const CrossIcon = styled.img `
  display: flex;
  width: 30px;
  height: 30px;
  padding: 20px;
`
// Title styles
export const TitleContainer = styled.div `
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
  width: 100vw;
  height: auto;
`
export const MainHeading = styled.div `
  display: flex;
  font-size: 6.3em;
  line-height: 1em;
  letter-spacing: -0.05em;
  font-weight: lighter;
  width: 80vw;
  height: auto;
  padding: 0.8em 0em .5em 0.3em;
  @media screen and (max-width: 420px) {
    font-size: 50px;
    width: 100vw;
  }
`
export const SubContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 45vw;
  height: auto;
  margin: 0em 0em 0em 35em;
  @media screen and (max-width: 420px) {
    width: 100vw;
    height: auto;
    margin: 10px;
  }
  @media screen and (max-width: 769px) {
    width: 90vw;
    height: auto;
    margin: 10px;
  }
`
export const SubTitle = styled.div  `
  font-size: 0.8em;
  margin-bottom: 1em
`
export const SubHeading = styled.div `
  Font-size: 2em;
  letter-spacing: -0.045em;
  margin-bottom: 2em;
`
// carousel styles 
export const Slider = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`
export const CarouselContainer = styled.div `
  
`
export const InfoTitle = styled.div `
  font-size: 1.8em;
  letter-spacing: -0.045em;
  width: 45vw;
  height: auto;
  @media screen and (max-width: 420px) {
    width: 100vw;
    font-size: 13px;
  }
`
export const InfoContainer = styled.div `
display: flex;
width: 90vw;
height: auto;
padding: 1em 0em 1em 0em;
border-bottom: 2px solid #756355
`
export const Empty = styled.div `
  width: 45vw;
  @media screen and (max-width: 420px) {
    width: 0;
  }
`
export const InfoDiv = styled.div `
  font-size: 1.8em;
  letter-spacing: -0.045em;
  width: 45vw;
  @media screen and (max-width: 420px) {
    width: 100vw;
    font-size: 13px;
  }
`
export const ReadMoreContainer = styled.div `
  width: 90vw;
  height: auto;
`
export const ReadMoreButton = styled.button `
  background-color: #F9F5EE;
  border: none;
  font-size: 1.7em;
  color: #756355;
  opacity: 0.3;
  padding: 0px;
  margin-top: .8em;
  outline: none;
  @media screen and (max-width: 420px) {
    font-size: 15px;
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
// footer styles
export const FooterContainer = styled.div `
  display: flex;
  width: 90vw;
  @media screen and (max-width: 420px) {
    flex-direction: column;
    width: 90vw;
  }
`
export const FooterLogo = styled.img `
  height: 1.3em;
  @media screen and (max-width: 420px) {
    padding: 10px;
  }
`
export const FooterLink = styled.div `
  display: flex;
  font-size: .8em;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  @media screen and (max-width: 420px) {
    font-size: 8px;
  }
`
export const LeftSection = styled.div `
  width: 45vw;
  @media screen and (max-width: 420px) {
    width: 100vw;
  }
`
export const RightSection = styled.div `
  width: 45vw;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 420px) {
    width: 100vw;
  }
`

// form styles
export const FormContainer = styled.div `
  width: 90vw;
  @media and screen and (max-width: 420px) {
    width: 100vw;
  }
`
export const FormSub = styled.div `
  font-size: 1.5em;
  letter-spacing: -0.045em;
  @media and screen and (max-width: 420px) {
    font-size: 70px;
  }
`
export const FormHeading = styled.div `
  font-size: 6.5em;
  letter-spacing: -0.045em;
  @media screen and (max-width: 420px) {
    font-size: 45px;
  }
`
export const FormBlock = styled.div `

`
export const Input = styled.input `
  font-size: 6.5em;
  background-color: #F9F5EE;
  border: none;
  color: #756355;
  outline: none; 
  cursor: text;
  margin: -.1em;
  ::placeholder {
    color: #756355;
    opacity: 0.3;
    letter-spacing: -0.045em;
  } 
  @media screen and (max-width: 420px) {
    font-size: 45px;
    width: 100vw;
  }
`
export const SubmitButton = styled.button `
  background-color: #F9F5EE;
  border: none;
  font-size: 1.8em;
  color: #756355;
  padding: 0px;
  margin-top: 1.5em;
  outline: none;
  &:hover {
    opacity: 1;
    cursor: pointer;
    text-decoration: underline;
  }
  @media screen and (max-width: 420px) {
    font-size: 20px;
    margin-top: .8em
  }
`