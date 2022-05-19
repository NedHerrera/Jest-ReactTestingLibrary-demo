import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('Initia conditions', () => {
  render(<App />);
  const element = screen.getByText(/Hi Ned/i);
  expect(element).toBeInTheDocument();
});

test('Change Hi for Bye', async () => {
  render(<App />);


  const btn = screen.getByRole('button', { name: /Click me/i });

  userEvent.click(btn)

  // delectus aut autem
  const element = await screen.findByText('delectus aut autem')  
  expect(element).toBeInTheDocument();
});
