// Module ID: 15599
// Function ID: 15600
// Dependencies: [15563, 15538, 15600, 15554, 15601, 15583, 15561, 15594]

// Module 15599
import _mod15538 from "module_15538" /* 15538 */;
import _mod15554 from "module_15554" /* 15554 */;
import _mod15563 from "module_15563" /* 15563 */;
import _mod15583 from "module_15583" /* 15583 */;
import _mod15594 from "module_15594" /* 15594 */;
import _mod15600 from "module_15600" /* 15600 */;
import _mod15601 from "module_15601" /* 15601 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod15600) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod15554.state) {
    let tmp = _mod15601("state");
    let closure_6 = tmp;
    _mod15583[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_15561")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(15538).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15594(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_15561")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_15561")(arg0, closure_6);
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
          if (_mod15563(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15538.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15554.state;
if (!state) {
  const _module = _mod15554;
  let self = this;
  let self2 = this;
  const weakMap = new _mod15538.WeakMap();
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
    const typeError = new _mod15538.TypeError("Object already initialized");
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
