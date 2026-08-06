// Module ID: 5578
// Function ID: 5579
// Name: _possibleConstructorReturn
// Dependencies: [5563, 5579]

// Module 5578 (_possibleConstructorReturn)

export default function _possibleConstructorReturn(arg0, fn) {
  if (fn) {
    return fn;
  }
  if (undefined !== fn) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return require(5579) /* _assertThisInitialized */(arg0);
  }
};
