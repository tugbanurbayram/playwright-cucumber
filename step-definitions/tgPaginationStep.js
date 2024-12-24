const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const TGPaginationPage = require('../pages/TGPaginationPage')

const tgPaginationPage = new TGPaginationPage()

Given(/^the user is on "([^"]*)"$/, async function (url) {
  await page.goto(url)
})

Then(/^the user should see the "([^"]*)" heading$/, async function (expectedText) {
  const $mainHeading = await page.locator(tgPaginationPage.locators.mainHeading)
  await expect($mainHeading).toHaveText(expectedText)
})

Then(/^the user should see the "([^"]*)" sub-heading$/, async function (expectedText) {
  const $subHeading = await page.locator(tgPaginationPage.locators.subHeading)
  await expect($subHeading).toHaveText(expectedText)
})

Then(/^the user should see the "([^"]*)" paragraph$/, async function (expectedText) {
  const $parapgraph = page.locator(tgPaginationPage.locators.contentParagraph)
  await expect($parapgraph).toHaveText(expectedText)
})

Then(/^the user should see the "([^"]*)" button is disabled$/, async function (button) {
  let buttonLocator

  // Dynamically get the correct button locator based on input
  if (button.toLowerCase() === 'previous') {
    buttonLocator = page.locator(tgPaginationPage.locators.previousBtn)
  } else if (button.toLowerCase() === 'next') {
    buttonLocator = page.locator(tgPaginationPage.locators.nextBtn)
  } else {
    throw new Error(`Button '${button}' not recognized`)
  }

  // Assert that the button is disabled
  await expect(buttonLocator).toBeDisabled()
})

Then(/^the user should see the "([^"]*)" button is enabled$/, async function (button) {
  let buttonLocator

  // Dynamically get the correct button locator based on input
  if (button.toLowerCase() === 'previous') {
    buttonLocator = page.locator(tgPaginationPage.locators.previousBtn)
  } else if (button.toLowerCase() === 'next') {
    buttonLocator = page.locator(tgPaginationPage.locators.nextBtn)
  } else {
    throw new Error(`Button '${button}' not recognized`)
  }

  // Assert that the button is enabled
  await expect(buttonLocator).toBeEnabled()
})

When(/^the user clicks on the "([^"]*)" button$/, async function (button) {
  if (button.toLowerCase() === 'next') {
    await tgPaginationPage.clickNextBtn()
  }
})

When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, async function (button) {
  const $nextBtn = await page.locator(tgPaginationPage.locators.nextBtn)

  while (button.toLowerCase() === 'next' && (await $nextBtn.isEnabled())) {
    await tgPaginationPage.clickNextBtn()
  }
})

Then(/^the user should see "([^"]*)" City with the info below and an image$/, async function (city, dataTable) {
  const arrData = dataTable.rawTable.flat()
  console.log(arrData)
  const $city = page.locator(tgPaginationPage.locators.city)
  const $country = page.locator(tgPaginationPage.locators.country)
  const $population = page.locator(tgPaginationPage.locators.population)
  const $cityImg = page.locator(tgPaginationPage.locators.cityImg)

  const infoArr = [$city, $country, $population]

  for (let i = 0; i < infoArr.length; i++) {
    await expect(infoArr[i]).toHaveText(arrData[i])
    await expect($cityImg).toBeVisible()
  }
})
