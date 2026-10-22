// Module ID: 15560
// Function ID: 15561
// Dependencies: [15524, 15499, 15561, 15515, 15562, 15544, 15522, 15555]

// Module 15560
import _mod15499 from "module_15499" /* 15499 */;
import _mod15515 from "module_15515" /* 15515 */;
import _mod15524 from "module_15524" /* 15524 */;
import _mod15544 from "module_15544" /* 15544 */;
import _mod15555 from "module_15555" /* 15555 */;
import _mod15561 from "module_15561" /* 15561 */;
import _mod15562 from "module_15562" /* 15562 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod15561) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod15515.state) {
    let tmp = _mod15562("state");
    let closure_6 = tmp;
    _mod15544[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_15522")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(15499).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15555(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_15522")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_15522")(arg0, closure_6);
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
          if (_mod15524(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15499.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15515.state;
if (!state) {
  const _module = _mod15515;
  let self = this;
  let self2 = this;
  const weakMap = new _mod15499.WeakMap();
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
    const typeError = new _mod15499.TypeError("Object already initialized");
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
