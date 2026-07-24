// Module ID: 16668
// Function ID: 129917
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 15950, 4044, 7541, 1194, 1348, 1838, 3, 3988, 10359, 16139, 686, 6916, 1554, 675, 5588, 7540, 4138, 14450, 1284, 2]

// Module 16668 (_createForOfIteratorHelperLoose)
import importDefaultResult from "_isNativeReflectConstruct";
import { applicationReady } from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult1 from "shouldWaitForBlockingModals";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function sendReply(success, message, arg2) {
  const merged = Object.assign(arg2);
  const json = JSON.stringify({ type: "response", status: success, message });
  importDefault(3988).logToDevice(json);
}
function sendStatus(message) {
  importDefaultResult1.log(message);
  const json = JSON.stringify({ type: "status", message });
  importDefault(3988).logToDevice(json);
}
function getErrorDetails(arr) {
  let done2;
  if (null != arr) {
    if ("object" === typeof arr) {
      const _Set = Set;
      const set = new Set();
      let prototypeOf = arr;
      if (null != arr) {
        do {
          let tmp = _createForOfIteratorHelperLoose;
          let _Object = Object;
          let tmp2 = _createForOfIteratorHelperLoose(Object.getOwnPropertyNames(prototypeOf));
          let iter = tmp2();
          let tmp3 = prototypeOf;
          if (!iter.done) {
            do {
              let addResult = set.add(iter.value);
              let iter2 = tmp2();
              iter = iter2;
              done = iter2.done;
            } while (!done);
          }
          let _Object2 = Object;
          prototypeOf = Object.getPrototypeOf(prototypeOf);
        } while (null != prototypeOf);
      }
      const obj = {};
      const tmp7 = _createForOfIteratorHelperLoose(set);
      let iter3 = tmp7();
      if (!iter3.done) {
        do {
          let value = iter3.value;
          obj[value] = arr[value];
          let iter4 = tmp7();
          iter3 = iter4;
          done2 = iter4.done;
        } while (!done2);
      }
      return obj;
    }
  }
  return arr;
}
function setupTTITest() {
  return _setupTTITest(...arguments);
}
function _setupTTITest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = importDefaultResult(tmp);
  return obj(...arguments);
}
function apiLogin() {
  return _apiLogin(...arguments);
}
function _apiLogin() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = importDefaultResult(tmp);
  return obj(...arguments);
}
function subscribeOnce(subscribe) {
  let closure_0 = subscribe;
  let closure_1 = arg1;
  let closure_2 = arg2;
  function handler(arg0) {
    subscribe.unsubscribe(closure_1, handler);
    return callback(arg0);
  }
  return subscribe.subscribe(arg1, handler);
}
require("shouldWaitForBlockingModals").addPostConnectionCallback;
importDefaultResult1 = new importDefaultResult1("TTITestAction");
let obj = {
  "setup-test": setupTTITest,
  ping() {
    const json = JSON.stringify({ type: "pong" });
    importDefault(3988).logToDevice(json);
  },
  () => {
    const result = require(10359) /* formatString */.resetComponentProfiler();
    sendReply("success", "reset-component-profiler");
  },
  () => {
    const result = require(10359) /* formatString */.pauseComponentProfiler();
    sendReply("success", "pause-component-profiler");
  },
  () => {
    const result = require(10359) /* formatString */.resumeComponentProfiler();
    sendReply("success", "resume-component-profiler");
  },
  () => {
    const obj = { stats: require(10359) /* formatString */.dumpStats() };
    sendReply("success", "dump-component-profiler-stats", obj);
  },
  () => {
    const obj = {};
    let report;
    if (null != importDefault(16139)) {
      report = importDefault(16139).requestReport();
      const obj2 = importDefault(16139);
    }
    obj.report = report;
    sendReply("success", "dump-jank-stats", obj);
  },
  (multiplier) => {
    if (null != importDefault(16139)) {
      const result = importDefault(16139).setJankHeuristicMultiplier(multiplier.multiplier);
      const obj = importDefault(16139);
    }
    sendReply("success", "set-jank-multiplier");
  },
  () => {
    if (null != importDefault(16139)) {
      importDefault(16139).startTracking();
      const obj = importDefault(16139);
    }
    sendReply("success", "start-jank-stats");
  },
  (action) => {
    importDefault(686).dispatch(action.action);
    sendReply("success", "flux-dispatch");
  },
  () => {
    sendReply("success", "get-token", { token: token.getToken() });
  },
  "get-resource-usage": fn
};
fn = () => {
  const obj = { cumulativeCPU: importDefault(6916).getCumulativeCPUUsage() };
  const obj2 = importDefault(6916);
  obj.currentMemoryUsage = importDefault(6916).getCurrentMemoryUsageKB();
  sendReply("success", "get-resource-usage", obj);
};
// CreateGeneratorClosureLongIndex (0x67)
let closure_10 = importDefaultResult(fn);
obj.backchannel = function() {
  return callback(...arguments);
};
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/headless_tasks/android/TTITestAction.tsx");

export default (() => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = importDefaultResult(tmp);
  return function(arg0) {
    return callback(...arguments);
  };
})();
