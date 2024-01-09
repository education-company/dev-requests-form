describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Can submit the form with valid inputs", () => {
    cy.log("Test working!");
  });
  it("Cannot submit form without field values", () => {
    cy.get(".v-btn").click();
    cy.get(".error-message").should("exist");
    cy.get(".error-message").should("contain.text", "Please complete the form");
  });
});
