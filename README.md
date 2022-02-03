This project is demonstration on how gather code coverage metrics for unit and Cypress integration tests.  The code metrics are also merged.

## Running the Application

To run the sample application, enter the following command:

```
$ npm start
```

You can access the application by pointing your browser to http://localhost:3000.

## Running the unit tests

To run the unit tests, enter this commmand:

```
$ npm run test
```

When the tests have completed, a coverage report will be printed in the console. Additionally, you can access the same (and better) report in `coverage/jest/lcov-report/index.html`.  This report contains the same information, but you can also click into the files listed and see what lines are covered.

## Running the Cypress Integration Tests

To run the Cypress Integration Tests, run the command:

```
$ npm run start-test
```

This command will start the application at port 3000 and then run the Cypress Integration Tests.

When the tests have completed, a coverage report will be available at `coverage/cypress/lcov-report/index.html`.

You can alternatively run the tests by starting the application (`npm start`) and in another termnial, run the command `npm run cy:run`.   Additionally, if you want to use the Cypress GUI, use the command `npm run cy:open`.


## Merging the Code Coverage Results

Once you have run the unit tests and Cypress tests, you can merge the code coverage with this command:

```
$ npm run coverage:merge
```

You can access the <i>merged</i> code coverage report in `coverage/combined/lcov-report/index.html`.


## Checking the Results

To determine if you code coverage metrics are accetepable, run this command:

```
$ npm run coverage:check
```

This commmand will report an ERROR if any of the lines, branhces, statements, or functions metric is below 85 percent. (This number is configurable).  

It is recommended to use this command as a step in a CI pipeline.
