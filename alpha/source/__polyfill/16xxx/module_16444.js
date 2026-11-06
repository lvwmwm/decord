// Module ID: 16444
// Function ID: 16445
// Dependencies: [16408, 16383, 16445, 16399, 16446, 16428, 16406, 16439]

// Module 16444
import _mod16383 from "module_16383" /* 16383 */;
import _mod16399 from "module_16399" /* 16399 */;
import _mod16408 from "module_16408" /* 16408 */;
import _mod16428 from "module_16428" /* 16428 */;
import _mod16439 from "module_16439" /* 16439 */;
import _mod16445 from "module_16445" /* 16445 */;
import _mod16446 from "module_16446" /* 16446 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16445) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16399.state) {
    let tmp = _mod16446("state");
    let closure_6 = tmp;
    _mod16428[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16406")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16383).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16439(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16406")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16406")(arg0, closure_6);
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
          if (_mod16408(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16383.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16399.state;
if (!state) {
  const _module = _mod16399;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16383.WeakMap();
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
    const typeError = new _mod16383.TypeError("Object already initialized");
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
