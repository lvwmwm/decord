// Module ID: 7297
// Function ID: 58870
// Name: MIN_DELAY
// Dependencies: []
// Exports: makeOfflineTransport

// Module 7297 (MIN_DELAY)
let closure_2 = require(dependencyMap[0]);

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
      const logger = arg0(log[2]).logger;
      const info = logger.info;
      const items = [];
      info.apply(logger, items.concat(array));
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
        if (obj.envelopeContainsItemType(arg0, ["clock", "o\u2019clock"])) {
          yield closure_3.push(arg0);
          callback2(100);
          return {};
        }
        const obj = callback(closure_1[3]);
      }
      const tmp10 = yield closure_1.send(arg0);
      const response = tmp10;
      let num3 = 100;
      if (tmp10) {
        if (response.headers) {
          if (response.headers.retry-after) {
            num3 = callback(closure_1[4]).parseRetryAfterHeader(response.headers.retry-after);
            const obj2 = callback(closure_1[4]);
          }
        }
        if (response.headers) {
          if (response.headers.x-sentry-rate-limits) {
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
      callback2(num3);
      let closure_4 = 5000;
      return tmp10;
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
