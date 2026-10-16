// Module ID: 15312
// Function ID: 15313
// Dependencies: [15276, 15251, 15313, 15267, 15314, 15296, 15274, 15307]

// Module 15312
import _mod15251 from "module_15251" /* 15251 */;
import _mod15267 from "module_15267" /* 15267 */;
import _mod15276 from "module_15276" /* 15276 */;
import _mod15296 from "module_15296" /* 15296 */;
import _mod15307 from "module_15307" /* 15307 */;
import _mod15313 from "module_15313" /* 15313 */;
import _mod15314 from "module_15314" /* 15314 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod15313) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod15267.state) {
    let tmp = _mod15314("state");
    let closure_6 = tmp;
    _mod15296[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_15274")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(15251).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15307(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_15274")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_15274")(arg0, closure_6);
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
          if (_mod15276(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15251.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15267.state;
if (!state) {
  const _module = _mod15267;
  let self = this;
  let self2 = this;
  const weakMap = new _mod15251.WeakMap();
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
    const typeError = new _mod15251.TypeError("Object already initialized");
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
