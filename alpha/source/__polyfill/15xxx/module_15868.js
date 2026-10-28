// Module ID: 15868
// Function ID: 15869
// Dependencies: [15832, 15807, 15869, 15823, 15870, 15852, 15830, 15863]

// Module 15868
import _mod15807 from "module_15807" /* 15807 */;
import _mod15823 from "module_15823" /* 15823 */;
import _mod15832 from "module_15832" /* 15832 */;
import _mod15852 from "module_15852" /* 15852 */;
import _mod15863 from "module_15863" /* 15863 */;
import _mod15869 from "module_15869" /* 15869 */;
import _mod15870 from "module_15870" /* 15870 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod15869) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod15823.state) {
    let tmp = _mod15870("state");
    let closure_6 = tmp;
    _mod15852[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_15830")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(15807).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15863(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_15830")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_15830")(arg0, closure_6);
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
          if (_mod15832(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15807.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15823.state;
if (!state) {
  const _module = _mod15823;
  let self = this;
  let self2 = this;
  const weakMap = new _mod15807.WeakMap();
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
    const typeError = new _mod15807.TypeError("Object already initialized");
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
