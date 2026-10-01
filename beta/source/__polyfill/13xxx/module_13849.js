// Module ID: 13849
// Function ID: 13850
// Dependencies: [13813, 13788, 13850, 13804, 13851, 13833, 13811, 13844]

// Module 13849
import _mod13788 from "module_13788" /* 13788 */;
import _mod13804 from "module_13804" /* 13804 */;
import _mod13813 from "module_13813" /* 13813 */;
import _mod13833 from "module_13833" /* 13833 */;
import _mod13844 from "module_13844" /* 13844 */;
import _mod13850 from "module_13850" /* 13850 */;
import _mod13851 from "module_13851" /* 13851 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod13850) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod13804.state) {
    let tmp = _mod13851("state");
    let closure_6 = tmp;
    _mod13833[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_13811")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(13788).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod13844(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_13811")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_13811")(arg0, closure_6);
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
          if (_mod13813(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod13788.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod13804.state;
if (!state) {
  const _module = _mod13804;
  let self = this;
  let self2 = this;
  const weakMap = new _mod13788.WeakMap();
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
    const typeError = new _mod13788.TypeError("Object already initialized");
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
