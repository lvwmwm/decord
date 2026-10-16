// Module ID: 15302
// Function ID: 15303
// Dependencies: [15266, 15241, 15303, 15257, 15304, 15286, 15264, 15297]

// Module 15302
import _mod15241 from "module_15241" /* 15241 */;
import _mod15257 from "module_15257" /* 15257 */;
import _mod15266 from "module_15266" /* 15266 */;
import _mod15286 from "module_15286" /* 15286 */;
import _mod15297 from "module_15297" /* 15297 */;
import _mod15303 from "module_15303" /* 15303 */;
import _mod15304 from "module_15304" /* 15304 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod15303) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod15257.state) {
    let tmp = _mod15304("state");
    let closure_6 = tmp;
    _mod15286[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_15264")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(15241).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15297(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_15264")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_15264")(arg0, closure_6);
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
          if (_mod15266(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15241.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15257.state;
if (!state) {
  const _module = _mod15257;
  let self = this;
  let self2 = this;
  const weakMap = new _mod15241.WeakMap();
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
    const typeError = new _mod15241.TypeError("Object already initialized");
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
