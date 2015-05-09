Min Int8
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Minimum signed 8-bit integer.


## Installation

``` bash
$ npm install compute-const-min-int8
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var MIN_INT8 = require( 'compute-const-min-int8' );
```

#### MIN_INT8

Minimum signed 8-bit integer.

``` javascript
MIN_INT8 === -1 * Math.pow( 2, 7 );
```


## Examples

``` javascript
var MIN_INT8 = require( 'compute-const-min-int8' );

console.log( MIN_INT8 );
// returns -127
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-const-min-int8.svg
[npm-url]: https://npmjs.org/package/compute-const-min-int8

[travis-image]: http://img.shields.io/travis/compute-io/const-min-int8/master.svg
[travis-url]: https://travis-ci.org/compute-io/const-min-int8

[coveralls-image]: https://img.shields.io/coveralls/compute-io/const-min-int8/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/const-min-int8?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/const-min-int8.svg
[dependencies-url]: https://david-dm.org/compute-io/const-min-int8

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/const-min-int8.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/const-min-int8

[github-issues-image]: http://img.shields.io/github/issues/compute-io/const-min-int8.svg
[github-issues-url]: https://github.com/compute-io/const-min-int8/issues
