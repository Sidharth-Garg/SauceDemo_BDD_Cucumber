# End-to-End Testing with Sauce Demo and Cucumber

This project demonstrates end-to-end testing using Sauce Demo and Cucumber. The following tools and libraries are used:

- Cucumber.js: A tool for running automated tests written in a behavior-driven development (BDD) style.
- Playwright: A high-level API to automate Chromium, Firefox, and WebKit browsers.
- Sauce Labs: A cloud-based platform for testing web and mobile applications.

## Getting Started

To get started, you will need to create a Sauce Labs account and obtain your username and access key. These can be found in the Sauce Labs dashboard.

Next, set the following environment variables:

- `SAUCE_USERNAME`: Your Sauce Labs username.
- `SAUCE_ACCESS_KEY`: Your Sauce Labs access key.

You can now run the end-to-end tests using the following command:

```bash
npm run test:e2e
```
## Test Structure

The tests are defined using the Gherkin language in the `tests/acceptance/features` directory. Each feature file describes a specific scenario, such as logging in to the application or searching for a product.

The step definitions for each feature file are located in the `tests/acceptance/stepDefinitions` directory. These step definitions define the behavior of each step in the feature file.

## Test Runner

The tests are run using the Cucumber.js test runner, which is configured in the `package.json` file:

```json
"scripts": {
  "test:e2e": "cucumber-js --require cucumber.conf.js --require tests/acceptance/stepDefinitions/*.js --format @cucumber/pretty-formatter"
}
```

## Test Runner Configuration

The command `npm run test:e2e` runs the Cucumber.js test runner with the following options:

- `--require cucumber.conf.js`: This option requires the `cucumber.conf.js` configuration file.
- `--require tests/acceptance/stepDefinitions/*.js`: This option requires all step definition files in the `tests/acceptance/stepDefinitions` directory.
- `--format @cucumber/pretty-formatter`: This option specifies the use of the pretty formatter to display the test results.

## Test Configuration

The test configuration is defined in the `cucumber.conf.js` file. This file specifies the browser configuration, such as the browser name, version, and platform.

## Dependencies

This project has the following dependencies:

- **@cucumber/cucumber:** The Cucumber.js library.
- **@cucumber/pretty-formatter:** The pretty formatter for Cucumber.js.
- **@playwright/test:** The Playwright test library.
- **cucumber:** The Cucumber.js command-line interface.
- **playwright:** The Playwright browser automation library.


