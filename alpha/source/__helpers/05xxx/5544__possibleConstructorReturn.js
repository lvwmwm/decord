// Module ID: 5544
// Function ID: 5545
// Name: _possibleConstructorReturn
// Dependencies: [5529, 5545]

// Module 5544 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 5529 */;
import _assertThisInitialized from "_assertThisInitialized" /* 5545 */;


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
