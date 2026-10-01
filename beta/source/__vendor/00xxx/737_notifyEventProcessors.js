// Module ID: 737
// Function ID: 738
// Name: notifyEventProcessors
// Dependencies: [692, 738, 688, 689]
// Exports: notifyEventProcessors

// Module 737 (notifyEventProcessors)
import _mod688 from "module_688" /* 688 */;
import _mod692 from "module_692" /* 692 */;
import SyncPromise from "SyncPromise" /* 738 */;

const require = globalThis.__r;
let _require, closure_0, closure_1, dependencyMap;

function _notifyEventProcessors(tmp15Result, arg1, arg2, arg3) {
  let closure_2;
  const f71928 = (result) => {
    const sum = closure_2 + 1;
    let tmp5 = result;
    if (tmp5) {
      tmp5 = result;
      if (closure_1[sum]) {
        let nextPromise;
        const obj = {};
        const merged = Object.assign(result);
        const tmp4Result = closure_1[sum](obj, closure_0);
        const DEBUG_BUILD = _mod688.DEBUG_BUILD && null === tmp4Result;
        if (DEBUG_BUILD) {
          const debug = tmp9(689).debug;
          let str = tmp4.id;
          const log = debug.log;
          if (!str) {
            str = "?";
          }
          const _HermesInternal = HermesInternal;
          log("Event processor \"" + str + "\" dropped event");
        }
        const tmp9Result = _mod692;
        if (tmp9Result.isThenable(tmp4Result)) {
          nextPromise = tmp4Result.then(f71928);
        } else {
          const sum1 = sum + 1;
          closure_0 = tmp;
          closure_1 = tmp2;
          nextPromise = tmp4Result;
          if (nextPromise) {
            nextPromise = tmp4Result;
            if (closure_1[sum1]) {
              let nextPromise1;
              const obj2 = {};
              const merged1 = Object.assign(tmp4Result);
              const tmp15Result = closure_1[sum1](obj2, closure_0);
              const DEBUG_BUILD2 = tmp9(688).DEBUG_BUILD && null === tmp15Result;
              if (DEBUG_BUILD2) {
                const debug2 = tmp9(689).debug;
                let str4 = tmp15.id;
                const log2 = debug2.log;
                if (!str4) {
                  str4 = "?";
                }
                const _HermesInternal2 = HermesInternal;
                log2("Event processor \"" + str4 + "\" dropped event");
              }
              const tmp9Result2 = _mod692;
              if (tmp9Result2.isThenable(tmp15Result)) {
                nextPromise1 = tmp15Result.then(f71928);
              } else {
                nextPromise1 = _notifyEventProcessors(tmp15Result, tmp, tmp2, sum1 + 1);
              }
              nextPromise = nextPromise1;
            }
          }
        }
        tmp5 = nextPromise;
      }
    }
    return tmp5;
  };
  _require = arg1;
  dependencyMap = arg2;
  _notifyEventProcessors = arg3;
  const tmp = arg2[arg3];
  if (tmp15Result) {
    if (tmp) {
      let nextPromise;
      let obj = {};
      const tmp2 = obj;
      let merged = Object.assign(tmp15Result);
      const tmpResult = tmp(obj, arg1);
      let tmp5 = _require;
      let DEBUG_BUILD = require("module_688").DEBUG_BUILD;
      if (DEBUG_BUILD) {
        DEBUG_BUILD = null === tmpResult;
      }
      if (DEBUG_BUILD) {
        let debug = tmp5(689).debug;
        let str = tmp.id;
        let log = debug.log;
        if (!str) {
          str = "?";
        }
        let _HermesInternal = HermesInternal;
        log("Event processor \"" + str + "\" dropped event");
      }
      const tmp5Result = tmp5(692);
      if (tmp5Result.isThenable(tmpResult)) {
        nextPromise = tmpResult.then(f71928);
      } else {
        nextPromise = _notifyEventProcessors(tmpResult, arg1, arg2, arg3 + 1);
      }
      return nextPromise;
    }
  }
  return tmp15Result;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const notifyEventProcessors = function notifyEventProcessors(arg0, tmp15Result, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  try {
    let resolvedSyncPromiseResult;
    const tmp6 = _notifyEventProcessors(tmp15Result, arg2, arg0, num);
    const obj = _mod692;
    const tmp7 = tmp6;
    const tmp9 = require;
    if (obj.isThenable(tmp6)) {
      resolvedSyncPromiseResult = tmp6;
    } else {
      const tmp9Result = tmp9(738);
      resolvedSyncPromiseResult = tmp9Result.resolvedSyncPromise(tmp7);
    }
    return resolvedSyncPromiseResult;
  } catch (tmp16) {
    const obj3 = SyncPromise;
    return obj3.rejectedSyncPromise(tmp16);
  }
};
