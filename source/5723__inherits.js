// Module ID: 5723
// Function ID: 5724
// Name: _inherits
// Dependencies: [5724]

// Module 5723 (_inherits)

export default function _inherits(value, fn) {
  if (typeof fn !== "function") {
    if (null !== fn) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Super expression must either be null or a function");
      throw typeError;
    }
  }
  let prototype = fn;
  if (fn) {
    prototype = fn.prototype;
  }
  value.prototype = Object.create(prototype, { constructor: { value, writable: true, configurable: true } });
  Object.defineProperty(value, "prototype", { writable: false });
  if (fn) {
    require(5724) /* _setPrototypeOf */(value, fn);
  }
};
