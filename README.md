# Big F(ast) Counter

Fast increment and decrement operations for big numbers represented as strings.

## Installation

With npm:
`npm install --save bfcounter`

With yarn:
`yarn add bfcounter`

## Usage

```javascript
const bfc = require("bfcounter");

var counter = "100000000000000000000000000000000000000000000000000";

var incremented = bfc.increment(counter); // "100000000000000000000000000000000000000000000000001"

var decremented = bfc.decrement(incremented); // "100000000000000000000000000000000000000000000000000"
```