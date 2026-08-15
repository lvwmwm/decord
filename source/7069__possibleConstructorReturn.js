// Module ID: 7069
// Function ID: 7070
// Name: _possibleConstructorReturn
// Dependencies: [7054, 7070]

// Module 7069 (_possibleConstructorReturn)

export default function _possibleConstructorReturn(arg0, fn) {
  if (fn) {
    return fn;
  }
  if (undefined !== fn) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return require(7070) /* _assertThisInitialized */(arg0);
  }
};
