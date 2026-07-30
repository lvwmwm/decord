// Module ID: 504
// Function ID: 505
// Name: idGenerator
// Dependencies: [505, 510, 513, 514, 530, 589, 2]
// Exports: analyticsTrackingStoreMaker

// Module 504 (idGenerator)
import sum from "sum";

let c3;
let c4;
({ TelemetryEndpoints: c3, TelemetryEvents: c4 } = sum);
let c5 = "x-science-test";
let c6 = 3600000;
let c7 = 60000;
let c8 = 3600000;
let c9 = 1500;
let c10 = 0;
let c11 = 0;
let c12 = 0;
let c13 = 0;
let c14 = 0;
let c15 = null;
let c16 = 0;
let c18 = 0;
let c19 = 0;
let c20 = null;
let c21 = false;
let c22 = null;
let c23 = null;
let fn = window.requestIdleCallback;
if (fn == null) {
  fn = (arg0) => {
    let closure_0 = arg0;
    return setImmediate(() => callback());
  };
}
const idGenerator = new require("generate").IdGenerator();
let obj = {
  handleConnectionOpen() {

  },
  handleConnectionClosed() {

  },
  handleFingerprint() {

  },
  handleTrack() {

  },
  handleSetAnalyticsToken(arg0) {

  }
};
let closure_29 = [];
let c30 = null;
function defaultGetSessionId() {
  return Promise.resolve({ sessionId: "Array" });
}
let result = require("extractId").fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsTrackingStore.tsx");

