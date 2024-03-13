Feature: Add to cart Functionality with Checkout
As a user
I will Login and add product to cart and checkout
So I can order successfully

Background:
Given User has opened Sauce Demo site on the browser
When User enter valid username "standard_user" and password "secret_sauce"
And User clicks the login button
Then Checking Swag Labs title at the top of the page

Scenario: Add one product to the cart page
When User click on product with name "<name>"
Then Checking the details of the product name "<name>" and price "<price>" and desc "<desc>" in product page
When User click on add to cart button
And User clicks on cart icon
Then Checking the title of the cart page
And Checking the details of the product name "<name>" and price "<price>" and desc "<desc>" on the page

Examples:
| name              | price | desc                                                                                                                                                           |
| Sauce Labs Onesie | $7.99 | Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.|

Scenario:  Verify checkout Step One
When User click on product with name "<name>"
Then Checking the details of the product name "<name>" and price "<price>" and desc "<desc>" in product page
When User click on add to cart button
And User clicks on cart icon
Then Checking the title of the cart page
And Checking the details of the product name "<name>" and price "<price>" and desc "<desc>" on the page
When User clicks on checkout button
Then Checking the title of the checkout page
When User enter firstname "<firstname>"
And User enter lastname "<lastname>"
And User enter postal code "<code>"
And User clicks on continue button
Then Checking the title of the checkout overview page
And Checking the details of the product name "<name>" and price "<price>" and desc "<desc>" on the page


Examples:
| name              | price | desc  | firstname|lastname|code|
| Sauce Labs Onesie | $7.99 | Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.|Miss|Maggie|560100|

Scenario:  Verify checkout Step Two
When User click on product with name "<name>"
Then Checking the details of the product name "<name>" and price "<price>" and desc "<desc>" in product page
When User click on add to cart button
And User clicks on cart icon
Then Checking the title of the cart page
And Checking the details of the product name "<name>" and price "<price>" and desc "<desc>" on the page
When User clicks on checkout button
Then Checking the title of the checkout page
When User enter firstname "<firstname>"
And User enter lastname "<lastname>"
And User enter postal code "<code>"
And User clicks on continue button
Then Checking the title of the checkout overview page
And Checking the details of the product name "<name>" and price "<price>" and desc "<desc>" on the page
And Checking the multiple details like shipping , payment information , total
When User clicks on Finish button
Then Checking the title of checkout complete page
And Checking for the order placed message
When User clicks on Home Page button
Then Checking Swag Labs title at the top of the page



Examples:
| name              | price | desc  | firstname|lastname|code|
| Sauce Labs Onesie | $7.99 | Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.|Miss|Maggie|560100|