// Module ID: 6789
// Function ID: 6790
// Name: _possibleConstructorReturn
// Dependencies: [6774, 6790]

// Module 6789 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 6774 */;
import _assertThisInitialized from "_assertThisInitialized" /* 6790 */;


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
