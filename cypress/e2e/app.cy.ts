describe("Run app", () => {
  it("render correctly", () => {
    cy.visit("/");
    cy.contains("Home");
  });
});
