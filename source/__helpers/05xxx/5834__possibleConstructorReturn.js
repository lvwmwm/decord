// Module ID: 5834
// Function ID: 5835
// Name: _possibleConstructorReturn
// Dependencies: [5819, 5835]

// Module 5834 (_possibleConstructorReturn)
import _assertThisInitialized from "_assertThisInitialized" /* 5835 */;


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
