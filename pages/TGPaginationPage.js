const locators = Object.freeze({
  mainHeading: '.is-size-3',
  subHeading: '#sub_heading',
  contentParagraph: '#content',
  previousBtn: '#previous',
  nextBtn: '#next',
  city: '.city_info',
  country: '.country_info',
  population: '.population_info',
  cityImg: '.city_image'
})

class TGPaginationPage {
  locators = locators

  async clickNextBtn() {
    await page.locator(locators.nextBtn).click()
  }
}

module.exports = TGPaginationPage
