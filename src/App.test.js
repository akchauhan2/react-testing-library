import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Sum from "./Sum";

test("tsting render", () => {
  render(<App />);
  const todoText = screen.getByText(/auth/i);
  expect(todoText).toBeInTheDocument();
});
test("list testing", () => {
  render(<App />);
  const listItem = screen.getAllByRole("listitem");
  expect(listItem.length).toBeGreaterThan(0);
});
test("Title", () => {
  render(<App />);
  const title = screen.getByTestId("title");
  expect(title).toBeInTheDocument();
});
test("Sum Render", () => {
  render(<App />);

  const sum = screen.getByText(/sum/i);
  expect(sum).toBeInTheDocument();
});

// test("Sum of 2 numbers", () => {
//   render(<App />);
//   const { getByText, asFragment } = render(<App />);
//   const firstRender = asFragment();

//   fireEvent.click(getByText(/Add/));

//   const sum = screen.getByTitle("sum");
//   expect(sum.textContent).toBe("5");
// });
