import React from 'react';
import App from '@layouts/App';
import { render } from 'react-dom';
import { cache, mutate } from 'swr';
import SWRDevtools from '@jjordy/swr-devtools';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <SWRDevtools cache={cache} mutate={mutate} />
    <App />
  </BrowserRouter>,
  document.querySelector('#app'),
);
