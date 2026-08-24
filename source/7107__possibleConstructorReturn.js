// Module ID: 7107
// Function ID: 7108
// Name: _possibleConstructorReturn
// Dependencies: [7092, 7108]

// Module 7107 (_possibleConstructorReturn)
import _assertThisInitialized from "_assertThisInitialized" /* 7108 */;


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
