const { When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const WikiPage = require('../pages/WikiPage')

const wikiPage = new WikiPage()

When(/^user should search for "([^"]*)" on wikipedia$/, async function (name) {
  await wikiPage.enterNameAndClickSearchBtn(name)
})

Then(/^user should see "([^"]*)" in the title$/, async function (title) {
  expect(await page.title()).toContain(title)
})

Then(/^user should see "([^"]*)" in the URL$/, async function (url) {
  const urlArr = url.split(' ')
  for (const u of urlArr) {
    expect(await page.url()).toContain(u)
  }
})

Then(/^user should see "([^"]*)" in the first heading$/, async function (heading) {
  const $firstHeading = page.locator(wikiPage.locators.heading)
  await expect($firstHeading).toHaveText(heading)
})
