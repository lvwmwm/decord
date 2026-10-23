// Module ID: 15581
// Function ID: 15582
// Dependencies: [15545, 15520, 15582, 15536, 15583, 15565, 15543, 15576]

// Module 15581
import _mod15520 from "module_15520" /* 15520 */;
import _mod15536 from "module_15536" /* 15536 */;
import _mod15545 from "module_15545" /* 15545 */;
import _mod15565 from "module_15565" /* 15565 */;
import _mod15576 from "module_15576" /* 15576 */;
import _mod15582 from "module_15582" /* 15582 */;
import _mod15583 from "module_15583" /* 15583 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod15582) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod15536.state) {
    let tmp = _mod15583("state");
    let closure_6 = tmp;
    _mod15565[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_15543")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(15520).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15576(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_15543")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_15543")(arg0, closure_6);
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
          if (_mod15545(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15520.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15536.state;
if (!state) {
  const _module = _mod15536;
  let self = this;
  let self2 = this;
  const weakMap = new _mod15520.WeakMap();
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
    const typeError = new _mod15520.TypeError("Object already initialized");
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
