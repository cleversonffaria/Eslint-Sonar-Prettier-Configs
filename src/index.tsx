import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from 'src/assets/globalStyle';
import App from 'src/pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
