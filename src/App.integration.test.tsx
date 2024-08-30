import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import App from "./App";

test("add item to todo", async () => {
  render(<App />);
  const user = userEvent.setup();
  const btn = screen.getByText("add task");
  const list = screen.getByTestId("list");
  const input = screen.GetByPlaceholderText("nourrir le chat");

  //simuler l'écriture
  await user.type(input, "nourrir le chat");
  //simuler le click du btn
  await user.click(btn);

  //vérifier la présence d'1 élément
  expect(list.children.length).toBe(1);
  //vérifier le contneu de cet élément
  expect(list.children[0].textContent).toBe("nourrir le chat");
});
