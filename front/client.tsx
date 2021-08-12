import React from 'react';
import { render } from 'react-dom';
import SWRDevtools from '@jjordy/swr-devtools';
import { cache, mutate } from 'swr';
import App from '@layouts/App';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <SWRDevtools cache={cache} mutate={mutate} />
    <App />
  </BrowserRouter>,
  document.querySelector('#app'),
);
