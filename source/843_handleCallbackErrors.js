// Module ID: 843
// Function ID: 9395
// Name: handleCallbackErrors
// Dependencies: [804]

// Module 843 (handleCallbackErrors)
const require = arg1;
const dependencyMap = arg6;
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
      return (function maybeHandlePromiseRejection(promise, arg1, arg2, fn2) {
        let closure_0 = arg1;
        let closure_1 = arg2;
        let closure_2 = fn2;
        if (obj.isThenable(promise)) {
          return promise.then((arg0) => {
            callback2();
            callback3(arg0);
            return arg0;
          }, (arg0) => {
            callback(arg0);
            callback2();
            throw arg0;
          });
        } else {
          arg2();
          fn2(promise);
          return promise;
        }
        obj = outer1_0(outer1_1[0]);
      })(tmp3, arg1, tmp, fn2);
    }
    fn2 = () => {

    };
  }
  fn = () => {

  };
};
