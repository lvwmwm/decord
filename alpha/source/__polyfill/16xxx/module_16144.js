// Module ID: 16144
// Function ID: 16145
// Dependencies: [16108, 16083, 16145, 16099, 16146, 16128, 16106, 16139]

// Module 16144
import _mod16083 from "module_16083" /* 16083 */;
import _mod16099 from "module_16099" /* 16099 */;
import _mod16108 from "module_16108" /* 16108 */;
import _mod16128 from "module_16128" /* 16128 */;
import _mod16139 from "module_16139" /* 16139 */;
import _mod16145 from "module_16145" /* 16145 */;
import _mod16146 from "module_16146" /* 16146 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16145) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16099.state) {
    let tmp = _mod16146("state");
    let closure_6 = tmp;
    _mod16128[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16106")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16083).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16139(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16106")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16106")(arg0, closure_6);
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
          if (_mod16108(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16083.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16099.state;
if (!state) {
  const _module = _mod16099;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16083.WeakMap();
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
    const typeError = new _mod16083.TypeError("Object already initialized");
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
