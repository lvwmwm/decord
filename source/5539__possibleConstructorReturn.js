// Module ID: 5539
// Function ID: 5540
// Name: _possibleConstructorReturn
// Dependencies: [5524, 5540]

// Module 5539 (_possibleConstructorReturn)

export default function _possibleConstructorReturn(arg0, arg1) {
  if (arg1) {
    return arg1;
  }
  if (undefined !== arg1) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return require(5540) /* _assertThisInitialized */(arg0);
  }
};
