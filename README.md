# Lab 34: Angular UI Bootstrap & Deployment

## Description
For this lab we continued working on the existing cfgram app codebase with bootstrap and practiced deploying to Heroku.

* [Lab Branch 31](https://github.com/mmpadget/31-image-uploads/tree/lab-31/lab-padget)
* [Lab Branch 32](https://github.com/mmpadget/31-image-uploads/tree/lab-32/lab-padget)
* [Lab Branch 33](https://github.com/mmpadget/31-image-uploads/tree/lab-33/lab-padget)
* [Lab Branch 34](https://github.com/mmpadget/31-image-uploads/tree/lab-34/lab-padget)

## Version
* 0.3.0

## Installation
Please visit the following pages for how to install your project locally.

* [Cloning A Repository](https://help.github.com/articles/cloning-a-repository/)
* [Fork A Repo](https://help.github.com/articles/fork-a-repo/)
* [Forking](https://guides.github.com/activities/forking/)

### Node
You'll need to have node.js installed.
* [Download Node](https://nodejs.org/en/)

### NPM Packages
* [NPM Docs](https://docs.npmjs.com)
* [NPM package.json](https://docs.npmjs.com/files/package.json)

### JSON Configuration
Initializing package.json
```
npm init
```
Dependencies:
```
npm i -S @uirouter/angularjs angular babel-core babel-loader babel-preset-es2015 camelcase clean-webpack-plugin css-loader dotenv extract-text-webpack-plugin express file-loader html-loader html-webpack-plugin ng-file-upload node-sass pascalcase sass-loader style-loader url-loader uuid webpack
```
Dev Dependencies:
```
npm i -D angular-mocks chai karma karma-chrome-launcher karma-mocha karma-mocha-reporter karma-phantomjs-launcher karma-webpack mocha webpack-dev-server
```

Add the following to package.json:
```
"scripts": {
  "test": "karma start --single-run",
  "test-watch": "karma",
  "build": "webpack",
  "build-watch": "webpack-dev-server --inline --hot"
}
```

### Dependencies
The result of installation above:

```
"dependencies": {
  "@uirouter/angularjs": "^1.0.3",
  "angular": "^1.6.4",
  "babel-core": "^6.24.1",
  "babel-loader": "^7.0.0",
  "babel-preset-es2015": "^6.24.1",
  "camelcase": "^4.1.0",
  "clean-webpack-plugin": "^0.1.16",
  "css-loader": "^0.28.4",
  "dotenv": "^4.0.0",
  "extract-text-webpack-plugin": "^2.1.0",
  "file-loader": "^0.11.2",
  "html-loader": "^0.4.5",
  "html-webpack-plugin": "^2.28.0",
  "ng-file-upload": "^12.2.13",
  "node-sass": "^4.5.3",
  "pascalcase": "^0.1.1",
  "sass-loader": "^6.0.5",
  "style-loader": "^0.18.2",
  "url-loader": "^0.5.8",
  "uuid": "^3.0.1",
  "webpack": "^2.6.1"
},
"devDependencies": {
  "angular-mocks": "^1.6.4",
  "chai": "^4.0.2",
  "karma": "^1.7.0",
  "karma-chrome-launcher": "^2.1.1",
  "karma-mocha": "^1.3.0",
  "karma-mocha-reporter": "^2.2.3",
  "karma-phantomjs-launcher": "^1.0.4",
  "karma-webpack": "^2.0.3",
  "mocha": "^3.4.2",
  "webpack-dev-server": "^2.4.5"
}
```

## Backend Installation
1. Clone the [slugram](https://github.com/slugbyte/slugram-backend) repo in a separate directory from this repo.
2. Add an env file.
3. Run `npm i`
4. Install MongoDB

## Application

### Front-end
In Terminal run `npm run build`
Result: app/index.html {0} [built]

In Terminal run `npm run build-watch`
Result: "Project is running at http://localhost:8080/", "webpack: Compiled successfully."

Exit with control + c

### Back-end
In 1st Terminal window navigate to your `slugram-backend` directory
Run `npm run start-debug`
Result: "slugram:sever server up on 3000"

In 2nd Terminal window run `mongo`
Result: "connecting to: mongodb://127.0.0.1:27017"

Exit with control + c

## API
http://localhost:3000

Use this route to:

1. Signup with username, email, and password:
- POST: `/api/signup`
2. Login with an existing username and password:
- GET: `/api/login`
3. Create a gallery:
- POST: `/api/gallery`
4. Get an array of all of a users galleries:
- GET: `/api/gallery`
5. Update a gallery with new information:
- PUT `/api/gallery/<galleryID>`
6. Delete a gallery:
- DELETE: `/api/gallery/<galleryID>`
7. Create a pic associated with a gallery:
- POST: `/api/gallery/<galleryID>/pic`
8. Delete a pic:
- DELETE: `/api/gallery/<galleryID>/pic/<picID>`

## Database
To clear the mongoDB, use Terminal to:
1. Enter `show dbs`
2. Enter `use cfgram-backend`
3. Enter `show collections`
4. Enter `db.users.drop()`
5. Enter `db.galleries.drop()`
6. Enter `db.pics.drop()`

To clear local storage, use Chrome console to:
* Enter `localStorage.clear()`

Clear with command + k

## Test Setup
```
karma init karma.conf.js

Which testing framework do you want to use ?
> jasmine

Do you want to use Require.js ?
> no

Do you want to capture any browsers automatically ?
> Chrome

What is the location of your source and test files ?
> test/**/*-test.js

Should any of the files included by the previous patterns be excluded ?
> no

Do you want Karma to watch all the files and run the tests on change ?
> no
```
Adjust the configuration karma.conf.js file to:

```
config.set({
  webpack,
  basePath: '',
  frameworks: ['mocha'],
  files: [
    'node_modules/angular/angular.js',
    'node_modules/angular-mocks/angular-mocks.js',
    'app/entry.js',
    'test/**/*-test.js',
  ],
  exclude: [
  ],
  preprocessors: {
    'app/entry.js': ['webpack'],
    'test/**/*-test.js': ['webpack'],
  },
  reporters: ['mocha'],
  port: 9876,
  colors: true,
  logLevel: config.LOG_DISABLE,
  autoWatch: true,
  browsers: ['Chrome'],
  singleRun: false,
  concurrency: Infinity,
});
```

## Running Tests
In [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) (Terminal) enter the command:

In Terminal enter `npm run test`
Result: "karma start --single-run", "Connected on socket", "0 tests completed"

In Terminal enter `npm run build-watch`
Result: "Project is running at http://localhost:8080/", "webpack: Compiled successfully."

## Resources
* [AngularJS Filters](https://docs.angularjs.org/guide/filter)
* [Karma Mocha Reporter](https://www.npmjs.com/package/karma-mocha-reporter)
* [Testing Controllers](http://www.bradoncode.com/blog/2015/06/05/ngmock-fundamentals-testing-controllers/)
* [End to End Testing](https://docs.angularjs.org/guide/e2e-testing)
* [Testing with Protractor](http://www.ng-newsletter.com/posts/practical-protractor.html)

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/mmpadget/31-image-uploads/blob/lab-31/lab-padget/LICENSE) file for details.

## Acknowledgments
* Code Fellows
* Scott Schmidt, Instructor
* Cayla Zabel, Teaching Assistant
* Devon Hackley, Teaching Assistant
* Thomas Martinez, Teaching Assistant
* JR Iriarte, Teaching Assistant
