# IT23447370_ITPM_Assignment_01_Playwright_project
# Module
IT3040 - IT Project Management (ITPM)
Assignment 01

## Project overView
This test suite validates the functionality of the SwiftTranslator web application by testing:
- 24 positive functional scenarios
- 10 negative functional scenarios  
- 1 UI-related test scenario

https://www.swifttranslator.com/

## Scope of testing
- Functional testing of Singlish to Sinhala conversion
- Positive, negative and UI test scenarios
- Mixed Singlish + English inputs
- Sentence structure and grammar variations
- Input length variations (Short, Medium, Long)

## Technologies Used
- Node.js
- Playwright
- JavaScript

## Installation

### Step 1: Clone or Download the Repository

### Step 2: Install Dependencies
npm init playwright@latest

### Step 3: Install Playwright Browsers
npx playwright install

## Project Structure
tests/
    positiveTest.spec.js
    negativeTest.spec.js
    uiTest.spec.js
playwright.config.js
package.json
README.md

### Run All Tests
npx playwright test

### View Test Report
npx playwright show-report


## Test Coverage

### Positive Functional Tests (24 scenarios)
- Correct Singlish to Sinhala conversions
- Simple, compound, and complex sentences
- Questions and commands
- Tense variations (past, present, future)
- Polite and informal language
- Mixed Singlish + English inputs
- Names, places, and common English terms

### Negative Functional Tests (10 scenarios)
- Joined words without spaces
- Slang-heavy and informal inputs
- Formatting issues (extra spaces, line breaks)
- Long paragraph inputs
- Mixed English edge cases
- Robustness and error-prone input handling

### UI Test (1 scenario)
- Verification of real-time Sinhala output updates while typing
- Ensures no convert button is required and output is generated automatically


## Troubleshooting

### Tests Failing
npx playwright test --ui

### Installation Issues
node -v
npm -v

### Browser Issues
npx playwright install

## Test Results
- All test cases are executed automatically using Playwright
- Results are documented separately in the Excel test case file as required by the assignment
- Test execution status (Pass/Fail) can be verified using the Playwright HTML report
