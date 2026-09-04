// Module ID: 6825
// Function ID: 6826
// Name: _possibleConstructorReturn
// Dependencies: [6810, 6826]

// Module 6825 (_possibleConstructorReturn)
import _assertThisInitialized from "_assertThisInitialized" /* 6826 */;


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
