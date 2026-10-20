// Module ID: 6565
// Function ID: 6566
// Name: _possibleConstructorReturn
// Dependencies: [6550, 6566]

// Module 6565 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 6550 */;
import _assertThisInitialized from "_assertThisInitialized" /* 6566 */;


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
