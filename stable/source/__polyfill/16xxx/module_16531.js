// Module ID: 16531
// Function ID: 16532
// Dependencies: [16495, 16470, 16532, 16486, 16533, 16515, 16493, 16526]

// Module 16531
import _mod16470 from "module_16470" /* 16470 */;
import _mod16486 from "module_16486" /* 16486 */;
import _mod16495 from "module_16495" /* 16495 */;
import _mod16515 from "module_16515" /* 16515 */;
import _mod16526 from "module_16526" /* 16526 */;
import _mod16532 from "module_16532" /* 16532 */;
import _mod16533 from "module_16533" /* 16533 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16532) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16486.state) {
    let tmp = _mod16533("state");
    let closure_6 = tmp;
    _mod16515[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16493")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16470).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16526(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16493")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16493")(arg0, closure_6);
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
          if (_mod16495(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16470.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16486.state;
if (!state) {
  const _module = _mod16486;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16470.WeakMap();
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
    const typeError = new _mod16470.TypeError("Object already initialized");
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
