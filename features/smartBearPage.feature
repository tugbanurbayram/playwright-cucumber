@class_practice
Feature: Smart Bear

    Scenario: Validate invalid login attempt
        Given user is on "http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx"
        When user enters username as "abcd" and password as "abcd1234"
        And user clicks on "Login" button
        Then user should see "Invalid Login or Password." message

    Scenario: Validate valid login attempt
        Given user is on "http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx"
        When user enters username as "Tester" and password as "test"
        And user clicks on "Login" button
        Then user should be routed to "http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/"

    Scenario: Validate Web Orders menu items
        Given user is on "http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx"
        When user enters username as "Tester" and password as "test"
        And user clicks on "Login" button
        Then user should be routed to "http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/"
        And validate below menu items are displayed
            | View all orders | View all products | Order |

    Scenario: Validate "Check All" and "Uncheck All" links
        Given user is on "http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx"
        When user enters username as "Tester" and password as "test"
        And user clicks on "Login" button
        Then user should be routed to "http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/   "
        When user clicks on "Check All" button
        Then all rows should be checked
        When user clicks on "Uncheck All" button
        Then all rows should be unchecked

    Scenario: Validate "Delete Selected" button
        Given user is on "http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx"
        When user enters username as "Tester" and password as "test"
        And user clicks on "Login" button
        Then user should be routed to "http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/"
        When user clicks on "Check All" button
        And user clicks on "Delete Selected" button
        Then validate all orders are deleted from the List of All Orders
        And validate user sees "List of orders is empty. In order to add new order use thislink." message

    Scenario: Validate adding new order
        Given user is on "http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx"
        When user enters username as "Tester" and password as "test"
        And user clicks on "Login" button
        Then user should be routed to "http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/"
        When user clicks on "Order" menu item
        And user enters all product information
        And user enters all address information
        And user enters all payment information
        And user clicks on "Process" button
        And user clicks on "View all orders" menu item
        Then validate all information entered displayed correct with the order