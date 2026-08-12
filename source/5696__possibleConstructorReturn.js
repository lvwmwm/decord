// Module ID: 5696
// Function ID: 5697
// Name: _possibleConstructorReturn
// Dependencies: [5681, 5697]

// Module 5696 (_possibleConstructorReturn)

export default function _possibleConstructorReturn(arg0, fn) {
  if (fn) {
    return fn;
  }
  if (undefined !== fn) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return require(5697) /* _assertThisInitialized */(arg0);
  }
};
