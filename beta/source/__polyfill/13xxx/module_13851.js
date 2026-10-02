// Module ID: 13851
// Function ID: 13852
// Dependencies: [13815, 13790, 13852, 13806, 13853, 13835, 13813, 13846]

// Module 13851
import _mod13790 from "module_13790" /* 13790 */;
import _mod13806 from "module_13806" /* 13806 */;
import _mod13815 from "module_13815" /* 13815 */;
import _mod13835 from "module_13835" /* 13835 */;
import _mod13846 from "module_13846" /* 13846 */;
import _mod13852 from "module_13852" /* 13852 */;
import _mod13853 from "module_13853" /* 13853 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod13852) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod13806.state) {
    let tmp = _mod13853("state");
    let closure_6 = tmp;
    _mod13835[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_13813")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(13790).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod13846(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_13813")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_13813")(arg0, closure_6);
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
          if (_mod13815(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod13790.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod13806.state;
if (!state) {
  const _module = _mod13806;
  let self = this;
  let self2 = this;
  const weakMap = new _mod13790.WeakMap();
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
    const typeError = new _mod13790.TypeError("Object already initialized");
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
