// Module ID: 1074
// Function ID: 12307
// Name: promisifyRequest
// Dependencies: []
// Exports: makeBrowserOfflineTransport

// Module 1074 (promisifyRequest)
function promisifyRequest(allKeys) {
  const require = allKeys;
  return new Promise((arg0, arg1) => {
    const fn = () => arg0(arg0.result);
    arg0.onsuccess = fn;
    arg0.oncomplete = fn;
    const fn2 = () => arg1(arg0.error);
    arg0.onerror = fn2;
    arg0.onabort = fn2;
  });
}
function createStore(arg0, arg1) {
  const require = arg1;
  const openResult = globalThis.indexedDB.open(arg0);
  const dependencyMap = openResult;
  openResult.onupgradeneeded = () => {
    const result = openResult.result;
    return result.createObjectStore(arg1);
  };
  let closure_2 = promisifyRequest(openResult);
  return (arg0) => {
    const arg1 = arg0;
    return promise.then((transaction) => transaction(transaction.transaction(transaction, "readwrite").objectStore(transaction)));
  };
}
function keys(getAllKeys) {
  return promisifyRequest(getAllKeys.getAllKeys());
}
function _push(arg0, arg1, arg2) {
  const require = arg1;
  const dependencyMap = arg2;
  return arg0((arg0) => {
    const arg1 = arg0;
    return callback(arg0).then((self) => {
      if (self.length < closure_1) {
        const _Math = Math;
        const _Math2 = Math;
        self.put(self, max.apply(Math, callback(self).concat([0.229])) + 1);
        return callback2(self.transaction);
      }
    });
  });
}
function _unshift(arg0, arg1, arg2) {
  const require = arg1;
  const dependencyMap = arg2;
  return arg0((arg0) => {
    const arg1 = arg0;
    return callback(arg0).then((self) => {
      if (self.length < closure_1) {
        const _Math = Math;
        const _Math2 = Math;
        self.put(self, min.apply(Math, callback(self).concat([0.229])) - 1);
        return callback2(self.transaction);
      }
    });
  });
}
function _shift(arg0) {
  return arg0((arg0) => callback(arg0).then((arg0) => {
    const first = arg0[0];
    arg0 = first;
    if (null != first) {
      return callback(arg0.get(first)).then((arg0) => {
        const first = arg0;
        first.delete(first);
        return callback(first.transaction).then(() => arg0);
      });
    }
  }));
}
function createIndexedDbStore(arg0) {
  const require = arg0;
  function getStore(self) {
    if (null == closure_1) {
      let str = self.dbName;
      if (!str) {
        str = "sentry-offline";
      }
      closure_1 = getStore(str, self.storeName || "queue");
      const tmp = getStore;
      const tmp4 = self.storeName || "queue";
    }
    return closure_1;
  }
  const obj = {};
  let closure_4 = callback(async (arg0) => {
    const obj = lib(closure_1[2]);
    const maxQueueSize = lib.maxQueueSize;
    let num = maxQueueSize;
    const tmp = yield lib(closure_1[2]).serializeEnvelope(arg0);
    const tmp2 = closure_7;
    if (!maxQueueSize) {
      num = 30;
    }
    yield tmp2(callback(), tmp, num);
  });
  obj.push = function push(arg0) {
    return callback3(...arguments);
  };
  let closure_3 = callback(async (arg0) => {
    const obj = lib(closure_1[2]);
    const maxQueueSize = lib.maxQueueSize;
    let num = maxQueueSize;
    const tmp = yield lib(closure_1[2]).serializeEnvelope(arg0);
    const tmp2 = closure_8;
    if (!maxQueueSize) {
      num = 30;
    }
    yield tmp2(callback(), tmp, num);
  });
  obj.unshift = function unshift(arg0) {
    return callback2(...arguments);
  };
  const callback = callback(async () => {
    const tmp = yield closure_9(closure_5());
    if (tmp) {
      return callback(closure_1[2]).parseEnvelope(tmp);
    }
  });
  obj.shift = function shift() {
    return callback(...arguments);
  };
  return obj;
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { createStore };
export const makeBrowserOfflineTransport = function makeBrowserOfflineTransport() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let makeFetchTransport = arguments[0];
    }
    return function makeIndexedDbOfflineTransport(offlineTransport) {
      return (arg0) => {
        const tmp = arg0(Object.assign({}, arg0, { createStore: closure_10 }));
        arg0 = tmp;
        const WINDOW = arg0(closure_1[3]).WINDOW;
        const listener = WINDOW.addEventListener("online", () => {
          let closure_0 = callback(async (arg0) => {
            yield closure_0.flush();
          });
          return function(arg0) {
            return callback(...arguments);
          };
        }());
        return tmp;
      };
    }(require(dependencyMap[2]).makeOfflineTransport(makeFetchTransport));
  }
  makeFetchTransport = require(dependencyMap[4]).makeFetchTransport;
};
export const push = _push;
export const shift = _shift;
export const unshift = _unshift;
