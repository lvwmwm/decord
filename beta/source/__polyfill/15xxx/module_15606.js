// Module ID: 15606
// Function ID: 15607
// Dependencies: [15570, 15545, 15607, 15561, 15608, 15590, 15568, 15601]

// Module 15606
import _mod15545 from "module_15545" /* 15545 */;
import _mod15561 from "module_15561" /* 15561 */;
import _mod15570 from "module_15570" /* 15570 */;
import _mod15590 from "module_15590" /* 15590 */;
import _mod15601 from "module_15601" /* 15601 */;
import _mod15607 from "module_15607" /* 15607 */;
import _mod15608 from "module_15608" /* 15608 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod15607) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod15561.state) {
    let tmp = _mod15608("state");
    let closure_6 = tmp;
    _mod15590[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_15568")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(15545).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15601(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_15568")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_15568")(arg0, closure_6);
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
          if (_mod15570(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15545.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15561.state;
if (!state) {
  const _module = _mod15561;
  let self = this;
  let self2 = this;
  const weakMap = new _mod15545.WeakMap();
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
    const typeError = new _mod15545.TypeError("Object already initialized");
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
