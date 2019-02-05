import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import firebaseApp from './utils/firebase';
import 'semantic-ui-css/semantic.min.css';
import {
  ErrorBoundary,
} from './utils/bugsnagUtils';

ReactDOM.render(
  (
    <ErrorBoundary>
      <App/>
    </ErrorBoundary>
  ),
  document.getElementById('app')
)