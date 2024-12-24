const locators = Object.freeze({
  username: '#ctl00_MainContent_username',
  password: '#ctl00_MainContent_password',
  loginButton: '#ctl00_MainContent_login_button',
  errorMessage: '#ctl00_MainContent_status',
  items: '#ctl00_menu a'
})

class SmartBearLoginPage {
  locators = locators

  async login(username, password) {
    await page.locator(locators.username).fill(username)
    await page.locator(locators.password).fill(password)
  }

  async clickLoginBtn() {
    await page.locator(locators.loginButton).click()
  }
}

module.exports = SmartBearLoginPage
