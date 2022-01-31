import React from 'react';
import { render } from '@testing-library/react';
import BookCard from './bookCard';

test('renders learn react link', () => {
  render(<BookCard imageLinks={undefined} title={''} author={''} publisher={''} pageCount={0} language={''} categories={''} />);
});
