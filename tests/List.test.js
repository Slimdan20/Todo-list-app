import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from '../src/app/component/List';

describe('Todo List App', () => {
  it('adds a new item to the list', async () => {
    render(<List />);

    const input = screen.getByPlaceholderText(/add item/i);
    const button = screen.getByRole('button', { name: /add/i });

    // Simulate typing
    await userEvent.type(input, 'Write tests');

    // Click ADD
    await userEvent.click(button);

    // Expect the new item to appear
    expect(screen.getByText('Write tests')).toBeTruthy();;
  });

  it('should not add an empty item', async () => {
    render(<List />);

    const input = screen.getByPlaceholderText(/add item/i);
    const button = screen.getByRole('button', { name: /add/i });

    // Simulate typing an empty string
    await userEvent.type(input, '   ');  // Spaces only

    // Click ADD
    await userEvent.click(button);

    // Expect the list to be empty (i.e., no items)
    expect(screen.queryByText('Write tests')).toBeNull(); // No such item in the DOM
  });
});

