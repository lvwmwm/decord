// Module ID: 162
// Function ID: 2470
// Name: _wrapNativeSuper
// Dependencies: [163, 164, 17, 19]

// Module 162 (_wrapNativeSuper)
function _wrapNativeSuper(arg0) {
  let map;
  if ("function" === typeof Map) {
    const _Map = Map;
    map = new Map();
  }
  function _wrapNativeSuper(arg0) {
    let closure_0 = arg0;
    class Wrapper {
      constructor() {
        tmp = c0(outer2_2[1]);
        return tmp(closure_0, arguments, c0(outer2_2[2])(this).constructor);
      }
    }
    if (null !== arg0) {
      class Wrapper {
        constructor() {
          tmp = c0(outer2_2[1]);
          return tmp(closure_0, arguments, c0(outer2_2[2])(this).constructor);
        }
      }
      if (map(outer1_2[0])(arg0)) {
        if ("function" !== typeof arg0) {
          const _TypeError = TypeError;
          class Wrapper {
            constructor() {
              tmp = c0(outer2_2[1]);
              return tmp(closure_0, arguments, c0(outer2_2[2])(this).constructor);
            }
          }
          const typeError = new TypeError("Super expression must either be null or a function");
          throw typeError;
        } else {
          if (undefined !== closure_0) {
            class Wrapper {
              constructor() {
                tmp = c0(outer2_2[1]);
                return tmp(closure_0, arguments, c0(outer2_2[2])(this).constructor);
              }
            }
          }
          class Wrapper {
            constructor() {
              tmp = c0(outer2_2[1]);
              return tmp(closure_0, arguments, c0(outer2_2[2])(this).constructor);
            }
          }
          const _Object = Object;
          let obj = {};
          obj = { value: Wrapper, enumerable: false, writable: true, configurable: true };
          obj.constructor = obj;
          Wrapper.prototype = Object.create(arg0.prototype, obj);
          return map(outer1_2[3])(Wrapper, arg0);
        }
      }
    }
    return arg0;
  }
  module.exports = _wrapNativeSuper;
  return _wrapNativeSuper(arg0);
}

export default _wrapNativeSuper;
