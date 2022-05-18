import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {

  render(<App />);

  // button has correct initial text
  const buttonColor = screen.getByRole('button', { name: 'Change color' });
  expect(buttonColor).toHaveStyle({ backgroundColor: 'red' });
  

});

test('button turn blue when ckicked', () => {

  render(<App />);
  const buttonColor = screen.getByRole('button', { name: 'Change color' });

  // fireEvent produce an event, like a click
  fireEvent.click(buttonColor);

  // the assertion will compare the new background Color
  expect(buttonColor).toHaveStyle({ backgroundColor: 'blue' });

});


test('initial conditions', () => {

  render(<App />);
  const buttonColor = screen.getByRole('button', { name: 'Change color' });

  // check that the button startd out enable
  expect(buttonColor).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbos = screen.getByRole('checkbox');
  expect(checkbos).not.toBeChecked();

});
