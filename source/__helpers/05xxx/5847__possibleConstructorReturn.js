// Module ID: 5847
// Function ID: 5848
// Name: _possibleConstructorReturn
// Dependencies: [5832, 5848]

// Module 5847 (_possibleConstructorReturn)
import _assertThisInitialized from "_assertThisInitialized" /* 5848 */;


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
