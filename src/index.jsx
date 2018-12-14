import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import dogsStore from './stores/DogsStore';

import './index.scss';

ReactDOM.render(
  <App dogsStore={dogsStore} />,
  document.getElementById('root'),
);
