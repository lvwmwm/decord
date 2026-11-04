// Module ID: 5669
// Function ID: 5670
// Name: _possibleConstructorReturn
// Dependencies: [5654, 5670]

// Module 5669 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 5654 */;
import _assertThisInitialized from "_assertThisInitialized" /* 5670 */;


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
