// Module ID: 267
// Function ID: 3377
// Name: _isNativeReflectConstruct
// Dependencies: [183]

// Module 267 (_isNativeReflectConstruct)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  showErrorDialog(error) {
    error = error.error;
    if (error instanceof Error) {
      error.componentStack = tmp;
      error.isComponentError = true;
      module(183).handleException(error, false);
      const obj = module(183);
      const tmp14 = error;
    } else if ("string" === typeof error) {
      const SyntheticError2 = require(183) /* _isNativeReflectConstruct */.SyntheticError;
      const prototype2 = SyntheticError2.prototype;
      let syntheticError2 = new SyntheticError2(error);
    } else {
      const SyntheticError = require(183) /* _isNativeReflectConstruct */.SyntheticError;
      const prototype = SyntheticError.prototype;
      syntheticError2 = new SyntheticError("Unspecified error");
    }
  }
};
