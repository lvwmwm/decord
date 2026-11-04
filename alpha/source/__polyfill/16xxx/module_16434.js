// Module ID: 16434
// Function ID: 16435
// Dependencies: [16398, 16373, 16435, 16389, 16436, 16418, 16396, 16429]

// Module 16434
import _mod16373 from "module_16373" /* 16373 */;
import _mod16389 from "module_16389" /* 16389 */;
import _mod16398 from "module_16398" /* 16398 */;
import _mod16418 from "module_16418" /* 16418 */;
import _mod16429 from "module_16429" /* 16429 */;
import _mod16435 from "module_16435" /* 16435 */;
import _mod16436 from "module_16436" /* 16436 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16435) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16389.state) {
    let tmp = _mod16436("state");
    let closure_6 = tmp;
    _mod16418[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16396")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16373).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16429(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16396")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16396")(arg0, closure_6);
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
          if (_mod16398(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16373.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16389.state;
if (!state) {
  const _module = _mod16389;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16373.WeakMap();
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
    const typeError = new _mod16373.TypeError("Object already initialized");
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
