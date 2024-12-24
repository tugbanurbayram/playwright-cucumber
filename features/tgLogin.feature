Feature: Login Feature

  # Scenario: Validate Login Form
  #   Given user navigates to "https://techglobal-training.com/frontend"
  #   When user clicks on the "Login Function" card
  #   Then user should see the "Login Function" page heading
  #   When user enter username as "johnode" and password as "123456"
  #   And user clicks Login button
  #   Then user should see a "Invalid Username entered!"

  # Scenario: Validate Login Form
  #   Given user navigates to "https://techglobal-training.com/frontend"
  #   When user clicks on the "Login Function" card
  #   Then user should see the "Login Function" page heading
  #   When user enter username as "tomsmith" and password as "12345"
  #   And user clicks Login button
  #   Then user should see a "Invalid Username entered!"

  # Scenario: Validate Login Form
  #   Given user navigates to "https://techglobal-training.com/frontend"
  #   When user clicks on the "Login Function" card
  #   Then user should see the "Login Function" page heading
  #   When user enter username as "TechGlobal" and password as "Test1234"
  #   And user clicks Login button
  #   Then user should see a "You are logged in"

  Scenario Outline: Validate the Login Form
    Given user navigates to "https://techglobal-training.com/frontend"
    When user clicks on the "Login Function" card
    Then user should see the "Login Function" page heading
    When user enter username as "<username>" and password as "<password>"
    And user clicks Login button
    Then user should see a "<message>"
    Examples:
      | username   | password | message                   |
      | johnode    | Test1234 | Invalid Username entered! |
      | tomsmith   | 12345    | Invalid Username entered! |
      | TechGlobal | Test1234 | You are logged in         |