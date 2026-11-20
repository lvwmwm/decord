// Module ID: 15476
// Function ID: 15477
// Dependencies: [15440, 15415, 15477, 15431, 15478, 15460, 15438, 15471]

// Module 15476
import _mod15415 from "module_15415" /* 15415 */;
import _mod15431 from "module_15431" /* 15431 */;
import _mod15440 from "module_15440" /* 15440 */;
import _mod15460 from "module_15460" /* 15460 */;
import _mod15471 from "module_15471" /* 15471 */;
import _mod15477 from "module_15477" /* 15477 */;
import _mod15478 from "module_15478" /* 15478 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod15477) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod15431.state) {
    let tmp = _mod15478("state");
    let closure_6 = tmp;
    _mod15460[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_15438")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(15415).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15471(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_15438")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_15438")(arg0, closure_6);
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
          if (_mod15440(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15415.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15431.state;
if (!state) {
  const _module = _mod15431;
  let self = this;
  let self2 = this;
  const weakMap = new _mod15415.WeakMap();
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
    const typeError = new _mod15415.TypeError("Object already initialized");
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
