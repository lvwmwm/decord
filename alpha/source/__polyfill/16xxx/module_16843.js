// Module ID: 16843
// Function ID: 16844
// Dependencies: [16807, 16782, 16844, 16798, 16845, 16827, 16805, 16838]

// Module 16843
import _mod16782 from "module_16782" /* 16782 */;
import _mod16798 from "module_16798" /* 16798 */;
import _mod16807 from "module_16807" /* 16807 */;
import _mod16827 from "module_16827" /* 16827 */;
import _mod16838 from "module_16838" /* 16838 */;
import _mod16844 from "module_16844" /* 16844 */;
import _mod16845 from "module_16845" /* 16845 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16844) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16798.state) {
    let tmp = _mod16845("state");
    let closure_6 = tmp;
    _mod16827[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16805")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16782).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16838(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16805")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16805")(arg0, closure_6);
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
          if (_mod16807(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16782.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16798.state;
if (!state) {
  const _module = _mod16798;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16782.WeakMap();
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
    const typeError = new _mod16782.TypeError("Object already initialized");
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
