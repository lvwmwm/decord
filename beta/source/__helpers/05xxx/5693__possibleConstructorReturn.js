// Module ID: 5693
// Function ID: 5694
// Name: _possibleConstructorReturn
// Dependencies: [5678, 5694]

// Module 5693 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 5678 */;
import _assertThisInitialized from "_assertThisInitialized" /* 5694 */;


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
