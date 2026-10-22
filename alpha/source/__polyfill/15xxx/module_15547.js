// Module ID: 15547
// Function ID: 15548
// Dependencies: [15511, 15486, 15548, 15502, 15549, 15531, 15509, 15542]

// Module 15547
import _mod15486 from "module_15486" /* 15486 */;
import _mod15502 from "module_15502" /* 15502 */;
import _mod15511 from "module_15511" /* 15511 */;
import _mod15531 from "module_15531" /* 15531 */;
import _mod15542 from "module_15542" /* 15542 */;
import _mod15548 from "module_15548" /* 15548 */;
import _mod15549 from "module_15549" /* 15549 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod15548) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod15502.state) {
    let tmp = _mod15549("state");
    let closure_6 = tmp;
    _mod15531[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_15509")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(15486).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15542(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_15509")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_15509")(arg0, closure_6);
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
          if (_mod15511(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15486.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15502.state;
if (!state) {
  const _module = _mod15502;
  let self = this;
  let self2 = this;
  const weakMap = new _mod15486.WeakMap();
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
    const typeError = new _mod15486.TypeError("Object already initialized");
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
