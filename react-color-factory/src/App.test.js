import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// basic tests
it('renders without crashing', function () {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/colors']}>
      <App />
    </MemoryRouter>
  );
  expect(getByText('Red')).toBeInTheDocument();
});

test('color links', () => {
  const { getByText, getAllByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(getByText('Red')).toBeInTheDocument();
  const link = getAllByText('Red')[0];
  fireEvent.click(link);
  expect(getByText('Hi! Your color is')).toBeInTheDocument();
});
