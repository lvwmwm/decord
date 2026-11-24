// Module ID: 5418
// Function ID: 5419
// Name: _possibleConstructorReturn
// Dependencies: [5403, 5419]

// Module 5418 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 5403 */;
import _assertThisInitialized from "_assertThisInitialized" /* 5419 */;


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
