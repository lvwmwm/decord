// Module ID: 13327
// Function ID: 13328
// Dependencies: [13299]
// Exports: handleCallbackErrors

// Module 13327
import _mod13299 from "module_13299" /* 13299 */;


export function handleCallbackErrors(fn, fn2) {
  function maybeHandlePromiseRejection(promise, fn2, fn) {
    let closure_0 = fn2;
    let closure_1 = fn;
    const obj = _mod13299;
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
