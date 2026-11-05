// Module ID: 5671
// Function ID: 5672
// Name: _possibleConstructorReturn
// Dependencies: [5656, 5672]

// Module 5671 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 5656 */;
import _assertThisInitialized from "_assertThisInitialized" /* 5672 */;


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
