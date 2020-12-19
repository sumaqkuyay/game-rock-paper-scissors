import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import styled from 'styled-components'
import Wrapper from './components/Wrapper'

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #1F3757 20%, #131537 100%);
  min-height: 100vh;
  padding : 3em.0;
  font-family: 'Barlow Semi Condensed', sans-serif;
`

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <Header />
      </Wrapper>
    </AppStyled>
  );
}

export default App;
