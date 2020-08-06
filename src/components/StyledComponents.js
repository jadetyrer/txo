import styled from 'styled-components'

// Navbar styles
export const NavLogo = styled.img `
  width: 7em;
  height: 7em;
  margin-left: 1.5em;
  @media (max-width: 420px) {
    width: 9em;
    height: 9em;
    margin-left: 1.5em
  }
`
export const NavContainer = styled.div `
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
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
export const BurgerIcon = styled.div `
  display: none;
  @media only screen and (max-width: 420px) {
    display: flex;
    width: 7em;
  }
`

// Title styles
export const TitleContainer = styled.div `
  padding-top: 10vh;
`
export const MainHeading = styled.div `
  font-size: 6.3em;
  line-height: 1em;
  letter-spacing: -0.05em;
  font-weight: lighter;
  width: 80vw;
  padding: 0.8em 0em .5em 0.3em;
`
export const SubContainer = styled.div `
  width: 45vw;
  margin: 0em 0em 0em 35em;
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
`
export const InfoContainer = styled.div `
display: flex;
width: 90vw;
padding: 1em 0em 1em 0em;
border-bottom: 2px solid #756355
`
export const ReadMoreContainer = styled.div `
  width: 90vw;
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
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
// footer styles
export const FooterContainer = styled.div `
  display: flex;
  width: 90vw;
`
export const FooterLogo = styled.img `
  height: 1.3em;
`
export const FooterLink = styled.div `
  display: flex;
  font-size: .8em;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
export const LeftSection = styled.div `
  width: 45vw;
`
export const RightSection = styled.div `
  width: 45vw;
  display: flex;
  justify-content: space-around;
`

// form styles
export const FormContainer = styled.div `
  width: 90vw;
`
export const FormSub = styled.div `
  font-size: 1.5em;
  letter-spacing: -0.045em;
`
export const FormHeading = styled.div `
  font-size: 6.5em;
  letter-spacing: -0.045em;
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
`