// Module ID: 5663
// Function ID: 5664
// Name: _possibleConstructorReturn
// Dependencies: [5648, 5664]

// Module 5663 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 5648 */;
import _assertThisInitialized from "_assertThisInitialized" /* 5664 */;


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
