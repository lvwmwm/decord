// Module ID: 5656
// Function ID: 5657
// Name: _possibleConstructorReturn
// Dependencies: [5641, 5657]

// Module 5656 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 5641 */;
import _assertThisInitialized from "_assertThisInitialized" /* 5657 */;


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
