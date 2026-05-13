import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app shell', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /srinivasan t/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /contact me/i })).toBeInTheDocument();
});
