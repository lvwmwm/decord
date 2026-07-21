// Module ID: 843
// Function ID: 9393
// Name: handleCallbackErrors
// Dependencies: []

// Module 843 (handleCallbackErrors)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.handleCallbackErrors = function handleCallbackErrors(arg0, arg1) {
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let fn = arguments[2];
    }
    if (arguments.length > 3) {
      if (undefined !== arguments[3]) {
        let fn2 = arguments[3];
      }
      const tmp3 = arg0();
      return function maybeHandlePromiseRejection(promise, arg1, arg2, fn2) {
        if (obj.isThenable(promise)) {
          return promise.then((arg0) => {
            arg2();
            arg3(arg0);
            return arg0;
          }, (arg0) => {
            arg1(arg0);
            arg2();
            throw arg0;
          });
        } else {
          arg2();
          fn2(promise);
          return promise;
        }
        const obj = arg1(arg2[0]);
      }(tmp3, arg1, tmp, fn2);
    }
    fn2 = () => {

    };
  }
  fn = () => {

  };
};
