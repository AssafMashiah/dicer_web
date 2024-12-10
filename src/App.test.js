import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dice roller application', () => {
  render(<App />);
  const titleElement = screen.getByText(/Dice Roller/i);
  expect(titleElement).toBeInTheDocument();
}); 