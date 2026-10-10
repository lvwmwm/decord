// Module ID: 14589
// Function ID: 14590
// Dependencies: [14553, 14528, 14590, 14544, 14591, 14573, 14551, 14584]

// Module 14589
import _mod14528 from "module_14528" /* 14528 */;
import _mod14544 from "module_14544" /* 14544 */;
import _mod14553 from "module_14553" /* 14553 */;
import _mod14573 from "module_14573" /* 14573 */;
import _mod14584 from "module_14584" /* 14584 */;
import _mod14590 from "module_14590" /* 14590 */;
import _mod14591 from "module_14591" /* 14591 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod14590) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod14544.state) {
    let tmp = _mod14591("state");
    let closure_6 = tmp;
    _mod14573[tmp] = true;
    fn = function t(facade, arg1) {
      const tmp3 = closure_6;
      if (require("module_14551")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new tmp(14528).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14584(facade, tmp3, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_14551")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_14551")(arg0, closure_6);
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
          if (_mod14553(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14528.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14544.state;
if (!state) {
  const _module = _mod14544;
  let self = this;
  let self2 = this;
  const weakMap = new _mod14528.WeakMap();
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
    const typeError = new _mod14528.TypeError("Object already initialized");
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
