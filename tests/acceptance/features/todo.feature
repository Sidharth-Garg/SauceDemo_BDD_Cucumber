Feature: Login Functionality with valid username password
As a user
I will enter valid username and valid password
So I can Login successfully

Background:
Given User has opened Sauce Demo site on the browser

Scenario: Verify valid Swag Labs login
When User enter valid username "<username>" and password "<password>"
And User clicks the login button
Then Checking Swag Labs title at the top of the page 

Examples:
| username      | password     |
| standard_user | secret_sauce |

Scenario: Verify invalid Swag Labs login
When User enter invalid username "<username>" and password "<password>"
And User clicks the login button
Then Checking for message - Epic sadface: Sorry, this user has been locked out. 

Examples:
| username        | password     |
| locked_out_user | secret_sauce |

Scenario: Verify problem Swag Labs login
When User enter problem username "<username>" and password "<password>"
And User clicks the login button
Then Checking for image src value

Examples:
| username        | password     |
| problem_user | secret_sauce |