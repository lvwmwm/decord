// Module ID: 16184
// Function ID: 16185
// Dependencies: [16148, 16123, 16185, 16139, 16186, 16168, 16146, 16179]

// Module 16184
import _mod16123 from "module_16123" /* 16123 */;
import _mod16139 from "module_16139" /* 16139 */;
import _mod16148 from "module_16148" /* 16148 */;
import _mod16168 from "module_16168" /* 16168 */;
import _mod16179 from "module_16179" /* 16179 */;
import _mod16185 from "module_16185" /* 16185 */;
import _mod16186 from "module_16186" /* 16186 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16185) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16139.state) {
    let tmp = _mod16186("state");
    let closure_6 = tmp;
    _mod16168[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16146")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16123).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16179(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16146")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16146")(arg0, closure_6);
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
          if (_mod16148(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16123.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16139.state;
if (!state) {
  const _module = _mod16139;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16123.WeakMap();
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
    const typeError = new _mod16123.TypeError("Object already initialized");
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
