// Module ID: 13177
// Function ID: 99625
// Name: state
// Dependencies: []

// Module 13177 (state)
if (!require(dependencyMap[2])) {
  if (!require(dependencyMap[3]).state) {
    const tmp = require(dependencyMap[4])("state");
    require(dependencyMap[5])[tmp] = true;
    function set(facade) {
      if (require(dependencyMap[6])(facade, tmp)) {
        let _TypeError = require(dependencyMap[1]).TypeError;
        const prototype = _TypeError.prototype;
        _TypeError = new _TypeError("Object already initialized");
        throw _TypeError;
      } else {
        arg1.facade = facade;
        require(dependencyMap[7])(facade, require, arg1);
        return arg1;
      }
    }
    let set2 = set;
    function get(arg0) {
      if (require(dependencyMap[6])(arg0, tmp)) {
        let obj = arg0[closure_6];
      } else {
        obj = {};
      }
      return obj;
    }
    let get2 = get;
    function has(arg0) {
      return require(dependencyMap[6])(arg0, tmp);
    }
    let has2 = has;
  }
  const obj = {
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
        const require = arg0;
        return (arg0) => {
          if (arg0(closure_1[0])(arg0)) {
            const tmp2 = callback(arg0);
            if (tmp2.type === arg0) {
              return tmp2;
            }
          }
          const typeError = new arg0(closure_1[1]).TypeError("Incompatible receiver, " + arg0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = require(dependencyMap[3]).state;
if (!state) {
  const _module = require(dependencyMap[3]);
  let _WeakMap = require(dependencyMap[1]).WeakMap;
  const prototype = _WeakMap.prototype;
  _WeakMap = new _WeakMap();
  _module.state = _WeakMap;
  state = _WeakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
set2 = function set(facade) {
  if (state.has(facade)) {
    let _TypeError = require(dependencyMap[1]).TypeError;
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
