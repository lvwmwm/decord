// Module ID: 5563
// Function ID: 5564
// Name: _possibleConstructorReturn
// Dependencies: [5548, 5564]

// Module 5563 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 5548 */;
import _assertThisInitialized from "_assertThisInitialized" /* 5564 */;


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
