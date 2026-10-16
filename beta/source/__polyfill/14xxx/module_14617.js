// Module ID: 14617
// Function ID: 14618
// Dependencies: [14581, 14556, 14618, 14572, 14619, 14601, 14579, 14612]

// Module 14617
import _mod14556 from "module_14556" /* 14556 */;
import _mod14572 from "module_14572" /* 14572 */;
import _mod14581 from "module_14581" /* 14581 */;
import _mod14601 from "module_14601" /* 14601 */;
import _mod14612 from "module_14612" /* 14612 */;
import _mod14618 from "module_14618" /* 14618 */;
import _mod14619 from "module_14619" /* 14619 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod14618) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod14572.state) {
    let tmp = _mod14619("state");
    let closure_6 = tmp;
    _mod14601[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_14579")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(14556).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14612(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_14579")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_14579")(arg0, closure_6);
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
          if (_mod14581(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14556.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14572.state;
if (!state) {
  const _module = _mod14572;
  let self = this;
  let self2 = this;
  const weakMap = new _mod14556.WeakMap();
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
    const typeError = new _mod14556.TypeError("Object already initialized");
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
