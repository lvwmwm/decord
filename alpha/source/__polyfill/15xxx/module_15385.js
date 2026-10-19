// Module ID: 15385
// Function ID: 15386
// Dependencies: [15349, 15324, 15386, 15340, 15387, 15369, 15347, 15380]

// Module 15385
import _mod15324 from "module_15324" /* 15324 */;
import _mod15340 from "module_15340" /* 15340 */;
import _mod15349 from "module_15349" /* 15349 */;
import _mod15369 from "module_15369" /* 15369 */;
import _mod15380 from "module_15380" /* 15380 */;
import _mod15386 from "module_15386" /* 15386 */;
import _mod15387 from "module_15387" /* 15387 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod15386) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod15340.state) {
    let tmp = _mod15387("state");
    let closure_6 = tmp;
    _mod15369[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_15347")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(15324).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15380(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_15347")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_15347")(arg0, closure_6);
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
          if (_mod15349(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15324.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15340.state;
if (!state) {
  const _module = _mod15340;
  let self = this;
  let self2 = this;
  const weakMap = new _mod15324.WeakMap();
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
    const typeError = new _mod15324.TypeError("Object already initialized");
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
