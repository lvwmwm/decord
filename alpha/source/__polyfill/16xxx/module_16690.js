// Module ID: 16690
// Function ID: 16691
// Dependencies: [16654, 16629, 16691, 16645, 16692, 16674, 16652, 16685]

// Module 16690
import _mod16629 from "module_16629" /* 16629 */;
import _mod16645 from "module_16645" /* 16645 */;
import _mod16654 from "module_16654" /* 16654 */;
import _mod16674 from "module_16674" /* 16674 */;
import _mod16685 from "module_16685" /* 16685 */;
import _mod16691 from "module_16691" /* 16691 */;
import _mod16692 from "module_16692" /* 16692 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16691) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16645.state) {
    let tmp = _mod16692("state");
    let closure_6 = tmp;
    _mod16674[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16652")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16629).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16685(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16652")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16652")(arg0, closure_6);
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
          if (_mod16654(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16629.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16645.state;
if (!state) {
  const _module = _mod16645;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16629.WeakMap();
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
    const typeError = new _mod16629.TypeError("Object already initialized");
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
