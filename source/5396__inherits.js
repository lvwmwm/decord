// Module ID: 5396
// Function ID: 46239
// Name: _inherits
// Dependencies: [5397]

// Module 5396 (_inherits)

export default function _inherits(value) {
  if ("function" !== typeof arg1) {
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
  const obj = { value, writable: true, configurable: true };
  value.prototype = Object.create(prototype, { constructor: obj });
  Object.defineProperty(value, "prototype", { writable: false });
  if (arg1) {
    require(5397) /* _setPrototypeOf */(value, arg1);
  }
};
