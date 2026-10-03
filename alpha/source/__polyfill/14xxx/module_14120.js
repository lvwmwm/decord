// Module ID: 14120
// Function ID: 14121
// Dependencies: [14084, 14059, 14121, 14075, 14122, 14104, 14082, 14115]

// Module 14120
import _mod14059 from "module_14059" /* 14059 */;
import _mod14075 from "module_14075" /* 14075 */;
import _mod14084 from "module_14084" /* 14084 */;
import _mod14104 from "module_14104" /* 14104 */;
import _mod14115 from "module_14115" /* 14115 */;
import _mod14121 from "module_14121" /* 14121 */;
import _mod14122 from "module_14122" /* 14122 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod14121) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod14075.state) {
    let tmp = _mod14122("state");
    let closure_6 = tmp;
    _mod14104[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_14082")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(14059).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14115(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_14082")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_14082")(arg0, closure_6);
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
          if (_mod14084(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14059.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14075.state;
if (!state) {
  const _module = _mod14075;
  let self = this;
  let self2 = this;
  const weakMap = new _mod14059.WeakMap();
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
    const typeError = new _mod14059.TypeError("Object already initialized");
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
