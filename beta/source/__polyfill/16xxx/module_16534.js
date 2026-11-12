// Module ID: 16534
// Function ID: 16535
// Dependencies: [16498, 16473, 16535, 16489, 16536, 16518, 16496, 16529]

// Module 16534
import _mod16473 from "module_16473" /* 16473 */;
import _mod16489 from "module_16489" /* 16489 */;
import _mod16498 from "module_16498" /* 16498 */;
import _mod16518 from "module_16518" /* 16518 */;
import _mod16529 from "module_16529" /* 16529 */;
import _mod16535 from "module_16535" /* 16535 */;
import _mod16536 from "module_16536" /* 16536 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16535) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16489.state) {
    let tmp = _mod16536("state");
    let closure_6 = tmp;
    _mod16518[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16496")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16473).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16529(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16496")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16496")(arg0, closure_6);
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
          if (_mod16498(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16473.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16489.state;
if (!state) {
  const _module = _mod16489;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16473.WeakMap();
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
    const typeError = new _mod16473.TypeError("Object already initialized");
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
