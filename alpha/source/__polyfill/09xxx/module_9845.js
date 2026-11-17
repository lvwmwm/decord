// Module ID: 9845
// Function ID: 9846
// Dependencies: [9817]
// Exports: handleCallbackErrors

// Module 9845
import _mod9817 from "module_9817" /* 9817 */;


export function handleCallbackErrors(fn, fn2) {
  function maybeHandlePromiseRejection(promise, fn2, fn) {
    let closure_0 = fn2;
    let closure_1 = fn;
    const obj = _mod9817;
    if (obj.isThenable(promise)) {
      return promise.then((result) => {
        closure_1();
        return result;
      }, (arg0) => {
        closure_0(arg0);
        closure_1();
        throw arg0;
      });
    } else {
      fn();
      return promise;
    }
  }
  fn = arg2;
  if (arg2 === undefined) {
    fn = function t() {

    };
  }
  try {
    return maybeHandlePromiseRejection(fn(), fn2, fn);
  } catch (tmp2) {
    fn2(tmp2);
    fn();
    throw tmp2;
  }
}
