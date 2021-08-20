import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen } from "@testing-library/react";
import ColorList from './ColorList';

const colorList = [{
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },]

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]}/>) 
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={colorList}/>)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const { rerender } = render(<ColorList editing={true} colors={colorList}/>)
    const editFormTrue = screen.queryByTestId('edit_menu');
    expect(editFormTrue).toBeInTheDocument();

    rerender(<ColorList editing={false} colors={colorList}/>);
    const editFormFalse = screen.queryByTestId('edit_menu');
    expect(editFormFalse).not.toBeInTheDocument();
});
