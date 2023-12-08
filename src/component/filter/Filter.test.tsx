import { render, screen } from "@testing-library/react";
import FilterComponent from "./FilterComponent";
import { Item } from "./types";
import userEvent from "@testing-library/user-event";


const users: Item[] = [
  { name: 'John Doe', index: '1' },
  { name: 'Jane Doe', index: '2' },
  { name: 'John Smith', index: '3' }
]

describe("FilterComponent", () => {
  test("should render", async () => {
    render(<FilterComponent list={users} />);

    expect(
      await screen.findByRole('heading', {
        level: 2,
        name: /Usuários/
      })
    )

    expect(
      await screen.findByPlaceholderText('Buscar por...')
    )

    expect(
      await screen.findAllByRole('listitem')
    ).toHaveLength(3)

    expect(
      screen.queryByText('Olá, John Smith')
    ).not.toBeInTheDocument()

  });

  test("User search for 'Doe', then show only one user found", async () => {
    render(<FilterComponent list={users} />);

    await userEvent.type(
      await screen.findByPlaceholderText('Buscar por...'), "doe"
    )
    expect(
      await screen.findAllByRole('listitem')
    ).toHaveLength(2)
  })

  test("When clicked in a item of tha list, then show a hellow dialog", async () => {
    render(<FilterComponent list={users} />);
    await userEvent.click(
      await screen.findByText('John Smith')
    )

    expect(
      await screen.findByText('Olá, John Smith')
    ).toBeVisible()

  })
});
