// Module ID: 5524
// Function ID: 5525
// Name: _possibleConstructorReturn
// Dependencies: [5509, 5525]

// Module 5524 (_possibleConstructorReturn)

export default function _possibleConstructorReturn(arg0, fn) {
  if (fn) {
    return fn;
  }
  if (undefined !== fn) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return require(5525) /* _assertThisInitialized */(arg0);
  }
};
