// Module ID: 162
// Function ID: 2470
// Name: _wrapNativeSuper
// Dependencies: [0, 4294967295, 4294967295]

// Module 162 (_wrapNativeSuper)
function _wrapNativeSuper(arg0) {
  let map;
  if ("function" === typeof Map) {
    const _Map = Map;
    map = new Map();
  }
  const require = map;
  function _wrapNativeSuper(arg0) {
    class Wrapper {
      constructor() {
        tmp = arg0(closure_2[1]);
        return tmp(arg0, arguments, arg0(closure_2[2])(this).constructor);
      }
    }
    if (null !== arg0) {
      class Wrapper {
        constructor() {
          tmp = arg0(closure_2[1]);
          return tmp(arg0, arguments, arg0(closure_2[2])(this).constructor);
        }
      }
      if (map(closure_2[0])(arg0)) {
        if ("function" !== typeof arg0) {
          const _TypeError = TypeError;
          class Wrapper {
            constructor() {
              tmp = arg0(closure_2[1]);
              return tmp(arg0, arguments, arg0(closure_2[2])(this).constructor);
            }
          }
          const typeError = new TypeError("Super expression must either be null or a function");
          throw typeError;
        } else {
          if (undefined !== map) {
            class Wrapper {
              constructor() {
                tmp = arg0(closure_2[1]);
                return tmp(arg0, arguments, arg0(closure_2[2])(this).constructor);
              }
            }
          }
          class Wrapper {
            constructor() {
              tmp = arg0(closure_2[1]);
              return tmp(arg0, arguments, arg0(closure_2[2])(this).constructor);
            }
          }
          const _Object = Object;
          let obj = {};
          obj = { 1837105156: 1, 894631940: "column", 65904547: 200, 1233076609: "", value: Wrapper };
          obj.constructor = obj;
          Wrapper.prototype = Object.create(arg0.prototype, obj);
          return map(closure_2[3])(Wrapper, arg0);
        }
      }
    }
    return arg0;
  }
  module.exports = _wrapNativeSuper;
  return _wrapNativeSuper(arg0);
}

export default _wrapNativeSuper;
