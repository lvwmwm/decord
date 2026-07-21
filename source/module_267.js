// Module ID: 267
// Function ID: 3377
// Dependencies: []

// Module 267
arg5.default = {
  showErrorDialog(error) {
    error = error.error;
    if (error instanceof Error) {
      error.componentStack = tmp;
      error.isComponentError = true;
      arg2(arg6[0]).handleException(error, false);
      const obj = arg2(arg6[0]);
      const tmp14 = error;
    } else if ("string" === typeof error) {
      const SyntheticError2 = arg1(arg6[0]).SyntheticError;
      const prototype2 = SyntheticError2.prototype;
      let syntheticError2 = new SyntheticError2(error);
    } else {
      const SyntheticError = arg1(arg6[0]).SyntheticError;
      const prototype = SyntheticError.prototype;
      syntheticError2 = new SyntheticError("Unspecified error");
    }
  }
};
