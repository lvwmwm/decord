// Module ID: 6296
// Function ID: 6297
// Name: _possibleConstructorReturn
// Dependencies: [6281, 6297]

// Module 6296 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 6281 */;
import _assertThisInitialized from "_assertThisInitialized" /* 6297 */;


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
