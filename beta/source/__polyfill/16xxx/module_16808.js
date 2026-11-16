// Module ID: 16808
// Function ID: 16809
// Dependencies: [16772, 16747, 16809, 16763, 16810, 16792, 16770, 16803]

// Module 16808
import _mod16747 from "module_16747" /* 16747 */;
import _mod16763 from "module_16763" /* 16763 */;
import _mod16772 from "module_16772" /* 16772 */;
import _mod16792 from "module_16792" /* 16792 */;
import _mod16803 from "module_16803" /* 16803 */;
import _mod16809 from "module_16809" /* 16809 */;
import _mod16810 from "module_16810" /* 16810 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16809) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16763.state) {
    let tmp = _mod16810("state");
    let closure_6 = tmp;
    _mod16792[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16770")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16747).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16803(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16770")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16770")(arg0, closure_6);
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
          if (_mod16772(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16747.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16763.state;
if (!state) {
  const _module = _mod16763;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16747.WeakMap();
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
    const typeError = new _mod16747.TypeError("Object already initialized");
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
