// Module ID: 93
// Function ID: 94
// Name: _possibleConstructorReturn
// Dependencies: [45, 94]

// Module 93 (_possibleConstructorReturn)

export default function _possibleConstructorReturn(arg0, fn) {
  if (fn) {
    return fn;
  }
  if (undefined !== fn) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return require(94) /* _assertThisInitialized */(arg0);
  }
};
