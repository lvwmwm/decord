// Module ID: 16532
// Function ID: 16533
// Dependencies: [16496, 16471, 16533, 16487, 16534, 16516, 16494, 16527]

// Module 16532
import _mod16471 from "module_16471" /* 16471 */;
import _mod16487 from "module_16487" /* 16487 */;
import _mod16496 from "module_16496" /* 16496 */;
import _mod16516 from "module_16516" /* 16516 */;
import _mod16527 from "module_16527" /* 16527 */;
import _mod16533 from "module_16533" /* 16533 */;
import _mod16534 from "module_16534" /* 16534 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16533) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16487.state) {
    let tmp = _mod16534("state");
    let closure_6 = tmp;
    _mod16516[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16494")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16471).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16527(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16494")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16494")(arg0, closure_6);
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
          if (_mod16496(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16471.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16487.state;
if (!state) {
  const _module = _mod16487;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16471.WeakMap();
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
    const typeError = new _mod16471.TypeError("Object already initialized");
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
