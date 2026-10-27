// Module ID: 15642
// Function ID: 15643
// Dependencies: [15606, 15581, 15643, 15597, 15644, 15626, 15604, 15637]

// Module 15642
import _mod15581 from "module_15581" /* 15581 */;
import _mod15597 from "module_15597" /* 15597 */;
import _mod15606 from "module_15606" /* 15606 */;
import _mod15626 from "module_15626" /* 15626 */;
import _mod15637 from "module_15637" /* 15637 */;
import _mod15643 from "module_15643" /* 15643 */;
import _mod15644 from "module_15644" /* 15644 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod15643) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod15597.state) {
    let tmp = _mod15644("state");
    let closure_6 = tmp;
    _mod15626[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_15604")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(15581).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15637(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_15604")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_15604")(arg0, closure_6);
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
          if (_mod15606(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15581.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15597.state;
if (!state) {
  const _module = _mod15597;
  let self = this;
  let self2 = this;
  const weakMap = new _mod15581.WeakMap();
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
    const typeError = new _mod15581.TypeError("Object already initialized");
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
