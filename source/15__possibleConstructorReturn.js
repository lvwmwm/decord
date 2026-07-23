// Module ID: 15
// Function ID: 251
// Name: _possibleConstructorReturn
// Dependencies: [10, 16]

// Module 15 (_possibleConstructorReturn)

export default function _possibleConstructorReturn(arg0, defaultResult1) {
  if (defaultResult1) {
    return defaultResult1;
  }
  if (undefined !== defaultResult1) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return require(16) /* _assertThisInitialized */(arg0);
  }
};
