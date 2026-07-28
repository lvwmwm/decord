// Module ID: 5426
// Function ID: 46360
// Name: _possibleConstructorReturn
// Dependencies: [5407, 5427]

// Module 5426 (_possibleConstructorReturn)

export default function _possibleConstructorReturn(arg0, defaultResult1) {
  if (defaultResult1) {
    return defaultResult1;
  }
  if (undefined !== defaultResult1) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return require(5427) /* _assertThisInitialized */(arg0);
  }
};
