# Stop Writing Unit Tests

If you are a developer on a React project, I have big news for you:  you can stop writing unit tests.

I worked on a project where we did this.  In this blog, I am going to lead you through the journey that we took to get there.

## Background

To understand the journey that we took to Stop Writing Unit Tests, I want to give some background on the project where we did this.

The project was written in React based on [create-react-app](https://create-react-app.dev). It used [Jest](https://jestjs.io) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) for unit testing and [Cypress](https://www.cypress.io) for end-to-end testing.  

The Cypress tests were actually disabled in the pipeline because they were not passing consistently in the pipeline.

Of course, we could have spent the time fixing the Cypress E2E tests. But instead, we took a step back and looked at the advantages and disadvantages of unit and Cypres E2E tests and asked ourselves is there a better way that we can be testing our system.

## Jest Unit Tests: The Good and the Bad

There is obviously a lot of value with writing Jest unit tests for React components.  The biggest value is that the tests are fast to run.  This provides a level of protection in real time as a developer makes local changes; additionally, it also provides an extra level of protection by having the pipeline run the same unit tests as well.  Another great advantage of unit tests is that it is easy to set up code coverage.

Yet, with all of the value that comes with Jest unit tests, it's really easy to create unit tests that are hard to maintain. For example, a unit test that uses many mocks is harder to maintain and comprehend by others.  If a test knows too much of the implementation details of a component, then refactoring a component will often require updating associated unit tests. If a unit test is targeting a page component with many subcomponents, then there is added complexity in setting up all of the dependencies for the page component as well as all subcomponents. When an existing component is refactored into smaller components, then it begs the question if additional unit tests need to be created for the newly refactored subcomponents.  

## Cypress E2E Tests: The Good and the Bad

A lot of the pains associated with unit tests are washed away once you are in the world of Cypress End-to-End (E2E) tests.  A typical Cypress E2E starts with logging into an deployed system, providing a valid user name and password, and then navigating to the appropriate screen elements as an end-user would be doing.

The E2E tests have no knowledge of implementation details of the code; this gives you the freedom to do major refactors without having to change the E2E tests.  The tests themselves become a safety net to ensure that refactoring doesn't break any key functionality.

The E2E themselves can also be written in a way that is very human-readable, which makes it easy for future developers to understand the functionality of the system as well as maintain existing tests.  Additionally, you don't need to worry about the mocking complexity that comes with unit tests.  

Cypress E2E tests do come with some serious drawbacks.  Cypress E2E tests are very expensive to maintain.  They may often fail in the pipeline due to problems with external services and/or network issues. They could fail if a login account gets locked as well.
Cypress E2E tests also take a longer time to run compared to unit tests. These types of test may also run inconsistently; some tests may fail and then will magically work upon running a second time.  If Cypress E2E tests starting failing too many times, teams may get frustrated with them and simply comment them out of the pipeline.

## Integration Tests

So I have good news.  There is a type of test that takes the advantages of both unit and Cypress E2E tests: integration tests.  These types of tests were inspired by [Kent Dodd's Testing Trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications).

Integration tests have the following characteristics:

* Fast
* Reliable and repeatable
* Do not need to be re-written when code is refactored
* Does not require complex mocking
* Does not know the implementation details of a test

## Implementation: Cypress

The next step in our journey was *how* to implement the integration tests.  

We first looked at using [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) as an approach.  With this approach, the tests can target a single component or a more complex component (for example at the page level).  Although this approach was fast and reliable, it did not solve the problem in regards to the complexity involved with mocking.

In the ended, we landed on using [Cypress](https://www.cypress.io) for integration tests.  But we had to use Cypress in a very specific way.  Using the Cypress [intercept](https://docs.cypress.io/api/commands/intercept#Syntax) command was one of the key changes that we implemented.  Using this command, all network requests are intercepted.  If done correctly, the tests should still work even if the host computer is disconnected to the Internet.

## Code Coverage

### #2 Set up Code Coverage

The second key ingredient is setting up code coverage.  This would need to be done for both unit tests and the Cypress integration tests.  

For unit tests, this can be done easily using the [--coverage](https://blog.seriesci.com/how-to-create-code-coverage-for-your-react-app/) option of create-react-app.

For Cypress Integration tests, there is a little more [work](https://docs.cypress.io/guides/tooling/code-coverage) involved but it is possible. First, the code needs to be instrumented 

### Merging Code Coverage
### Checking metrics

## A New Pattern Emerging


## Are unit and Cypress E2E tests dead?

## Next blog

in depth example