// Module ID: 5510
// Function ID: 5511
// Name: _possibleConstructorReturn
// Dependencies: [5495, 5511]

// Module 5510 (_possibleConstructorReturn)

export default function _possibleConstructorReturn(arg0, arg1) {
  if (arg1) {
    return arg1;
  }
  if (undefined !== arg1) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return require(5511) /* _assertThisInitialized */(arg0);
  }
};
