// Module ID: 16492
// Function ID: 16493
// Dependencies: [16456, 16431, 16493, 16447, 16494, 16476, 16454, 16487]

// Module 16492
import _mod16431 from "module_16431" /* 16431 */;
import _mod16447 from "module_16447" /* 16447 */;
import _mod16456 from "module_16456" /* 16456 */;
import _mod16476 from "module_16476" /* 16476 */;
import _mod16487 from "module_16487" /* 16487 */;
import _mod16493 from "module_16493" /* 16493 */;
import _mod16494 from "module_16494" /* 16494 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod16493) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod16447.state) {
    let tmp = _mod16494("state");
    let closure_6 = tmp;
    _mod16476[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_16454")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(16431).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16487(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_16454")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_16454")(arg0, closure_6);
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
          if (_mod16456(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16431.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16447.state;
if (!state) {
  const _module = _mod16447;
  let self = this;
  let self2 = this;
  const weakMap = new _mod16431.WeakMap();
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
    const typeError = new _mod16431.TypeError("Object already initialized");
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
