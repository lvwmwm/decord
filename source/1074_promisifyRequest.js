// Module ID: 1074
// Function ID: 12313
// Name: promisifyRequest
// Dependencies: [5, 65, 794, 1004, 1008]
// Exports: makeBrowserOfflineTransport

// Module 1074 (promisifyRequest)
import asyncGeneratorStep from "asyncGeneratorStep";
import _toConsumableArray from "_toConsumableArray";

function promisifyRequest(allKeys) {
  let closure_0 = allKeys;
  return new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const fn = () => lib(lib.result);
    closure_0.onsuccess = fn;
    closure_0.oncomplete = fn;
    const fn2 = () => callback(lib.error);
    closure_0.onerror = fn2;
    closure_0.onabort = fn2;
  });
}
function createStore(arg0, arg1) {
  let closure_0 = arg1;
  const openResult = globalThis.indexedDB.open(arg0);
  const dependencyMap = openResult;
  openResult.onupgradeneeded = () => {
    const result = openResult.result;
    return result.createObjectStore(closure_0);
  };
  let closure_2 = promisifyRequest(openResult);
  return (arg0) => {
    let closure_0 = arg0;
    return promise.then((transaction) => callback(transaction.transaction(callback, "readwrite").objectStore(callback)));
  };
}
function keys(getAllKeys) {
  return promisifyRequest(getAllKeys.getAllKeys());
}
function _push(arg0, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  return arg0((arg0) => {
    let closure_0 = arg0;
    return outer1_6(arg0).then((arg0) => {
      if (arg0.length < outer1_1) {
        const _Math = Math;
        const _Math2 = Math;
        closure_0.put(closure_0, max.apply(Math, outer2_3(arg0).concat([0])) + 1);
        return outer2_4(closure_0.transaction);
      }
    });
  });
}
function _unshift(arg0, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  return arg0((arg0) => {
    let closure_0 = arg0;
    return outer1_6(arg0).then((arg0) => {
      if (arg0.length < outer1_1) {
        const _Math = Math;
        const _Math2 = Math;
        closure_0.put(closure_0, min.apply(Math, outer2_3(arg0).concat([0])) - 1);
        return outer2_4(closure_0.transaction);
      }
    });
  });
}
function _shift(arg0) {
  return arg0((arg0) => {
    let closure_0 = arg0;
    return outer1_6(arg0).then((arg0) => {
      const first = arg0[0];
      if (null != first) {
        return outer2_4(first.get(first)).then((arg0) => {
          let closure_0 = arg0;
          first.delete(closure_0);
          return outer3_4(first.transaction).then(() => closure_0);
        });
      }
    });
  });
}
function createIndexedDbStore(arg0) {
  let closure_0 = arg0;
  function getStore() {
    if (null == closure_1) {
      let str = closure_0.dbName;
      if (!str) {
        str = "sentry-offline";
      }
      closure_1 = getStore(str, closure_0.storeName || "queue");
      const tmp = getStore;
      const tmp4 = closure_0.storeName || "queue";
    }
    return closure_1;
  }
  let obj = {};
  let closure_4 = asyncGeneratorStep(async (arg0) => {
    const obj = callback(outer2_1[2]);
    const maxQueueSize = outer1_0.maxQueueSize;
    let num = maxQueueSize;
    const tmp = yield callback(outer2_1[2]).serializeEnvelope(arg0);
    const tmp2 = outer2_7;
    if (!maxQueueSize) {
      num = 30;
    }
    yield tmp2(outer1_5(), tmp, num);
  });
  obj.push = function push(arg0) {
    return callback3(...arguments);
  };
  let closure_3 = asyncGeneratorStep(async (arg0) => {
    const obj = callback(outer2_1[2]);
    const maxQueueSize = outer1_0.maxQueueSize;
    let num = maxQueueSize;
    const tmp = yield callback(outer2_1[2]).serializeEnvelope(arg0);
    const tmp2 = outer2_8;
    if (!maxQueueSize) {
      num = 30;
    }
    yield tmp2(outer1_5(), tmp, num);
  });
  obj.unshift = function unshift(arg0) {
    return callback2(...arguments);
  };
  asyncGeneratorStep = asyncGeneratorStep(async () => {
    const tmp = yield outer2_9(outer1_5());
    if (tmp) {
      return callback(outer2_1[2]).parseEnvelope(tmp);
    }
  });
  obj.shift = function shift(arg0) {
    return callback(...arguments);
  };
  return obj;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { createStore };
export const makeBrowserOfflineTransport = function makeBrowserOfflineTransport() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let makeFetchTransport = arguments[0];
    }
    return (function makeIndexedDbOfflineTransport(offlineTransport) {
      let closure_0 = offlineTransport;
      return (arg0) => {
        const tmp = offlineTransport(Object.assign({}, arg0, { createStore: outer2_10 }));
        offlineTransport = tmp;
        const WINDOW = outer2_0(outer2_1[3]).WINDOW;
        const listener = WINDOW.addEventListener("online", (() => {
          let closure_0 = outer3_2(async (arg0) => {
            yield closure_0.flush();
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })());
        return tmp;
      };
    })(require(794) /* registerSpanErrorInstrumentation */.makeOfflineTransport(makeFetchTransport));
  }
  makeFetchTransport = require(1008) /* makeFetchTransport */.makeFetchTransport;
};
export const push = _push;
export const shift = _shift;
export const unshift = _unshift;
