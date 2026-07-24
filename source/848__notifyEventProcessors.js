// Module ID: 848
// Function ID: 9462
// Name: _notifyEventProcessors
// Dependencies: [804, 849, 800, 801]

// Module 848 (_notifyEventProcessors)
const require = arg1;
let dependencyMap = arg6;
function _notifyEventProcessors(arg0, arg1, arg2, arg3) {
  const _require = arg1;
  const dependencyMap = arg2;
  const _notifyEventProcessors = arg3;
  if (arg0) {
    if (tmp) {
      const _Object = Object;
      const tmpResult = tmp(Object.assign({}, arg0), arg1);
      let DEBUG_BUILD = _require(800).DEBUG_BUILD;
      if (DEBUG_BUILD) {
        DEBUG_BUILD = null === tmpResult;
      }
      if (DEBUG_BUILD) {
        const debug = _require(801).debug;
        let str = tmp.id;
        if (!str) {
          str = "?";
        }
        const _HermesInternal = HermesInternal;
        debug.log("Event processor \"" + str + "\" dropped event");
      }
      if (obj.isThenable(tmpResult)) {
        let nextPromise = tmpResult.then((arg0) => callback(arg0, closure_0, closure_1, callback + 1));
      } else {
        nextPromise = _notifyEventProcessors(tmpResult, arg1, arg2, arg3 + 1);
      }
      return nextPromise;
    }
  }
  return arg0;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.notifyEventProcessors = function notifyEventProcessors(arg0, arg1, arg2) {
  let num = 0;
  if (arguments.length > 3) {
    num = 0;
    if (undefined !== arguments[3]) {
      num = arguments[3];
    }
  }
  const tmp = _notifyEventProcessors(arg1, arg2, arg0, num);
  if (obj.isThenable(tmp)) {
    let resolvedSyncPromiseResult = tmp;
  } else {
    resolvedSyncPromiseResult = require(849) /* SyncPromise */.resolvedSyncPromise(tmp);
    const obj2 = require(849) /* SyncPromise */;
  }
  return resolvedSyncPromiseResult;
};
