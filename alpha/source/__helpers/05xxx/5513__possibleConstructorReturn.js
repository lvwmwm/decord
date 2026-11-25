// Module ID: 5513
// Function ID: 5514
// Name: _possibleConstructorReturn
// Dependencies: [5498, 5514]

// Module 5513 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 5498 */;
import _assertThisInitialized from "_assertThisInitialized" /* 5514 */;


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
