import { createGlobalStyle } from 'styled-components'
import MessinaSansWeb from '../globalStyles/MessinaSansWeb-Regular.woff'
import MessinaSansWeb2 from '../globalStyles/MessinaSansWeb-Regular.woff2'
import MessinaSansWebEot from '../globalStyles/MessinaSansWeb-Regular.eot'

const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: MessinaSansWeb;
	src: url(${MessinaSansWeb || MessinaSansWeb2 || MessinaSansWebEot});
	font-weight: 400;
	font-style: normal;
	font-stretch: normal;
	unicode-range: U+000D-FB04;
}

body {
  font-family: 'MessinaSansWeb';
	font-weight: 400;
	font-style: normal;
	line-height: 1.1;  
  background-color: #F9F5EE;
  color: #756355;
	position: absolute;
}
`

export default GlobalStyle