// Module ID: 16189
// Function ID: 16190
// Dependencies: [16153, 16128, 16190, 16144, 16191, 16173, 16151, 16184]

// Module 16189
import _mod16128 from "module_16128" /* 16128 */;
import _mod16144 from "module_16144" /* 16144 */;
import _mod16153 from "module_16153" /* 16153 */;
import _mod16173 from "module_16173" /* 16173 */;
import _mod16184 from "module_16184" /* 16184 */;
import _mod16190 from "module_16190" /* 16190 */;
import _mod16191 from "module_16191" /* 16191 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16190) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16144.state) {
    let tmp = _mod16191("state");
    let closure_6 = tmp;
    _mod16173[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16151")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16128).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16184(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16151")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16151")(arg0, closure_6);
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
          if (_mod16153(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16128.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16144.state;
if (!state) {
  const _module = _mod16144;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16128.WeakMap();
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
    const typeError = new _mod16128.TypeError("Object already initialized");
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
