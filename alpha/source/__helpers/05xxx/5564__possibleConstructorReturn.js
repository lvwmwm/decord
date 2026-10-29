// Module ID: 5564
// Function ID: 5565
// Name: _possibleConstructorReturn
// Dependencies: [5549, 5565]

// Module 5564 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 5549 */;
import _assertThisInitialized from "_assertThisInitialized" /* 5565 */;


export default function _possibleConstructorReturn(arg0, fn) {
  const tmp = fn;
  if (tmp) {
    _typeof;
    return fn;
  }
  if (undefined !== fn) {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return _assertThisInitialized(arg0);
  }
};
