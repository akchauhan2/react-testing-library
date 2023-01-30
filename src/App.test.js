import { screen } from "@testing-library/react";
test("tsting app", () => {
  render(<App />);
  const todoText = screen.getByText(/todo/i);
  expext(todoText).toBeInTheDocument();
});
