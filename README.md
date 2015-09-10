# OpeningHours Parse

Parse textual representation of `OpeningHours` to collection.

## Installation

~~~sh
$ npm install mgscarp-openinghours-parse --save
~~~

## Usage

~~~js
var serialize = require('mgscarp-openinghours-serialize');

var data = [ 
        'Monday: 10:00-14:00',
        'Tuesday: 10:00-14:00',
        'Wednesday: 10:00-14:00'
    ].join('\n');

// returns [
//     { from: 600, to: 840 },
//     { from: 2040, to: 2280 },
//     { from: 3480, to: 3720 }
// ];
serialize(data); 
~~~

## Tests

Run tests with Mocha

~~~sh
$ make test
~~~

### Check

- <https://schema.org/openingHours>
- <https://github.com/mgscarp/openinghours>