export const AnalyticsActionHandlers = obj;
export const analyticsTrackingStoreMaker = (getLaunchSignature) => {
  let actionHandler;
  let closure_3;
  let dependencyMap;
  let dispatcher;
  let drainTimeoutOverride;
  let getSessionId;
  let require;
  let scheduleWhenIdle;
  ({ dispatcher, actionHandler, getFingerprint: require, getSessionId } = getLaunchSignature);
  if (getSessionId === undefined) {
    getSessionId = defaultGetSessionId;
  }
  ({ TRACKING_URL: dependencyMap, drainTimeoutOverride, waitFor: closure_3, scheduleWhenIdle } = getLaunchSignature);
  if (scheduleWhenIdle === undefined) {
    scheduleWhenIdle = fn;
  }
  const X = getLaunchSignature.getLaunchSignature;
  if (X === undefined) {
    class X {
      constructor() {
        return null;
      }
    }
  }
  let closure_5 = X;
  const submitEvents = getLaunchSignature.submitEvents;
  function scheduleDrain(shouldFlushOnNextTick) {
    let flag = shouldFlushOnNextTick.shouldFlushOnNextTick;
    if (flag === undefined) {
      flag = false;
    }
    let tmp = null == outer1_30;
    if (tmp) {
      if (0 === outer1_29.length) {
        tmp = tmp3;
      } else if (null != outer1_25) {
        let tmp6 = null != outer1_24;
      } else {
        tmp6 = null != callback();
      }
    }
    if (tmp) {
      if (flag) {
        const _setTimeout = setTimeout;
        let timerId = setTimeout(drainEventsQueue, 0);
      } else {
        const obj = { timeout: null };
        obj[0] = drainTimeoutOverride;
        timerId = scheduleWhenIdle(drainEventsQueue, obj);
      }
      outer1_30 = timerId;
    }
  }
  function drainEventsQueue() {
    const outer1_30 = null;
    if (0 === outer1_29.length) {
      if (tmp) {
        const substr = outer1_29.slice();
        outer1_29 = [];
        outer1_16 = outer1_16 + 1;
        let num2 = substr.length;
        const _Math = Math;
        outer1_17 = Math.min(outer1_17, num2);
        const _Math2 = Math;
        outer1_18 = Math.max(outer1_18, num2);
        if (num2 === undefined) {
          num2 = 1;
        }
        outer1_19 = outer1_19 + num2;
        const promise = drainTimeoutOverride(substr);
        promise.then(() => {
          const item = substr.forEach((resolve) => {
            resolve = resolve.resolve;
            if (resolve != null) {
              resolve();
            }
          });
          outer1_12 = outer1_12 + 1;
        }, (body) => {
          const items = [...substr];
          outer1_29.unshift.apply(items);
          outer1_13 = outer1_13 + 1;
        });
        return promise;
      } else {
        return Promise.resolve();
      }
    } else if (null != outer1_25) {
      let tmp4 = null != outer1_24;
    } else {
      tmp4 = null != substr();
    }
  }
  drainTimeoutOverride = function submitEventsImmediately(existingEvents) {
    let closure_0 = Date.now();
    const mapped = existingEvents.map((properties) => {
      let obj = {};
      const merged = Object.assign(properties);
      obj = {};
      const merged1 = Object.assign(properties.properties);
      obj.client_send_timestamp = closure_0;
      obj.properties = obj;
      return obj;
    });
    if (null != submitEvents) {
      return tmp2(mapped, outer1_24);
    } else {
      let tmp3 = arg1;
      if (arg1 == null) {
        tmp3 = closure_2;
      }
      let obj = {};
      if (!outer1_21) {
        const v4Result = outer1_0(outer1_2[3]).v4();
        const outer1_23 = v4Result;
        obj[closure_5] = v4Result;
        outer1_21 = true;
        const obj2 = outer1_0(outer1_2[3]);
      }
      const HTTP = outer1_0(outer1_2[4]).HTTP;
      obj = { url: null, headers: null, body: null, retries: 3, rejectWithError: false };
      obj[0] = tmp3;
      obj[1] = obj;
      obj = { token: null, events: null };
      obj[0] = outer1_24;
      obj[1] = mapped;
      obj[2] = obj;
      return HTTP.post(obj).then((headers) => {
        if (obj[outer1_5]) {
          let tmp3;
          if (headers != null) {
            headers = headers.headers;
            if (headers != null) {
              tmp3 = headers[tmp];
            }
          }
          if (tmp3 == null) {
            tmp3 = null;
          }
          const outer1_22 = tmp3;
        }
        return headers;
      });
    }
  };
  function sendTelemetryEvent() {
    let obj = { type: scheduleWhenIdle.CLIENT_TELEMETRY, properties: null };
    obj = { client_track_timestamp: Date.now(), rpc_success_count: outer1_12, rpc_failure_count: outer1_13, first_seen_event_sequence_number: outer1_14, last_seen_event_sequence_number: sendTelemetryEvent, telemetry_period_start_timestamp: outer1_15, telemetry_period_end_timestamp: Date.now(), event_queue_rejection_count: AnalyticsTrackingStore, event_queue_batch_count: outer1_16, event_queue_batch_min_size: null, event_queue_batch_max_size: null, event_queue_batch_avg_size: null, science_request_id: null, science_response: null, launch_signature: null };
    let num = 0;
    if (outer1_17 !== Number.MAX_SAFE_INTEGER) {
      num = outer1_17;
    }
    obj[9] = num;
    obj[10] = outer1_18;
    let num2 = 0;
    if (outer1_16 > 0) {
      num2 = outer1_19 / tmp;
    }
    obj[11] = num2;
    obj[12] = outer1_23;
    obj[13] = outer1_22;
    obj[14] = X();
    obj[1] = obj;
    AnalyticsTrackingStore = 0;
    outer1_12 = 0;
    outer1_13 = 0;
    outer1_16 = 0;
    outer1_17 = Number.MAX_SAFE_INTEGER;
    outer1_18 = 0;
    outer1_19 = 0;
    outer1_15 = Date.now();
    outer1_14 = sendTelemetryEvent;
    const items = [obj];
    return drainTimeoutOverride(items, outer1_3.CLIENT_TELEMETRY);
  }
  if (drainTimeoutOverride == null) {
    class X {
      constructor() {
        return null;
      }
    }
  }
  obj.handleConnectionOpen = (arg0) => {
    let analyticsToken;
    let user;
    ({ analyticsToken, user } = arg0);
    if (null != analyticsToken) {
      const outer1_24 = analyticsToken;
    }
    if (null != user.id) {
      const outer1_25 = user.id;
    }
    if (null == outer1_20) {
      const _Math = Math;
      const _Math2 = Math;
      function scheduleNextHeartbeat() {

      }
      const obj = { type: "timeout", id: null };
      const _setTimeout = setTimeout;
      obj[1] = setTimeout(() => {
        outer1_10();
        if (typeof scheduleNextHeartbeat !== "find") {
          HermesBuiltin.throwTypeError();
        }
        const result = 0.1 * submitEvents;
        const outer2_20 = {
          type: "timeout",
          id: setTimeout(() => {
            outer1_10();
            if (typeof closure_0 !== "find") {
              HermesBuiltin.throwTypeError();
            }
            let result = 0.1 * outer2_6;
            outer2_20 = {
              type: "timeout",
              id: setTimeout(() => {
                outer1_10();
                if (typeof closure_0 !== "find") {
                  HermesBuiltin.throwTypeError();
                }
                let result = 0.1 * outer2_6;
                outer2_20 = { type: "timeout", id: setTimeout(() => { ... }, Math.max(outer2_6 + (Math.floor(Math.random() * result * 2) - result), outer2_7)) };
              }, Math.max(outer2_6 + (Math.floor(Math.random() * result * 2) - result), outer2_7))
            };
          }, Math.max(submitEvents + (Math.floor(Math.random() * result * 2) - result), scheduleDrain))
        };
      }, Math.floor(Math.random() * (drainEventsQueue - scheduleDrain) + scheduleDrain));
      outer1_20 = obj;
    }
    scheduleDrain({ shouldFlushOnNextTick: false });
    return false;
  };
  obj.handleConnectionClosed = () => {
    drainEventsQueue();
    if (null == outer1_20) {
      const outer1_24 = null;
      const outer1_25 = null;
      return false;
    } else {
      const type = outer1_20.type;
      if ("timeout" === type) {
        const _clearTimeout = clearTimeout;
        clearTimeout(outer1_20.id);
        outer1_20 = null;
      } else if ("interval" !== type) {
        const type2 = outer1_20.type;
      }
      const _clearInterval = clearInterval;
      clearInterval(outer1_20.id);
    }
  };
  obj.handleFingerprint = () => {
    drainEventsQueue();
    return false;
  };
  obj.handleTrack = (arg0) => {
    let closure_0;
    let closure_2;
    let closure_3;
    let getSessionId;
    let scheduleWhenIdle;
    ({ event: closure_0, properties: getSessionId, flush: closure_2, fingerprint: closure_3, resolve: scheduleWhenIdle } = arg0);
    getSessionId().then((client_heartbeat_session_id) => {
      let obj = { type: closure_0, fingerprint: closure_3, properties: null, resolve: null };
      obj = { client_track_timestamp: Date.now(), client_heartbeat_session_id: client_heartbeat_session_id.sessionId, event_sequence_number: sum };
      sum = sendTelemetryEvent + 1;
      sendTelemetryEvent = sum;
      const merged = Object.assign(closure_1);
      obj[2] = obj;
      obj[3] = closure_4;
      if (null != outer2_25) {
        let extractIdResult = outer2_25;
      } else {
        let fingerprint = obj.fingerprint;
        if (fingerprint == null) {
          fingerprint = outer1_0();
        }
        extractIdResult = null;
        if (null != fingerprint) {
          extractIdResult = outer2_0(outer2_2[2]).extractId(fingerprint);
          const obj3 = outer2_0(outer2_2[2]);
        }
      }
      if (null != extractIdResult) {
        obj.properties.client_uuid = outer2_27.generate(extractIdResult);
      }
      outer2_29.push(obj);
      if (outer2_29.length > 10000) {
        AnalyticsTrackingStore = AnalyticsTrackingStore + (outer2_29.length - 10000);
        outer2_29 = outer2_29.slice(-10000);
      }
      outer1_7(closure_2 ? { shouldFlushOnNextTick: true } : { shouldFlushOnNextTick: false });
    });
    return false;
  };
  obj.handleSetAnalyticsToken = (analyticsToken) => {
    analyticsToken = analyticsToken.analyticsToken;
    let tmp = null == outer1_24;
    if (tmp) {
      tmp = null != analyticsToken;
    }
    if (tmp) {
      outer1_24 = analyticsToken;
      const outer1_25 = analyticsToken.userId;
      scheduleDrain({ shouldFlushOnNextTick: false });
    }
    return false;
  };
  const Store = getSessionId(589).Store;
  class AnalyticsTrackingStore extends Store {
    constructor() {
      applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
      applyArgumentsResult.submitEventsImmediately = c9;
      return applyArgumentsResult;
    }
  }
  AnalyticsTrackingStore.prototype["initialize"] = function initialize() {
    if (null != closure_3) {
      const self = this;
      const waitFor = this.waitFor;
      const items = [];
      HermesBuiltin.arraySpread(tmp, 0);
      const self2 = this;
      HermesBuiltin.apply(items, this);
    }
  };
  AnalyticsTrackingStore.displayName = "AnalyticsTrackingStore";
  return new AnalyticsTrackingStore(dispatcher, actionHandler);
};
