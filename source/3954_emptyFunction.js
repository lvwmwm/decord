// Module ID: 3954
// Function ID: 32684
// Name: emptyFunction
// Dependencies: []

// Module 3954 (emptyFunction)
function emptyFunction() {

}
function emptyFunctionWithReset() {

}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

export default () => {
  function shim(arg0, arg1, arg2, arg3, arg4, arg5) {
    if (arg5 !== shim(closure_1[0])) {
      const _Error = Error;
      const error = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      error.name = "Invariant Violation";
      throw error;
    }
  }
  const require = shim;
  function getShim() {
    return shim;
  }
  shim.isRequired = shim;
  const obj = { array: shim, bool: shim, func: shim, number: shim, object: shim, string: shim, symbol: shim, any: shim, arrayOf: getShim, element: shim, elementType: shim, instanceOf: getShim, node: shim, objectOf: getShim, oneOf: getShim, oneOfType: getShim, shape: getShim, exact: getShim, checkPropTypes: emptyFunctionWithReset, resetWarningCache: emptyFunction, PropTypes: obj };
  return obj;
};
