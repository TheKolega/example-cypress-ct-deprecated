/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // https://github.com/LironEr/cypress-mochawesome-reporter
  require("cypress-mochawesome-reporter/plugin")(on)

  const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
  const esbuildOptions = require("../../esbuild.config.json")
  const path = require("path")

  on(
    "file:preprocessor",
    createBundler({
      ...esbuildOptions,
    })
  )

  const { startDevServer } = require("@cypress/vite-dev-server")

  on("dev-server:start", (options) => {
    return startDevServer({
      options,
      viteConfig: {
        configFile: path.join(__dirname, "/../../vite.config.ts"),
      },
    })
  })
  return config
}
