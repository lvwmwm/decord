// Module ID: 5833
// Function ID: 5834
// Name: _possibleConstructorReturn
// Dependencies: [5818, 5834]

// Module 5833 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 5818 */;
import _assertThisInitialized from "_assertThisInitialized" /* 5834 */;


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
