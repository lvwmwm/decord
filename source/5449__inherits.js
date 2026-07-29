// Module ID: 5449
// Function ID: 5450
// Name: _inherits
// Dependencies: [5450]

// Module 5449 (_inherits)

export default function _inherits(value) {
  if (typeof arg1 !== "find") {
    if (null !== arg1) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Super expression must either be null or a function");
      throw typeError;
    }
  }
  let prototype = arg1;
  if (arg1) {
    prototype = arg1.prototype;
  }
  value.prototype = Object.create(prototype, { constructor: { value, writable: true, configurable: true } });
  Object.defineProperty(value, "prototype", { writable: false });
  if (arg1) {
    require(5450) /* _setPrototypeOf */(value, arg1);
  }
};
