// Module ID: 5295
// Function ID: 5296
// Name: _possibleConstructorReturn
// Dependencies: [5280, 5296]

// Module 5295 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 5280 */;
import _assertThisInitialized from "_assertThisInitialized" /* 5296 */;


export default function _possibleConstructorReturn(arg0, fn) {
  const tmp = fn;
  if (tmp) {
    _typeof;
    return fn;
  }
  if (undefined !== fn) {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return _assertThisInitialized(arg0);
  }
};
