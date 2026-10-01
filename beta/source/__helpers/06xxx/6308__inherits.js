// Module ID: 6308
// Function ID: 6309
// Name: _inherits
// Dependencies: [6309]

// Module 6308 (_inherits)
import _setPrototypeOf from "_setPrototypeOf" /* 6309 */;


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
