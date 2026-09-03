// Module ID: 5891
// Function ID: 5892
// Name: _possibleConstructorReturn
// Dependencies: [5876, 5892]

// Module 5891 (_possibleConstructorReturn)
import _assertThisInitialized from "_assertThisInitialized" /* 5892 */;


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
