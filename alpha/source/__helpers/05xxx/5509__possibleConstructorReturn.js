// Module ID: 5509
// Function ID: 5510
// Name: _possibleConstructorReturn
// Dependencies: [5494, 5510]

// Module 5509 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 5494 */;
import _assertThisInitialized from "_assertThisInitialized" /* 5510 */;


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
