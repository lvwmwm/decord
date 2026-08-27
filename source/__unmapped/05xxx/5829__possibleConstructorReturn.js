// Module ID: 5829
// Function ID: 5830
// Name: _possibleConstructorReturn
// Dependencies: [5814, 5830]

// Module 5829 (_possibleConstructorReturn)
import _assertThisInitialized from "_assertThisInitialized" /* 5830 */;


export default function _possibleConstructorReturn(arg0, fn) {
  if (fn) {
    return fn;
  }
  if (undefined !== fn) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return _assertThisInitialized(arg0);
  }
};
