// Module ID: 14641
// Function ID: 14642
// Name: state
// Dependencies: [14605, 14580, 14642, 14596, 14643, 14625, 14603, 14636]

// Module 14641 (state)
import _mod14580 from "module_14580" /* 14580 */;
import _mod14596 from "module_14596" /* 14596 */;
import _mod14605 from "module_14605" /* 14605 */;
import _mod14625 from "module_14625" /* 14625 */;
import _mod14642 from "module_14642" /* 14642 */;
import _mod14643 from "module_14643" /* 14643 */;

const require = globalThis.__r;

if (!_mod14642) {
  if (!_mod14596.state) {
    const tmp = _mod14643("state");
    let closure_6 = tmp;
    _mod14625[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_14603")(facade, closure_6)) {
        const typeError = new tmp(14580).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        tmp(14636)(facade, tmp3, arg1);
        return arg1;
      }
      tmp3 = closure_6;
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_14603")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_14603")(arg0, closure_6);
    };
    let fn6 = fn3;
  }
  let obj = {
    set: fn,
    get: fn2,
    has: fn3,
    enforce(toString) {
        if (fn6(toString)) {
          let tmp2 = fn5(toString);
        } else {
          tmp2 = fn4(toString, {});
        }
        return tmp2;
      },
    getterFor(arg0) {
        closure_0 = arg0;
        return (arg0) => {
          if (_mod14605(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14580.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14596.state;
if (!state) {
  const _module = _mod14596;
  const weakMap = new _mod14580.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14580.TypeError("Object already initialized");
    throw typeError;
  } else {
    arg1.facade = facade;
    const result = obj.set(facade, arg1);
    return arg1;
  }
  obj = state;
};
fn5 = function n(arg0) {
  return state.get(arg0) || {};
};
fn6 = function u(arg0) {
  return state.has(arg0);
};
fn3 = fn6;
fn2 = fn5;
fn = fn4;
