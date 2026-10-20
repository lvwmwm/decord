// Module ID: 15413
// Function ID: 15414
// Dependencies: [15377, 15352, 15414, 15368, 15415, 15397, 15375, 15408]

// Module 15413
import _mod15352 from "module_15352" /* 15352 */;
import _mod15368 from "module_15368" /* 15368 */;
import _mod15377 from "module_15377" /* 15377 */;
import _mod15397 from "module_15397" /* 15397 */;
import _mod15408 from "module_15408" /* 15408 */;
import _mod15414 from "module_15414" /* 15414 */;
import _mod15415 from "module_15415" /* 15415 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod15414) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod15368.state) {
    let tmp = _mod15415("state");
    let closure_6 = tmp;
    _mod15397[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_15375")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(15352).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15408(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_15375")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_15375")(arg0, closure_6);
    };
    fn6 = fn3;
  }
  let obj = {
    set: fn,
    get: fn2,
    has: fn3,
    enforce(toString) {
        let tmp2;
        if (fn6(toString)) {
          tmp2 = fn5(toString);
        } else {
          tmp2 = fn4(toString, {});
        }
        return tmp2;
      },
    getterFor(arg0) {
        let closure_0 = arg0;
        return (arg0) => {
          if (_mod15377(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15352.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15368.state;
if (!state) {
  const _module = _mod15368;
  let self = this;
  let self2 = this;
  const weakMap = new _mod15352.WeakMap();
  let tmp4 = weakMap;
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  const obj = state;
  if (state.has(facade)) {
    const self = this;
    const self2 = this;
    const typeError = new _mod15352.TypeError("Object already initialized");
    throw typeError;
  } else {
    arg1.facade = facade;
    const result = obj.set(facade, arg1);
    return arg1;
  }
};
fn5 = function n(arg0) {
  const tmp = state.get(arg0) || {};
  return tmp;
};
fn6 = function u(arg0) {
  return state.has(arg0);
};
fn3 = fn6;
fn2 = fn5;
fn = fn4;
