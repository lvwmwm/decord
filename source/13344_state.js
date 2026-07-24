// Module ID: 13344
// Function ID: 102108
// Name: state
// Dependencies: [13308, 13283, 13345, 13299, 13346, 13328, 13306, 13339]

// Module 13344 (state)
import { state } from "__core-js_shared__";

if (!require("all")) {
  if (!require("__core-js_shared__").state) {
    const tmp = require("__core-js_shared__")("state");
    let closure_6 = tmp;
    require("module_13328")[tmp] = true;
    function set(facade) {
      if (require(13306) /* call */(facade, closure_6)) {
        let _TypeError = require(13283) /* check */.TypeError;
        const prototype = _TypeError.prototype;
        _TypeError = new _TypeError("Object already initialized");
        throw _TypeError;
      } else {
        arg1.facade = facade;
        require(13339)(facade, closure_6, arg1);
        return arg1;
      }
    }
    let set2 = set;
    function get(arg0) {
      if (require(13306) /* call */(arg0, closure_6)) {
        let obj = arg0[closure_6];
      } else {
        obj = {};
      }
      return obj;
    }
    let get2 = get;
    function has(arg0) {
      return require(13306) /* call */(arg0, closure_6);
    }
    let has2 = has;
  }
  let obj = {
    set,
    get,
    has,
    enforce(name) {
        if (has2(name)) {
          let tmp2 = get2(name);
        } else {
          tmp2 = set2(name, {});
        }
        return tmp2;
      },
    getterFor(arg0) {
        let closure_0 = arg0;
        return (arg0) => {
          if (callback(outer1_1[0])(arg0)) {
            const tmp2 = outer1_3(arg0);
            if (tmp2.type === callback) {
              return tmp2;
            }
          }
          const typeError = new callback(outer1_1[1]).TypeError("Incompatible receiver, " + callback + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
if (!state) {
  const _module = require("__core-js_shared__");
  let _WeakMap = require("check").WeakMap;
  let prototype = _WeakMap.prototype;
  _WeakMap = new _WeakMap();
  _module.state = _WeakMap;
  state = _WeakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
set2 = function set(facade) {
  if (state.has(facade)) {
    let _TypeError = require(13283) /* check */.TypeError;
    const prototype = _TypeError.prototype;
    _TypeError = new _TypeError("Object already initialized");
    throw _TypeError;
  } else {
    arg1.facade = facade;
    const result = state.set(facade, arg1);
    return arg1;
  }
};
get2 = function get(arg0) {
  return state.get(arg0) || {};
};
has2 = function has(arg0) {
  return state.has(arg0);
};
set = set2;
get = get2;
has = has2;
