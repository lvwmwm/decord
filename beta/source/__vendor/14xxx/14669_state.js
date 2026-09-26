// Module ID: 14669
// Function ID: 14670
// Name: state
// Dependencies: [14633, 14608, 14670, 14624, 14671, 14653, 14631, 14664]

// Module 14669 (state)
import _mod14608 from "module_14608" /* 14608 */;
import _mod14624 from "module_14624" /* 14624 */;
import _mod14633 from "module_14633" /* 14633 */;
import _mod14653 from "module_14653" /* 14653 */;
import _mod14670 from "module_14670" /* 14670 */;
import _mod14671 from "module_14671" /* 14671 */;

const require = globalThis.__r;

if (!_mod14670) {
  if (!_mod14624.state) {
    const tmp = _mod14671("state");
    let closure_6 = tmp;
    _mod14653[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_14631")(facade, closure_6)) {
        const typeError = new tmp(14608).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        tmp(14664)(facade, tmp3, arg1);
        return arg1;
      }
      tmp3 = closure_6;
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_14631")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_14631")(arg0, closure_6);
    };
    let fn6 = fn3;
  }
  let obj = {
    set: fn,
    get: fn2,
    has: fn3,
    enforce(toString) {
        if (fn6(toString)) {
          let tmp2 = fn5(toString);
        } else {
          tmp2 = fn4(toString, {});
        }
        return tmp2;
      },
    getterFor(arg0) {
        closure_0 = arg0;
        return (arg0) => {
          if (_mod14633(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14608.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14624.state;
if (!state) {
  const _module = _mod14624;
  const weakMap = new _mod14608.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14608.TypeError("Object already initialized");
    throw typeError;
  } else {
    arg1.facade = facade;
    const result = obj.set(facade, arg1);
    return arg1;
  }
  obj = state;
};
fn5 = function n(arg0) {
  return state.get(arg0) || {};
};
fn6 = function u(arg0) {
  return state.has(arg0);
};
fn3 = fn6;
fn2 = fn5;
fn = fn4;
