import { render, screen } from "@testing-library/react";
import FilterComponent from "./FilterComponent";
import { Item } from "./types";



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
  });
});
