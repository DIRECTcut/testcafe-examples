# Extract Reused Code to Helper Functions

**Test Code**: [index.js](index.js)

This example shows how to extract test code to functions defined in a separate module.

The `index.js` test file imports three methods from `helper.js`: `enterName`, `typeComment` and `submitForm`. These helper functions execute test actions like [t.click](https://devexpress.github.io/testcafe/documentation/test-api/actions/click.html) or [t.typeText](https://devexpress.github.io/testcafe/documentation/test-api/actions/type-text.html).

Note that the [test controller instance](https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#test-controller) is imported from the `testcafe` module. You don't need to pass `t` to helper functions because TestCafe can resolve the current test context and provide the correct test controller instance.

## TestCafe Functions and Methods Employed in This Example
<!-- TODO -->
1. Test Structure:
    - [Fixture.page](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/page.html) Method
    - [fixture](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/fixture.html) Function
    - [test](https://devexpress.github.io/testcafe/documentation/reference/test-api/global/test.html) Function
2. Element Identification and Actions:
    - [Selector](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/) Object
    - [t.typeText](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/typetext.html) Method
    - [t.click](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/click.html) Method
3. Assertion and Evaluation:
    - [t.eval](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/eval.html) Method
    - [t.expect.eql](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/eql.html) Method
    - [Selector.addCustomDOMProperties](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/addcustomdomproperties.html) Method
4. Custom Scripts:
    - [Fixture.clientScripts](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/clientscripts.html) Method
5. Request Handlers:
    - (list of items w/ links)
6. Command Line Interface Options:
    - (list of items w/ links)