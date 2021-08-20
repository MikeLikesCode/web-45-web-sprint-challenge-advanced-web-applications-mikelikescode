import React from "react";
import MutationObserver from "mutationobserver-shim";
import axiosMock from "axios";

import { render, screen, act, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import fetchColorService from "../services/fetchColorService";
jest.mock("../services/fetchColorService");

const colors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
];

test("Renders without errors", () => {
  fetchColorService.mockResolvedValueOnce(colors);
  render(<BubblePage />);
});

test("Renders appropriate number of colors passed in through mock", async () => {
  fetchColorService.mockResolvedValueOnce(colors);
  render(<BubblePage />);

  const colorsList = await screen.findAllByTestId("color");

  await waitFor(() => {
    expect(colorsList).toHaveLength(2);
  });
});
