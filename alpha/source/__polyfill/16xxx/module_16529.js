// Module ID: 16529
// Function ID: 16530
// Dependencies: [16493, 16468, 16530, 16484, 16531, 16513, 16491, 16524]

// Module 16529
import _mod16468 from "module_16468" /* 16468 */;
import _mod16484 from "module_16484" /* 16484 */;
import _mod16493 from "module_16493" /* 16493 */;
import _mod16513 from "module_16513" /* 16513 */;
import _mod16524 from "module_16524" /* 16524 */;
import _mod16530 from "module_16530" /* 16530 */;
import _mod16531 from "module_16531" /* 16531 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16530) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16484.state) {
    let tmp = _mod16531("state");
    let closure_6 = tmp;
    _mod16513[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16491")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16468).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16524(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16491")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16491")(arg0, closure_6);
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
          if (_mod16493(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16468.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16484.state;
if (!state) {
  const _module = _mod16484;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16468.WeakMap();
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
    const typeError = new _mod16468.TypeError("Object already initialized");
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
