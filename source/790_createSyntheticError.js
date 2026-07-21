// Module ID: 790
// Function ID: 8933
// Name: createSyntheticError
// Dependencies: []

// Module 790 (createSyntheticError)
arg5.createSyntheticError = function createSyntheticError() {
  let num = 0;
  if (arguments.length > 0) {
    num = 0;
    if (undefined !== arguments[0]) {
      num = arguments[0];
    }
  }
  const error = new Error();
  error.framesToPop = num + 3;
  return error;
};
arg5.getFramesToPop = function getFramesToPop(syntheticException) {
  let num = 0;
  if (undefined !== syntheticException.framesToPop) {
    num = syntheticException.framesToPop;
  }
  return num;
};
arg5.isErrorLike = function isErrorLike(originalException) {
  let tmp = null !== originalException;
  if (tmp) {
    tmp = "object" === typeof originalException;
  }
  if (tmp) {
    tmp = "stack" in originalException;
  }
  if (tmp) {
    tmp = "string" === typeof originalException.stack;
  }
  return tmp;
};
