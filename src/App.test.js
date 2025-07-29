import { render, screen } from '@testing-library/react';
import App from './App';
// This file contains tests for the App component in a React application.
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
