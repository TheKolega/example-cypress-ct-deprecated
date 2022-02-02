describe("Failing test", () => {
  it("fails", () => {
    cy.get("something").should("be.visible")
  })
})
