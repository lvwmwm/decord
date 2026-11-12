// Module ID: 16685
// Function ID: 16686
// Dependencies: [16649, 16624, 16686, 16640, 16687, 16669, 16647, 16680]

// Module 16685
import _mod16624 from "module_16624" /* 16624 */;
import _mod16640 from "module_16640" /* 16640 */;
import _mod16649 from "module_16649" /* 16649 */;
import _mod16669 from "module_16669" /* 16669 */;
import _mod16680 from "module_16680" /* 16680 */;
import _mod16686 from "module_16686" /* 16686 */;
import _mod16687 from "module_16687" /* 16687 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16686) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16640.state) {
    let tmp = _mod16687("state");
    let closure_6 = tmp;
    _mod16669[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16647")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16624).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16680(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16647")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16647")(arg0, closure_6);
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
          if (_mod16649(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16624.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16640.state;
if (!state) {
  const _module = _mod16640;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16624.WeakMap();
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
    const typeError = new _mod16624.TypeError("Object already initialized");
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
