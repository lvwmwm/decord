// Module ID: 15800
// Function ID: 15801
// Dependencies: [15764, 15739, 15801, 15755, 15802, 15784, 15762, 15795]

// Module 15800
import _mod15739 from "module_15739" /* 15739 */;
import _mod15755 from "module_15755" /* 15755 */;
import _mod15764 from "module_15764" /* 15764 */;
import _mod15784 from "module_15784" /* 15784 */;
import _mod15795 from "module_15795" /* 15795 */;
import _mod15801 from "module_15801" /* 15801 */;
import _mod15802 from "module_15802" /* 15802 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod15801) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod15755.state) {
    let tmp = _mod15802("state");
    let closure_6 = tmp;
    _mod15784[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_15762")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(15739).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15795(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_15762")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_15762")(arg0, closure_6);
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
          if (_mod15764(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15739.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15755.state;
if (!state) {
  const _module = _mod15755;
  let self = this;
  let self2 = this;
  const weakMap = new _mod15739.WeakMap();
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
    const typeError = new _mod15739.TypeError("Object already initialized");
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
