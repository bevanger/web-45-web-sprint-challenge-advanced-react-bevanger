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


test("form shows success message on submit with form details",  () => {
  
    render(<CheckoutForm/>);
    const firstNameInput = screen.getByLabelText(/first name:/i);
    userEvent.type(firstNameInput, "Bailey");
    const lastNameInput = screen.getByLabelText(/last name:/i);
    userEvent.type(lastNameInput, "Evanger");
    const addressInput = screen.getByLabelText(/address:/i);
    userEvent.type(addressInput, "123 school way");
    const cityInput = screen.getByLabelText(/city:/i);
    userEvent.type(cityInput, "Seattle");
    const zipInput = screen.getByLabelText(/zip:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    userEvent.type(stateInput, "Washington");
    userEvent.type(zipInput, "98101");
    const checkoutButton = screen.getByRole('button');
    userEvent.click(checkoutButton);

        const successMessage = screen.getByTestId("successMessage")
        const submittedFirstName = screen.getByText(/bailey/i);
        const submittedLastName = screen.getByText(/evanger/i);
        const submittedAddress = screen.getByText(/123 school way/i);
        const submittedCity = screen.getByText(/seattle/i);
        const submittedState = screen.getByText(/washington/i);
        const submittedZip = screen.getByText(/98101/i);

        expect(successMessage).toBeInTheDocument();
        expect(submittedFirstName).toBeInTheDocument();
        expect(submittedLastName).toBeInTheDocument();
        expect(submittedAddress).toBeInTheDocument();
        expect(submittedCity).toBeInTheDocument();
        expect(submittedState).toBeInTheDocument();
        expect(submittedZip).toBeInTheDocument();
 
});
