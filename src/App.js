import React from 'react'

import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import OdsMeuBairro from './components/OdsMeuBairro'

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;}`

export default function App (){
  return(
    <>
    <Home/>
    <About/>
    <Works/>
    <OdsMeuBairro/>
    </>
  )
}