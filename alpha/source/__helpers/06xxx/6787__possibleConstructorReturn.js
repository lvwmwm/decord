// Module ID: 6787
// Function ID: 6788
// Name: _possibleConstructorReturn
// Dependencies: [6772, 6788]

// Module 6787 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 6772 */;
import _assertThisInitialized from "_assertThisInitialized" /* 6788 */;


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
