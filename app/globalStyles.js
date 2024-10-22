"use client"

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    .smooth-scroll {
      scroll-behavior: smooth;
    }

    /* @media (prefers-color-scheme: dark) {
      color-scheme: dark;
    } */
  }

  body {
    font-family: var(--font-mohave);
    background-color: #333;
    margin-top: 0;
    max-width: 2400px;
    margin: 0 auto;

    /* overflow-x: hidden;
    .using-mouse:focus {
      outline: none !important;
    } */
  }

  main {
    background-color: #333;
    color: #fff;
  }
`