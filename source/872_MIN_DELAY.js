// Module ID: 872
// Function ID: 9688
// Name: MIN_DELAY
// Dependencies: []
// Exports: makeOfflineTransport

// Module 872 (MIN_DELAY)
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const MIN_DELAY = 100;
export const START_DELAY = 5000;
export function makeOfflineTransport(arg0) {
  const require = arg0;
  function log() {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    if (arg0(log[1]).DEBUG_BUILD) {
      const debug = arg0(log[2]).debug;
      const log = debug.log;
      const items = [null];
      log.apply(debug, items.concat(array));
    }
  }
  return (createStore) => {
    function flushIn(arg0) {
      if (timerId) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timerId);
      }
      const timerId = setTimeout(timerId(async () => {
        let closure_2;
        const tmp = yield closure_3.shift();
        if (tmp) {
          callback("Attempting to send previously queued event");
          const _Date = Date;
          const date = new Date();
          tmp[0].sent_at = date.toISOString();
          callback2(tmp, true).catch((arg0) => {
            callback("Failed to retry sending", arg0);
          });
          const promise = callback2(tmp, true);
        }
      }), arg0);
      let unref = "number" !== typeof timerId;
      if (unref) {
        unref = timerId.unref;
      }
      if (unref) {
        timerId.unref();
      }
    }
    function flushWithBackOff() {
      if (!closure_2) {
        flushIn(closure_4);
        const _Math = Math;
        closure_4 = Math.min(2 * closure_4, 3600000);
      }
    }
    function send(arg0) {
      return _send(...arguments);
    }
    async function _send(arg0, arg1) {
      if (!tmp) {
        if (obj.envelopeContainsItemType(arg0, [null, null])) {
          yield closure_3.push(arg0);
          callback(100);
          return {};
        }
        const obj = lib(closure_1[3]);
      }
      if (lib.shouldSend) {
        if (false === yield closure_0.shouldSend(arg0)) {
          const _Error = Error;
          const error = new Error("Envelope not sent because `shouldSend` callback returned false");
          throw error;
        }
      }
      const tmp12 = yield closure_1.send(arg0);
      const response = tmp12;
      let num3 = 100;
      if (tmp12) {
        const headers = response.headers;
        if (null != headers) {
          if (headers.retry-after) {
            num3 = lib(closure_1[4]).parseRetryAfterHeader(response.headers.retry-after);
            const obj2 = lib(closure_1[4]);
          }
        }
        const headers2 = response.headers;
        if (null != headers2) {
          if (headers2.x-sentry-rate-limits) {
            num3 = 60000;
          }
        }
        const statusCode = response.statusCode;
        let num4 = statusCode;
        if (!statusCode) {
          num4 = 0;
        }
        if (num4 >= 400) {
          return response;
        }
      }
      callback(num3);
      let closure_4 = 5000;
      return tmp12;
    }
    let closure_1 = createStore(createStore);
    if (createStore.createStore) {
      let closure_3 = createStore.createStore(createStore);
      let closure_4 = 5000;
      if (createStore.flushAtStartup) {
        flushWithBackOff();
      }
      const obj = {
        send,
        flush(arg0) {
            if (undefined === arg0) {
              let closure_4 = 5000;
              flushIn(100);
            }
            return closure_1.flush(arg0);
          }
      };
      return obj;
    } else {
      const _Error = Error;
      const error = new Error("No `createStore` function was provided");
      throw error;
    }
  };
}
