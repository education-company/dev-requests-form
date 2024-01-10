const { faker } = require("@faker-js/faker");
let firstName = faker.person.firstName();
let lastName = faker.person.lastName();
let emailAddress = `${firstName}.${lastName}@outlook.com`;
let customer = faker.company.name();
let request = faker.lorem.lines(5);

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Can submit the form with valid inputs", () => {
    cy.get("#input-1").click().type(firstName);
    cy.get("#input-4").click().type(lastName);
    cy.get("#input-7").click().type(emailAddress);
    cy.get("#input-10").click().type(customer);

    cy.get("[data-cy=priority-select]").click();
    cy.contains(".v-list-item", "High").click();

    cy.get("#input-17").click().type(request);
    cy.get(".v-btn").click();
    cy.wait(3000);
    cy.get(".success-message").should("exist");
    cy.get(".success-message").should(
      "contain.text",
      "Your form has been submitted successfully"
    );
  });

  it("Cannot submit form without field values", () => {
    cy.get(".v-btn").click();
    cy.get(".error-message").should("exist");
    cy.get(".error-message").should("contain.text", "Please complete the form");
  });

  it.only("Email address format is validated", () => {
    let incorrectEmailFormat = "email.test";
    cy.get("#input-7").click().type(incorrectEmailFormat);
    cy.get(".v-messages__message").should("exist");
    cy.get(".v-messages__message").should(
      "contain.text",
      "E-mail must be valid"
    );
  });
});
