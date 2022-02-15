# Stop Writing React Unit Tests

Unit tests.  Love them.  Hate them.  But you can't get rid of them.

But I am here to tell you: you can get rid of them!  

In this article, I will tell you how.

## Jest Unit Tests: The Good and the Bad

There is obviously a lot of value with writing Jest unit tests for React components.  The biggest value is that the tests are fast to run.  This provides a level of protection in real time as a developer makes local changes; additionally, it also provides an extra level of protection by having the pipeline run the same unit tests as well.  Another great advantage of unit tests is that it is easy to set up code coverage.

Yet, with all of the value that comes with Jest unit tests, it's really easy to create unit tests that are hard to maintain. For example, a unit test that uses many mocks is harder to maintain and comprehend by others.  If a test knows too much of the implementation details of a component, then refactoring a component will often require updating associated unit tests. If a unit test is targeting a page component with many subcomponents, then there is added complexity in setting up all of the dependencies for the page component as well as all subcomponents. When an existing component is refactored into smaller components, then it begs the question if additional unit tests need to be created for the newly refactored subcomponents.  

## Cypress E2E Tests: The Good and the Bad

## Isolation Tests