// Module ID: 5391
// Function ID: 46222
// Name: _possibleConstructorReturn
// Dependencies: [5372, 5392]

// Module 5391 (_possibleConstructorReturn)

export default function _possibleConstructorReturn(arg0, defaultResult1) {
  if (defaultResult1) {
    return defaultResult1;
  }
  if (undefined !== defaultResult1) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return require(5392) /* _assertThisInitialized */(arg0);
  }
};
