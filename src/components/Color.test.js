import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const blankColor = {
    color: '',
    code: {hex: ''},
    id: 1
}

const color = {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  }

const handleDelete = (color) => {
    console.log(color + 'was the color deleted');
}

const handleEdit = (color) => {
    console.log(color);
}

const setEdit = (value) => {
    console.log(value);
}

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={blankColor}/>)
});
  
test("Renders the color passed into component", () => {
    render(<Color color={color}/>)
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    render(<Color color={color} deleteColor={handleDelete} toggleEdit={handleEdit}/>);
    const xButton = screen.queryByTestId("delete");
    userEvent.click(xButton);
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    render(<Color color={color} setEditColor={setEdit} toggleEdit={handleEdit}/>);
    const colorDiv = screen.queryByTestId("color");
    userEvent.click(colorDiv);
});