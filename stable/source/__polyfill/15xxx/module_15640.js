// Module ID: 15640
// Function ID: 15641
// Dependencies: [15604, 15579, 15641, 15595, 15642, 15624, 15602, 15635]

// Module 15640
import _mod15579 from "module_15579" /* 15579 */;
import _mod15595 from "module_15595" /* 15595 */;
import _mod15604 from "module_15604" /* 15604 */;
import _mod15624 from "module_15624" /* 15624 */;
import _mod15635 from "module_15635" /* 15635 */;
import _mod15641 from "module_15641" /* 15641 */;
import _mod15642 from "module_15642" /* 15642 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod15641) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod15595.state) {
    let tmp = _mod15642("state");
    let closure_6 = tmp;
    _mod15624[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_15602")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(15579).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15635(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_15602")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_15602")(arg0, closure_6);
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
          if (_mod15604(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15579.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15595.state;
if (!state) {
  const _module = _mod15595;
  let self = this;
  let self2 = this;
  const weakMap = new _mod15579.WeakMap();
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
    const typeError = new _mod15579.TypeError("Object already initialized");
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
