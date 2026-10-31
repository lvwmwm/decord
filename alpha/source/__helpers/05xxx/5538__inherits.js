// Module ID: 5538
// Function ID: 5539
// Name: _inherits
// Dependencies: [5539]

// Module 5538 (_inherits)
import _setPrototypeOf from "_setPrototypeOf" /* 5539 */;


export default function _inherits(value, fn) {
  if (typeof fn !== "function") {
    if (null !== fn) {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("Super expression must either be null or a function");
      throw typeError;
    }
  }
  let prototype = fn;
  const _Object = Object;
  if (fn) {
    prototype = fn.prototype;
  }
  const obj = { constructor: { value, writable: true, configurable: true } };
  value.prototype = create(prototype, obj);
  Object.defineProperty(value, "prototype", { writable: false });
  if (fn) {
    _setPrototypeOf(value, fn);
  }
};
