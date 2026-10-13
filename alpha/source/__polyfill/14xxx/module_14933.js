// Module ID: 14933
// Function ID: 14934
// Dependencies: [14897, 14872, 14934, 14888, 14935, 14917, 14895, 14928]

// Module 14933
import _mod14872 from "module_14872" /* 14872 */;
import _mod14888 from "module_14888" /* 14888 */;
import _mod14897 from "module_14897" /* 14897 */;
import _mod14917 from "module_14917" /* 14917 */;
import _mod14928 from "module_14928" /* 14928 */;
import _mod14934 from "module_14934" /* 14934 */;
import _mod14935 from "module_14935" /* 14935 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod14934) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod14888.state) {
    let tmp = _mod14935("state");
    let closure_6 = tmp;
    _mod14917[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_14895")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(14872).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14928(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_14895")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_14895")(arg0, closure_6);
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
          if (_mod14897(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14872.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14888.state;
if (!state) {
  const _module = _mod14888;
  let self = this;
  let self2 = this;
  const weakMap = new _mod14872.WeakMap();
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
    const typeError = new _mod14872.TypeError("Object already initialized");
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
