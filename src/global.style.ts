import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
      font-family: "Inter-ExtraBold";   
      src: local("Inter-ExtraBold"),
        url("./font/Inter-ExtraBold.ttf") format("truetype");
  }
  @font-face {
      font-family: "Inter-Regular";  
      src: local("Inter-Regular"),
        url("./font/Inter-Regular.ttf") format("truetype"); 

  }
  @font-face {
      font-family: "Inter-Medium";  
      src: local("Inter-Medium"),
        url("./font/Inter-Medium.ttf") format("truetype")
  }
  @font-face {
      font-family: "Inter-Bold";  
      src: local("Inter-Bold"),
        url("./font/Inter-Bold.ttf") format("truetype"); 
  }; 

    body{ 
      margin: 0;
      padding: 0;

    }
    h1{
      margin: 0;
    }



  

`;

export default GlobalStyle;
