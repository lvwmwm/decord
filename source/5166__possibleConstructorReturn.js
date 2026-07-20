// Module ID: 5166
// Function ID: 43785
// Name: _possibleConstructorReturn
// Dependencies: []

// Module 5166 (_possibleConstructorReturn)

export default function _possibleConstructorReturn(arg0, defaultResult1) {
  if (defaultResult1) {
    return defaultResult1;
  }
  if (undefined !== defaultResult1) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return require(dependencyMap[1])(arg0);
  }
};
