import React from 'react';
import { render, screen } from '@testing-library/react';
import Duvidas from './index';

test('renders learn react link', () => {
  render(<Duvidas />);
  const linkElement = screen.getByText(/duvidas/i);
  expect(linkElement).toBeInTheDocument();
});
