// Module ID: 872
// Function ID: 9694
// Name: MIN_DELAY
// Dependencies: [5, 800, 801, 840, 855]
// Exports: makeOfflineTransport

// Module 872 (MIN_DELAY)
import asyncGeneratorStep from "asyncGeneratorStep";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const MIN_DELAY = 100;
export const START_DELAY = 5000;
export function makeOfflineTransport(arg0) {
  let closure_0 = arg0;
  function log() {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    if (callback(log[1]).DEBUG_BUILD) {
      const debug = callback(log[2]).debug;
      log = debug.log;
      const items = ["[Offline]:"];
      log.apply(debug, items.concat(array));
    }
  }
  return (createStore) => {
    const callback = createStore;
    function flushIn(arg0) {
      if (timerId) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timerId);
      }
      timerId = setTimeout(outer2_2(async () => {
        let timerId;
        const tmp = yield outer2_3.shift();
        if (tmp) {
          callback("Attempting to send previously queued event");
          const _Date = Date;
          const date = new Date();
          tmp[0].sent_at = date.toISOString();
          outer2_7(tmp, true).catch((arg0) => {
            callback("Failed to retry sending", arg0);
          });
          const promise = outer2_7(tmp, true);
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
        if (obj.envelopeContainsItemType(arg0, ["replay_event", "replay_recording"])) {
          yield outer2_3.push(arg0);
          outer2_5(100);
          return {};
        }
        obj = callback(log[3]);
      }
      if (outer2_0.shouldSend) {
        if (false === (yield outer2_0.shouldSend(arg0))) {
          const _Error = Error;
          const error = new Error("Envelope not sent because `shouldSend` callback returned false");
          throw error;
        }
      }
      const tmp12 = yield outer2_1.send(arg0);
      const response = tmp12;
      let num3 = 100;
      if (tmp12) {
        const headers = response.headers;
        if (null != headers) {
          if (headers["retry-after"]) {
            num3 = callback(log[4]).parseRetryAfterHeader(response.headers["retry-after"]);
            const obj2 = callback(log[4]);
          }
        }
        const headers2 = response.headers;
        if (null != headers2) {
          if (headers2["x-sentry-rate-limits"]) {
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
      outer2_5(num3);
      const outer2_4 = 5000;
      return tmp12;
    }
    let closure_1 = callback(createStore);
    if (createStore.createStore) {
      let closure_3 = createStore.createStore(createStore);
      let c4 = 5000;
      if (createStore.flushAtStartup) {
        flushWithBackOff();
      }
      let obj = {
        send,
        flush(arg0) {
            if (undefined === arg0) {
              let c4 = 5000;
              flushIn(100);
            }
            return closure_1.flush(arg0);
          }
      };
      return obj;
    } else {
      let _Error = Error;
      let error = new Error("No `createStore` function was provided");
      throw error;
    }
  };
}
