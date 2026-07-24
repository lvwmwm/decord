// Module ID: 3956
// Function ID: 32690
// Name: emptyFunction
// Dependencies: [3957]

// Module 3956 (emptyFunction)
function emptyFunction() {

}
function emptyFunctionWithReset() {

}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

export default () => {
  function shim(arg0, arg1, arg2, arg3, arg4, arg5) {
    if (arg5 !== shim(outer1_1[0])) {
      const _Error = Error;
      const error = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      error.name = "Invariant Violation";
      throw error;
    }
  }
  function getShim() {
    return shim;
  }
  shim.isRequired = shim;
  obj = { array: shim, bool: shim, func: shim, number: shim, object: shim, string: shim, symbol: shim, any: shim, arrayOf: getShim, element: shim, elementType: shim, instanceOf: getShim, node: shim, objectOf: getShim, oneOf: getShim, oneOfType: getShim, shape: getShim, exact: getShim, checkPropTypes: emptyFunctionWithReset, resetWarningCache: emptyFunction, PropTypes: obj };
  return obj;
};
