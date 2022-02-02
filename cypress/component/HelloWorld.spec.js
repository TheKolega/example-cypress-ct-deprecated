import { mount } from "@cypress/vue"

import HelloWorld from "/src/components/HelloWorld.vue"

describe("HelloWorld component test", () => {
  beforeEach(() => {
    mount(HelloWorld, {
      // props: { size: "large", joinedRight: true },
      // provide: { joined: { default: true } },
      // mocks: {
      //   // used to add properties to the rendering context
      //   text: "ipsum",
      //   content: "lorem",
      // },
      // slots: { default: ICON },
    })
  })
  it("renders", () => {
    cy.contains("button", "count is").should("be.visible")
    const wrongIndent = ""
  })
})
