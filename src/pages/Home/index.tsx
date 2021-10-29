import React from 'react';

// import axios from 'axios';

import logo from 'src/assets/svg/logo.svg';

import { Container } from './styles';

const App: React.FC = () => {
  function redundantJump(x: number) {
    if (x === 1) {
      console.log('x == 1');
    }
  }
  redundantJump(1);

  const invertedBooleanCheck = (a: number) => {
    if (a !== 2) {
      console.log(a);
      return;
    }

    console.log('A diferente de 2');
  };

  invertedBooleanCheck(1);

  return (
    <Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Container>
  );
};

export default App;
