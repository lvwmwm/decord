// Module ID: 5850
// Function ID: 5851
// Name: _possibleConstructorReturn
// Dependencies: [5835, 5851]

// Module 5850 (_possibleConstructorReturn)
import _assertThisInitialized from "_assertThisInitialized" /* 5851 */;


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
