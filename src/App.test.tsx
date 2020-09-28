import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/step/i);
  expect(linkElement).toBeInTheDocument();
});
