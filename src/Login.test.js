import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));

test("Username input should render", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl.value).toBe("");
});
test("Password input should render", () => {
  render(<Login />);
  const userPassEl = screen.getByPlaceholderText(/password/i);
  expect(userPassEl.value).toBe("");
});

test("Username input should change", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(userInputEl, { target: { value: testValue } });
  expect(userInputEl.value).toBe("test");
});

test("Password input should change", () => {
  render(<Login />);
  const userPassEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";
  fireEvent.change(userPassEl, { target: { value: testValue } });
  expect(userPassEl.value).toBe("test");
});

test("Login button should be disabled", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

test("loading should not be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).not.toHaveTextContent(/please wait/i);
});

test("buttons should not be disabled when inputs exists", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const userPassEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(userPassEl, { target: { value: testValue } });

  expect(buttonEl).not.toBeDisabled();
});

test("loading should be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const userPassEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(userPassEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  expect(buttonEl).toHaveTextContent(/please wait/i);
});

test("loading should not be visible after fetching", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const userPassEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(userPassEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
});

test("user should  be fetched after login", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const userPassEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(userPassEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  const userItem = await screen.findByText("John");

  expect(userItem).toBeInTheDocument();
});
