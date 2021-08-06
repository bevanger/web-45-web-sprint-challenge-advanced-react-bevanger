import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("form header renders", () => {
    render(<CheckoutForm/>);
    const checkoutHeader = screen.getByText(/checkout form/i);
    expect(checkoutHeader).toHaveTextContent(/checkout form/i);
});


test("form shows success message on submit with form details", async () => {
    

});
