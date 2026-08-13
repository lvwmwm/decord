// Module ID: 5697
// Function ID: 5698
// Name: _possibleConstructorReturn
// Dependencies: [5682, 5698]

// Module 5697 (_possibleConstructorReturn)

export default function _possibleConstructorReturn(arg0, fn) {
  if (fn) {
    return fn;
  }
  if (undefined !== fn) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return require(5698) /* _assertThisInitialized */(arg0);
  }
};
