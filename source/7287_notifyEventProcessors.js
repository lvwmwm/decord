// Module ID: 7287
// Function ID: 58778
// Name: notifyEventProcessors
// Dependencies: [7260, 7264, 7236, 7243]

// Module 7287 (notifyEventProcessors)
const require = arg1;
let dependencyMap = arg6;
function notifyEventProcessors(arg0, arg1, arg2) {
  const _require = arg0;
  let dependencyMap = arg1;
  let closure_2 = arg2;
  let num = 0;
  if (arguments.length > 3) {
    num = 0;
    if (undefined !== arguments[3]) {
      num = arguments[3];
    }
  }
  return new _require(7260).SyncPromise((arg0, arg1) => {
    const dependencyMap = arg0;
    if (null !== dependencyMap2) {
      if ("function" === typeof tmp) {
        const _Object = Object;
        const tmpResult = tmp(Object.assign({}, dependencyMap2), callback);
        if (tmp2) {
          const logger = dependencyMap(7236).logger;
          const _HermesInternal = HermesInternal;
          logger.log("Event processor \"" + tmp.id + "\" dropped event");
        }
        tmp2 = dependencyMap(7264).DEBUG_BUILD && tmp.id && null === tmpResult;
        if (obj.isThenable(tmpResult)) {
          tmpResult.then((arg0) => callback(closure_0, arg0, outer1_2, outer1_3 + 1).then(closure_0)).then(null, arg1);
          const nextPromise = tmpResult.then((arg0) => callback(closure_0, arg0, outer1_2, outer1_3 + 1).then(closure_0));
        } else {
          const promise = callback(dependencyMap, tmpResult, callback, num + 1);
          callback(dependencyMap, tmpResult, callback, num + 1).then(arg0).then(null, arg1);
          const nextPromise2 = callback(dependencyMap, tmpResult, callback, num + 1).then(arg0);
        }
        obj = dependencyMap(7243);
      }
    }
    arg0(dependencyMap2);
  });
}
arg5.notifyEventProcessors = notifyEventProcessors;
