// Module ID: 5718
// Function ID: 5719
// Name: _possibleConstructorReturn
// Dependencies: [5703, 5719]

// Module 5718 (_possibleConstructorReturn)

export default function _possibleConstructorReturn(arg0, fn) {
  if (fn) {
    return fn;
  }
  if (undefined !== fn) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return require(5719) /* _assertThisInitialized */(arg0);
  }
};
