const { Given, Then, When } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const SmartBearLoginPage = require('../pages/SmartBearLoginPage')

const smartBearLoginPage = new SmartBearLoginPage()

Given(/^user is on "([^"]*)"$/, async function (url) {
  await page.goto(url)
})

When(/^user enters username as "([^"]*)" and password as "([^"]*)"$/, async function (username, password) {
  await smartBearLoginPage.login(username, password)
})

When(/^user clicks on "([^"]*)" button$/, async function (buttonName) {
  switch (buttonName) {
    case 'Login':
      await smartBearLoginPage.clickLoginBtn()
      break
    case 'Check All':
      // Click on Check All
      break
    case 'Uncheck All':
      // Click on Uncheck All
      break
    default:
      throw new Error(`There is no such button-case called as ${buttonName}`)
  }
})

Then(/^user should see "([^"]*)" message$/, async function (message) {
  const $errorMessage = page.locator(smartBearLoginPage.locators.errorMessage)
  await expect($errorMessage).toHaveText(message)
})

Then(/^user should be routed to "([^"]*)"$/, function (url) {
  expect(page.url()).toBe(url)
})

Then(/^validate below menu items are displayed$/, async function (dataTable) {
  const expectedTable = dataTable.rawTable.flat()
  const $items = await page.locator(smartBearLoginPage.locators.items)
  await expect($items).toHaveText(expectedTable)
})
