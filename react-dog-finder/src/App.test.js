import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// basic tests
it('renders without crashing', function () {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/dogs']}>
      <App />
    </MemoryRouter>
  );
  expect(getByText('Dog Finder')).toBeInTheDocument();
});

test('navbar links', () => {
  const { getByText, getAllByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(getByText('Dog Finder')).toBeInTheDocument();
  const link = getAllByText('Whiskey')[0];
  fireEvent.click(link);
  expect(getByText('Facts about Whiskey')).toBeInTheDocument();
});
