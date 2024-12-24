const locators = Object.freeze({
  searchBar: '#searchInput',
  searchBarBtn: '[type="submit"]',
  heading: '#firstHeading'
})

class WikiPage {
  locators = locators

  async enterNameAndClickSearchBtn(str) {
    await page.locator(locators.searchBar).fill(str)
    await page.locator(locators.searchBarBtn).click()
  }
}

module.exports = WikiPage
