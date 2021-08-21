# randomvalue-js

> Random Number Generator.

# Install

`npm install randomvalue-js`

# Usage

```javascript
var random = require("randomvalue-js");

random(); // sample output → 0.6916960302530633
```

## Default Options

the exported function takes an **params**

- `min` : smallest possible value to return. defaults to 0.
- `max` : largest possible value to return. defaults to 1.

```js
var random = require("randomvalue-js");

// Default Random
random();

//Integer
random.integer(); // example output -> 0, default min = 0 and max = 1
//or
random.integer(min, max);
random.integer(2, 10);

//Float
random.float(); // example output -> 0.6916960302530633, default min = 0 and max = 1
//or
random.float(min, max);
random.float(2, 10);

//Boolean
random.bool(); // example output -> true
```

#### Table of Contents

- [Random](#random)
  - [integer](#integer)
  - [float](#float)
  - [bool](#bool)

#### [random](https://github.com/transitive-bullshit/random/blob/e11a840a1cfe0f5bd9c43640f9645a0b28f61406/src/random.js#L47-L49)

var random = require("random-np");
random();

Type: `function ()`

---

#### [integer](https://github.com/transitive-bullshit/random/blob/e11a840a1cfe0f5bd9c43640f9645a0b28f61406/src/random.js#L152-L154)

Samples a random integer, optionally specifying min and max values.

Convence wrapper around `random.integer()`

Type: `function (min, max): number`

- `min` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** (integer, inclusive) (optional, default `0`)
- `max` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** (integer, inclusive) (optional, default `1`)

---

#### [float](https://github.com/transitive-bullshit/random/blob/e11a840a1cfe0f5bd9c43640f9645a0b28f61406/src/random.js#L138-L140)

Samples a random floating point number, optionally specifying min and max values.

Convence wrapper around `random.float()`

Type: `function (min, max): number`

- `min` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** (float, inclusive) (optional, default `0`)
- `max` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** (float, exclusive) (optional, default `1`)

---

#### [bool](https://github.com/transitive-bullshit/random/blob/e11a840a1cfe0f5bd9c43640f9645a0b28f61406/src/random.js#L181-L183)

Samples a random boolean value.

Convence wrapper around `random.bool()`

Type: `function (): boolean`

---
