import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './commons/index.css';
import App from './modules/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
