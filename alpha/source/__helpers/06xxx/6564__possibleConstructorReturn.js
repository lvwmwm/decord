// Module ID: 6564
// Function ID: 6565
// Name: _possibleConstructorReturn
// Dependencies: [6549, 6565]

// Module 6564 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 6549 */;
import _assertThisInitialized from "_assertThisInitialized" /* 6565 */;


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
