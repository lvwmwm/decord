// Module ID: 6885
// Function ID: 6886
// Name: _possibleConstructorReturn
// Dependencies: [6870, 6886]

// Module 6885 (_possibleConstructorReturn)
import _assertThisInitialized from "_assertThisInitialized" /* 6886 */;


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
