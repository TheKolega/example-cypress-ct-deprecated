import { mount } from "@cypress/vue"

import HelloWorld from "/src/components/HelloWorld.vue"

describe("HelloWorld component test", () => {
  beforeEach(() => {
    mount(HelloWorld, {
      props: { msg: "the-message" },
    })
  })

  it("renders", () => {
    cy.contains("button", "count is")
      .should("be.visible")
      .click()
      .should("contain", "count is: 1")
  })
})
