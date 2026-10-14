// Module ID: 14971
// Function ID: 14972
// Dependencies: [14935, 14910, 14972, 14926, 14973, 14955, 14933, 14966]

// Module 14971
import _mod14910 from "module_14910" /* 14910 */;
import _mod14926 from "module_14926" /* 14926 */;
import _mod14935 from "module_14935" /* 14935 */;
import _mod14955 from "module_14955" /* 14955 */;
import _mod14966 from "module_14966" /* 14966 */;
import _mod14972 from "module_14972" /* 14972 */;
import _mod14973 from "module_14973" /* 14973 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod14972) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod14926.state) {
    let tmp = _mod14973("state");
    let closure_6 = tmp;
    _mod14955[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_14933")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(14910).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14966(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_14933")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_14933")(arg0, closure_6);
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
          if (_mod14935(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14910.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14926.state;
if (!state) {
  const _module = _mod14926;
  let self = this;
  let self2 = this;
  const weakMap = new _mod14910.WeakMap();
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
    const typeError = new _mod14910.TypeError("Object already initialized");
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
