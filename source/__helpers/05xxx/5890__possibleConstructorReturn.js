// Module ID: 5890
// Function ID: 5891
// Name: _possibleConstructorReturn
// Dependencies: [5875, 5891]

// Module 5890 (_possibleConstructorReturn)
import _assertThisInitialized from "_assertThisInitialized" /* 5891 */;


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
