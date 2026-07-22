// Module ID: 16504
// Function ID: 127419
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 16504 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  importDefault(dependencyMap[8]).logToDevice(json);
}
function sendStatus(message) {
  importDefaultResult1.log(message);
  const json = JSON.stringify({ type: "status", message });
  importDefault(dependencyMap[8]).logToDevice(json);
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
          let tmp = closure_13;
          let _Object = Object;
          let tmp2 = closure_13(Object.getOwnPropertyNames(prototypeOf));
          let iter = tmp2();
          let tmp3 = prototypeOf;
          if (!iter.done) {
            do {
              let addResult = set.add(iter.value);
              let iter2 = tmp2();
              iter = iter2;
              let done = iter2.done;
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
  const _setupTTITest = obj;
  return obj(...arguments);
}
function apiLogin() {
  return _apiLogin(...arguments);
}
function _apiLogin() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = importDefaultResult(tmp);
  const _apiLogin = obj;
  return obj(...arguments);
}
function subscribeOnce(subscribe) {
  const arg1 = subscribe;
  const importDefault = arg1;
  const dependencyMap = arg2;
  function handler(arg0) {
    arg0.unsubscribe(arg1, handler);
    return arg2(arg0);
  }
  return subscribe.subscribe(arg1, handler);
}
const importDefaultResult = importDefault(dependencyMap[0]);
const applicationReady = arg1(dependencyMap[1]).applicationReady;
let closure_5 = importDefault(dependencyMap[2]);
arg1(dependencyMap[3]).addPostConnectionCallback;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let importDefaultResult1 = importDefault(dependencyMap[7]);
importDefaultResult1 = new importDefaultResult1("TTITestAction");
const obj = {
  setup-test: setupTTITest,
  ping() {
    const json = JSON.stringify({ type: "pong" });
    importDefault(dependencyMap[8]).logToDevice(json);
  },
  () => {
    const result = arg1(dependencyMap[9]).resetComponentProfiler();
    sendReply("success", "reset-component-profiler");
  },
  () => {
    const result = arg1(dependencyMap[9]).pauseComponentProfiler();
    sendReply("success", "pause-component-profiler");
  },
  () => {
    const result = arg1(dependencyMap[9]).resumeComponentProfiler();
    sendReply("success", "resume-component-profiler");
  },
  () => {
    const obj = { stats: arg1(dependencyMap[9]).dumpStats() };
    sendReply("success", "dump-component-profiler-stats", obj);
  },
  () => {
    const obj = {};
    let report;
    if (null != importDefault(dependencyMap[10])) {
      report = importDefault(dependencyMap[10]).requestReport();
      const obj2 = importDefault(dependencyMap[10]);
    }
    obj.report = report;
    sendReply("success", "dump-jank-stats", obj);
  },
  (multiplier) => {
    if (null != importDefault(dependencyMap[10])) {
      const result = importDefault(dependencyMap[10]).setJankHeuristicMultiplier(multiplier.multiplier);
      const obj = importDefault(dependencyMap[10]);
    }
    sendReply("success", "set-jank-multiplier");
  },
  () => {
    if (null != importDefault(dependencyMap[10])) {
      importDefault(dependencyMap[10]).startTracking();
      const obj = importDefault(dependencyMap[10]);
    }
    sendReply("success", "start-jank-stats");
  },
  (action) => {
    importDefault(dependencyMap[11]).dispatch(action.action);
    sendReply("success", "flux-dispatch");
  },
  () => {
    sendReply("success", "get-token", { token: token.getToken() });
  },
  get-resource-usage: fn
};
const fn = () => {
  const obj = { cumulativeCPU: importDefault(dependencyMap[12]).getCumulativeCPUUsage() };
  const obj2 = importDefault(dependencyMap[12]);
  obj.currentMemoryUsage = importDefault(dependencyMap[12]).getCurrentMemoryUsageKB();
  sendReply("success", "get-resource-usage", obj);
};
// CreateGeneratorClosureLongIndex (0x67)
let closure_10 = importDefaultResult(fn);
obj.backchannel = function() {
  return callback(...arguments);
};
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/headless_tasks/android/TTITestAction.tsx");

export default () => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = importDefaultResult(tmp);
  return function(arg0) {
    return callback(...arguments);
  };
}();
