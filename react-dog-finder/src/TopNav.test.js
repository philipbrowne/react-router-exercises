import React from 'react';
import TopNav from './TopNav';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// basic tests
it('renders without crashing', function () {
  render(
    <MemoryRouter>
      <TopNav />
    </MemoryRouter>
  );
});
