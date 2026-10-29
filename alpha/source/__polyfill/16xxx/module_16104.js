// Module ID: 16104
// Function ID: 16105
// Dependencies: [16068, 16043, 16105, 16059, 16106, 16088, 16066, 16099]

// Module 16104
import _mod16043 from "module_16043" /* 16043 */;
import _mod16059 from "module_16059" /* 16059 */;
import _mod16068 from "module_16068" /* 16068 */;
import _mod16088 from "module_16088" /* 16088 */;
import _mod16099 from "module_16099" /* 16099 */;
import _mod16105 from "module_16105" /* 16105 */;
import _mod16106 from "module_16106" /* 16106 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16105) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16059.state) {
    let tmp = _mod16106("state");
    let closure_6 = tmp;
    _mod16088[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16066")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16043).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16099(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16066")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16066")(arg0, closure_6);
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
          if (_mod16068(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16043.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16059.state;
if (!state) {
  const _module = _mod16059;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16043.WeakMap();
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
    const typeError = new _mod16043.TypeError("Object already initialized");
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
