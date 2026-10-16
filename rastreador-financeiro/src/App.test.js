import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o título do aplicativo', () => {
  render(<App />);
  expect(screen.getByText(/rastreador de gastos/i)).toBeInTheDocument();
});