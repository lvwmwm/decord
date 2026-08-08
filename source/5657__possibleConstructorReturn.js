// Module ID: 5657
// Function ID: 5658
// Name: _possibleConstructorReturn
// Dependencies: [5642, 5658]

// Module 5657 (_possibleConstructorReturn)

export default function _possibleConstructorReturn(arg0, fn) {
  if (fn) {
    return fn;
  }
  if (undefined !== fn) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return require(5658) /* _assertThisInitialized */(arg0);
  }
};
