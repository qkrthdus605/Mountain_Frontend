import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 폰트적용예시 */
  /* @font-face {
    font-family: "Mulish";
    src: local('Mulish'),
    url(${'/fonts/Mulish-Regular.ttf'}) format("truetype");
  }
  @font-face {
    font-family: 'Mulish-ExtraBold';
    src: local('Mulish'),
      url(${'/fonts/Mulish-ExtraBold.ttf'}) format('truetype');
  }
  @font-face {
    font-family: "NanumGothicBold";
    src: local('NanumGothicBold'), url(${'/fonts/NanumGothicBold.ttf'}) format("truetype");
    // 한글만 해당 폰트 적용
    unicode-range: U+AC00–D7A3;
  } */
  body{
    user-select: none;
    background-color: #ffffff;
    font-family: Mulish,NanumGothic,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif, -apple-system;
    /* font-family: -apple-system,Mulish,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; */
    /* font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; */
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ol, ul, li {
    list-style: none;
  }
  
`;

export default GlobalStyle;
