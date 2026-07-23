// Module ID: 7271
// Function ID: 58600
// Name: handleCallbackErrors
// Dependencies: [7243]

// Module 7271 (handleCallbackErrors)
const require = arg1;
const dependencyMap = arg6;
arg5.handleCallbackErrors = function handleCallbackErrors(arg0, arg1) {
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let fn = arguments[2];
    }
    const tmp2 = arg0();
    return (function maybeHandlePromiseRejection(promise, arg1, fn) {
      let closure_0 = arg1;
      let closure_1 = fn;
      if (obj.isThenable(promise)) {
        return promise.then((arg0) => {
          callback2();
          return arg0;
        }, (arg0) => {
          callback(arg0);
          callback2();
          throw arg0;
        });
      } else {
        fn();
        return promise;
      }
      obj = outer1_0(outer1_1[0]);
    })(tmp2, arg1, fn);
  }
  fn = () => {

  };
};
