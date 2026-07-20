// Module ID: 848
// Function ID: 9456
// Name: _notifyEventProcessors
// Dependencies: []

// Module 848 (_notifyEventProcessors)
function _notifyEventProcessors(tmpResult, arg1, arg2, arg3) {
  const arg6 = arg2;
  const _notifyEventProcessors = arg3;
  if (tmpResult) {
    if (tmp) {
      const _Object = Object;
      tmpResult = tmp(Object.assign({}, tmpResult), arg1);
      let DEBUG_BUILD = arg1(arg6[2]).DEBUG_BUILD;
      if (DEBUG_BUILD) {
        DEBUG_BUILD = null === tmpResult;
      }
      if (DEBUG_BUILD) {
        const debug = arg1(arg6[3]).debug;
        let str = tmp.id;
        if (!str) {
          str = "?";
        }
        const _HermesInternal = HermesInternal;
        debug.log("Event processor \"" + str + "\" dropped event");
      }
      if (obj.isThenable(tmpResult)) {
        let nextPromise = tmpResult.then((arg0) => arg3(arg0, arg1, arg2, arg3 + 1));
      } else {
        nextPromise = _notifyEventProcessors(tmpResult, arg1, arg2, arg3 + 1);
      }
      return nextPromise;
    }
  }
  return tmpResult;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.notifyEventProcessors = function notifyEventProcessors(arg0, tmpResult) {
  let num = 0;
  if (arguments.length > 3) {
    num = 0;
    if (undefined !== arguments[3]) {
      num = arguments[3];
    }
  }
  const tmp = _notifyEventProcessors(tmpResult, arg2, arg0, num);
  if (obj.isThenable(tmp)) {
    let resolvedSyncPromiseResult = tmp;
  } else {
    resolvedSyncPromiseResult = tmpResult(arg6[1]).resolvedSyncPromise(tmp);
    const obj2 = tmpResult(arg6[1]);
  }
  return resolvedSyncPromiseResult;
};
