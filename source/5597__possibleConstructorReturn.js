// Module ID: 5597
// Function ID: 5598
// Name: _possibleConstructorReturn
// Dependencies: [5582, 5598]

// Module 5597 (_possibleConstructorReturn)

export default function _possibleConstructorReturn(arg0, fn) {
  if (fn) {
    return fn;
  }
  if (undefined !== fn) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return require(5598) /* _assertThisInitialized */(arg0);
  }
};
