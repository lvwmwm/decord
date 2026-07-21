// Module ID: 7266
// Function ID: 58555
// Name: handleCallbackErrors
// Dependencies: []

// Module 7266 (handleCallbackErrors)
arg5.handleCallbackErrors = function handleCallbackErrors(arg0, arg1) {
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let fn = arguments[2];
    }
    const tmp2 = arg0();
    return function maybeHandlePromiseRejection(promise, arg1, fn) {
      if (obj.isThenable(promise)) {
        return promise.then((arg0) => {
          arg2();
          return arg0;
        }, (arg0) => {
          arg1(arg0);
          arg2();
          throw arg0;
        });
      } else {
        fn();
        return promise;
      }
      const obj = arg1(fn[0]);
    }(tmp2, arg1, fn);
  }
  fn = () => {

  };
};
