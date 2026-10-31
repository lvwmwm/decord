// Module ID: 16185
// Function ID: 16186
// Dependencies: [16149, 16124, 16186, 16140, 16187, 16169, 16147, 16180]

// Module 16185
import _mod16124 from "module_16124" /* 16124 */;
import _mod16140 from "module_16140" /* 16140 */;
import _mod16149 from "module_16149" /* 16149 */;
import _mod16169 from "module_16169" /* 16169 */;
import _mod16180 from "module_16180" /* 16180 */;
import _mod16186 from "module_16186" /* 16186 */;
import _mod16187 from "module_16187" /* 16187 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16186) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16140.state) {
    let tmp = _mod16187("state");
    let closure_6 = tmp;
    _mod16169[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16147")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16124).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16180(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16147")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16147")(arg0, closure_6);
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
          if (_mod16149(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16124.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16140.state;
if (!state) {
  const _module = _mod16140;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16124.WeakMap();
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
    const typeError = new _mod16124.TypeError("Object already initialized");
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
