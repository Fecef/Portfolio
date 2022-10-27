import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
            font-size: 10px;

            /* Variables */
            --color-1: #FFFFFF;
            --color-2: #00FF29;
            --color-3: #00FFF9;
            --color-4: #FDB703;
            --color-5: #FF00F5;
            --color-6: #F90000;
            --color-gradient-1: linear-gradient(180deg, rgba(0,255,255,1) 35%, rgba(255,0,245,1) 70%);
            --color-gradient-2: linear-gradient(180deg, rgba(253,183,3,1) 35%, rgba(255,0,245,0.9) 100%);
            --color-gradient-3: linear-gradient(180deg, rgba(150,0,255,1) 15%, rgba(255,0,245,1) 75%);

            --font-family-1: 'Audiowide', cursive;
            --font-family-2: 'Chakra Petch', sans-serif;
        }
        
    /* Reset CSS */
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,
    body {
        height: 100%;
    }

    body {      
        font-size: 1.6rem;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;

        background-color: #191919;
    }

    menu,
    ul,
    ol {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: unset;
    }

    img {
        display: block;
        max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    input  {
        outline: transparent;
    }

    button {
        border-color: transparent;
        cursor: pointer;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }

    #root, #__next {
        isolation: isolate;
    }
`;
