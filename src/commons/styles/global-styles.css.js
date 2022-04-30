import { createGlobalStyle } from "styled-components";
import CovidImage from '../../assets/images/covid.jpg';

const GlobalStyle = createGlobalStyle`
* {
    outline: none;
    box-sizing: border-box;
    }

body {
    line-height: normal;
    }

html, body {
    margin: 0;
    padding: 0;
    display: flex;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    width: 100%;
    min-height: 100%;
    color: white;
    }

#root {
    background: url(${CovidImage});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
}

.mb-2 {
    margin-bottom: 16px;
}

.pt-2 {
    padding-top: 16px;
}

.cursor {
    cursor: pointer;
}
`;


export default GlobalStyle;