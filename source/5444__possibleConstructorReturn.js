// Module ID: 5444
// Function ID: 5445
// Name: _possibleConstructorReturn
// Dependencies: [5429, 5445]

// Module 5444 (_possibleConstructorReturn)

export default function _possibleConstructorReturn(arg0, arg1) {
  if (arg1) {
    return arg1;
  }
  if (undefined !== arg1) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return require(5445) /* _assertThisInitialized */(arg0);
  }
};
