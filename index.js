const defaults = (options) => {
  var options = options || {};
  var min = options.min;
  var max = options.max;

  if (min == null && max == null) {
    min = 0;
    max = 1;
  } else if (min == null) {
    min = max - 1;
  } else if (max == null) {
    max = min + 1;
  }
  if (max < min) throw new Error("Invalid option, max must be >= min");
  return {
    min: min,
    max: max,
  };
};

const generator = (options) => {
  let number = Math.random() * (options.max - options.min) + options.min;

  return options.int ? Math.floor(number) : number;
};

const random = (min, max) => {
  const options = defaults({ min, max });
  return generator({ ...options, int: false });
};

const integer = (min, max) => {
  const options = defaults({ min, max });
  return generator({ ...options, int: true });
};

const float = (min, max) => {
  const options = defaults({ min, max });
  return generator({ ...options, int: false });
};

const bool = () => {
  return Math.random() < 0.5;
};

module.exports = random;
module.exports.integer = integer;
module.exports.float = float;
module.exports.bool = bool;
