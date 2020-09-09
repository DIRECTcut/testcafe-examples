# Create Data-Driven Tests

**Test Code**: [index.js](index.js)

This example shows how to create a test that performs parameterized actions and run this test against two data objects.

The [test](https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#tests) function is wrapped in a `foreach` cycle that iterates through a data set. Data objects are imported from the `data.json` file. Test code uses data object's fields as input and expected values.

## TestCafe Functions and Methods Employed in This Example

1. Test Structure:
    - [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
    - [test](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/test.html) Function
2. Element Identification and Actions:
    - [Selector](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/) Object
    - [t.typeText](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/typetext.html) Method
    - [t.click](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/click.html) Method
3. Assertion and Evaluation:
    - [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
