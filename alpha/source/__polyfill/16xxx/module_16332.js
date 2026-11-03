// Module ID: 16332
// Function ID: 16333
// Dependencies: [16296, 16271, 16333, 16287, 16334, 16316, 16294, 16327]

// Module 16332
import _mod16271 from "module_16271" /* 16271 */;
import _mod16287 from "module_16287" /* 16287 */;
import _mod16296 from "module_16296" /* 16296 */;
import _mod16316 from "module_16316" /* 16316 */;
import _mod16327 from "module_16327" /* 16327 */;
import _mod16333 from "module_16333" /* 16333 */;
import _mod16334 from "module_16334" /* 16334 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16333) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16287.state) {
    let tmp = _mod16334("state");
    let closure_6 = tmp;
    _mod16316[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16294")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16271).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16327(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16294")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16294")(arg0, closure_6);
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
          if (_mod16296(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16271.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16287.state;
if (!state) {
  const _module = _mod16287;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16271.WeakMap();
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
    const typeError = new _mod16271.TypeError("Object already initialized");
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
