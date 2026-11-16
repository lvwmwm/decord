// Module ID: 5834
// Function ID: 5835
// Name: _inherits
// Dependencies: [5835]

// Module 5834 (_inherits)
import _setPrototypeOf from "_setPrototypeOf" /* 5835 */;


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
