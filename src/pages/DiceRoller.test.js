import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import DiceRoller from './DiceRoller';

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('DiceRoller', () => {
  test('allows adding dice', () => {
    renderWithTheme(<DiceRoller />);
    const addButton = screen.getByText(/\+ Add Die/i);
    fireEvent.click(addButton);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  test('allows rolling dice', () => {
    renderWithTheme(<DiceRoller />);
    const addButton = screen.getByText(/\+ Add Die/i);
    fireEvent.click(addButton);
    const rollButton = screen.getByText(/Roll Dice/i);
    fireEvent.click(rollButton);
    expect(screen.getByText(/Throw 1/i)).toBeInTheDocument();
  });
}); 