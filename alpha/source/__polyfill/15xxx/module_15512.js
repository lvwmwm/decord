// Module ID: 15512
// Function ID: 15513
// Dependencies: [15476, 15451, 15513, 15467, 15514, 15496, 15474, 15507]

// Module 15512
import _mod15451 from "module_15451" /* 15451 */;
import _mod15467 from "module_15467" /* 15467 */;
import _mod15476 from "module_15476" /* 15476 */;
import _mod15496 from "module_15496" /* 15496 */;
import _mod15507 from "module_15507" /* 15507 */;
import _mod15513 from "module_15513" /* 15513 */;
import _mod15514 from "module_15514" /* 15514 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod15513) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod15467.state) {
    let tmp = _mod15514("state");
    let closure_6 = tmp;
    _mod15496[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_15474")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(15451).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15507(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_15474")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_15474")(arg0, closure_6);
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
          if (_mod15476(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15451.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15467.state;
if (!state) {
  const _module = _mod15467;
  let self = this;
  let self2 = this;
  const weakMap = new _mod15451.WeakMap();
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
    const typeError = new _mod15451.TypeError("Object already initialized");
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
