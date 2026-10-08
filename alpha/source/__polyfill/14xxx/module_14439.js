// Module ID: 14439
// Function ID: 14440
// Dependencies: [14403, 14378, 14440, 14394, 14441, 14423, 14401, 14434]

// Module 14439
import _mod14378 from "module_14378" /* 14378 */;
import _mod14394 from "module_14394" /* 14394 */;
import _mod14403 from "module_14403" /* 14403 */;
import _mod14423 from "module_14423" /* 14423 */;
import _mod14434 from "module_14434" /* 14434 */;
import _mod14440 from "module_14440" /* 14440 */;
import _mod14441 from "module_14441" /* 14441 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod14440) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod14394.state) {
    let tmp = _mod14441("state");
    let closure_6 = tmp;
    _mod14423[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_14401")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(14378).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14434(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_14401")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_14401")(arg0, closure_6);
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
          if (_mod14403(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14378.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14394.state;
if (!state) {
  const _module = _mod14394;
  let self = this;
  let self2 = this;
  const weakMap = new _mod14378.WeakMap();
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
    const typeError = new _mod14378.TypeError("Object already initialized");
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
