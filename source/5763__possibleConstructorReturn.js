// Module ID: 5763
// Function ID: 5764
// Name: _possibleConstructorReturn
// Dependencies: [5748, 5764]

// Module 5763 (_possibleConstructorReturn)
import _assertThisInitialized from "_assertThisInitialized" /* 5764 */;


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
