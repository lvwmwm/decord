// Module ID: 7281
// Function ID: 58692
// Name: notifyEventProcessors
// Dependencies: []

// Module 7281 (notifyEventProcessors)
function notifyEventProcessors(arg0, arg1, arg2) {
  arg1 = arg0;
  const arg6 = arg1;
  const notifyEventProcessors = arg2;
  let num = 0;
  if (arguments.length > 3) {
    num = 0;
    if (undefined !== arguments[3]) {
      num = arguments[3];
    }
  }
  return new arg1(arg6[0]).SyncPromise((arg0, arg1) => {
    if (null !== arg1) {
      if ("function" === typeof tmp) {
        const _Object = Object;
        const tmpResult = tmp(Object.assign({}, arg1), arg2);
        if (tmp2) {
          const logger = arg0(arg1[2]).logger;
          const _HermesInternal = HermesInternal;
          logger.log("Event processor \"" + tmp.id + "\" dropped event");
        }
        const tmp2 = arg0(arg1[1]).DEBUG_BUILD && tmp.id && null === tmpResult;
        if (obj.isThenable(tmpResult)) {
          tmpResult.then((arg0) => callback(arg0, arg0, callback, closure_3 + 1).then(arg0)).then(null, arg1);
          const nextPromise = tmpResult.then((arg0) => callback(arg0, arg0, callback, closure_3 + 1).then(arg0));
        } else {
          const promise = arg2(arg0, tmpResult, arg2, num + 1);
          arg2(arg0, tmpResult, arg2, num + 1).then(arg0).then(null, arg1);
          const nextPromise2 = arg2(arg0, tmpResult, arg2, num + 1).then(arg0);
        }
        const obj = arg0(arg1[3]);
      }
    }
    arg0(arg1);
  });
}
arg5.notifyEventProcessors = notifyEventProcessors;
