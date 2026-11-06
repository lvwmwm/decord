// Module ID: 5691
// Function ID: 5692
// Name: _possibleConstructorReturn
// Dependencies: [5676, 5692]

// Module 5691 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 5676 */;
import _assertThisInitialized from "_assertThisInitialized" /* 5692 */;


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
