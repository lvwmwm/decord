// Module ID: 481
// Function ID: 6192
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 482, 487, 490, 491, 507, 566, 2]
// Exports: analyticsTrackingStoreMaker

// Module 481 (_isNativeReflectConstruct)
import getLowBits from "getLowBits";
import extractId from "extractId";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import sum from "sum";

let closure_10;
let closure_11;
let closure_12;
let closure_8;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function incrementMetric(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  return arg0 + num;
}
({ TelemetryEndpoints: closure_8, TelemetryEvents: closure_9 } = sum);
({ FREQUENCY: closure_10, MIN_DELAY: closure_11, MAX_DELAY: closure_12 } = { FREQUENCY: 3600000, MIN_DELAY: 60000, MAX_DELAY: 3600000 });
let c13 = 1500;
let c14 = 0;
let c15 = 0;
let c16 = 0;
let c17 = 0;
let c18 = 0;
let c19 = null;
let c20 = 0;
let c22 = 0;
let c23 = 0;
let c24 = null;
let c25 = false;
let c26 = null;
let c27 = null;
let fn = window.requestIdleCallback;
if (null == fn) {
  fn = (arg0) => {
    let closure_0 = arg0;
    return setImmediate(() => callback());
  };
}
const idGenerator = new require("getLowBits").IdGenerator();
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
let closure_33 = [];
let c34 = null;
function defaultGetSessionId() {
  return Promise.resolve({ sessionId: undefined });
}
let result = require("_possibleConstructorReturn").fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsTrackingStore.tsx");

export const AnalyticsActionHandlers = obj;
export const analyticsTrackingStoreMaker = (getLaunchSignature) => {
  let actionHandler;
  let getLowBits;
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
  ({ TRACKING_URL: dependencyMap, drainTimeoutOverride, waitFor: getLowBits, scheduleWhenIdle } = getLaunchSignature);
  if (scheduleWhenIdle === undefined) {
    scheduleWhenIdle = fn;
  }
  const B = getLaunchSignature.getLaunchSignature;
  if (B === undefined) {
    class B {
      constructor() {
        return null;
      }
    }
  }
  let _possibleConstructorReturn = B;
  const submitEvents = getLaunchSignature.submitEvents;
  function canDrain(AnalyticsTrackingStore, Store) {
    if (0 === outer1_33.length) {
      return tmp;
    } else if (null != outer1_29) {
      let tmp5 = null != outer1_28;
    } else {
      tmp5 = null != callback();
    }
  }
  function scheduleDrain(shouldFlushOnNextTick) {
    let flag = shouldFlushOnNextTick.shouldFlushOnNextTick;
    if (flag === undefined) {
      flag = false;
    }
    let tmp = null == outer1_34;
    if (tmp) {
      tmp = canDrain();
    }
    if (tmp) {
      if (flag) {
        const _setTimeout = setTimeout;
        let timerId = setTimeout(drainEventsQueue, 0);
      } else {
        const obj = { timeout: c13 };
        timerId = scheduleWhenIdle(drainEventsQueue, obj);
      }
      outer1_34 = timerId;
    }
  }
  function drainEventsQueue() {
    const outer1_34 = null;
    if (canDrain()) {
      const substr = outer1_33.slice();
      outer1_33 = [];
      outer1_20 = outer1_37(outer1_20);
      const _Math = Math;
      outer1_21 = Math.min(outer1_21, length);
      const _Math2 = Math;
      outer1_22 = Math.max(outer1_22, length);
      outer1_23 = outer1_37(outer1_23, length);
      const promise = submitEventsImmediately(substr);
      promise.then(() => {
        const item = substr.forEach((resolve) => {
          if (null != resolve.resolve) {
            resolve.resolve();
          }
        });
        outer2_16 = outer2_37(outer2_16);
      }, (body) => {
        const items = [...substr];
        outer2_33.unshift.apply(items);
        outer2_17 = outer2_37(outer2_17);
      });
      return promise;
    } else {
      return Promise.resolve();
    }
  }
  function submitEventsImmediately(items, CLIENT_TELEMETRY) {
    let tmp = CLIENT_TELEMETRY;
    let closure_0 = Date.now();
    const mapped = items.map((properties) => {
      let obj = {};
      const merged = Object.assign(properties);
      obj = {};
      const merged1 = Object.assign(properties.properties);
      obj["client_send_timestamp"] = closure_0;
      obj["properties"] = obj;
      return obj;
    });
    if (null != submitEvents) {
      return submitEvents(mapped, outer1_28);
    } else {
      if (null == tmp) {
        tmp = closure_2;
      }
      let obj = {};
      if (!outer1_25) {
        const v4Result = outer1_0(outer1_2[8]).v4();
        const outer1_27 = v4Result;
        obj["x-science-test"] = v4Result;
        outer1_25 = true;
        const obj2 = outer1_0(outer1_2[8]);
      }
      const HTTP = outer1_0(outer1_2[9]).HTTP;
      obj = { url: tmp };
      obj.headers = obj;
      obj = { token: outer1_28, events: mapped };
      obj.body = obj;
      obj.retries = 3;
      obj.rejectWithError = false;
      return HTTP.post(obj).then((headers) => {
        if (obj["x-science-test"]) {
          let prop;
          if (null != headers) {
            headers = headers.headers;
            if (null != headers) {
              prop = headers["x-science-test"];
            }
          }
          let tmp3 = null;
          if (null != prop) {
            tmp3 = prop;
          }
          const outer2_26 = tmp3;
        }
        return headers;
      });
    }
  }
  function sendTelemetryEvent() {
    let obj = { type: drainEventsQueue.CLIENT_TELEMETRY };
    obj = { client_track_timestamp: Date.now(), rpc_success_count: outer1_16, rpc_failure_count: outer1_17, first_seen_event_sequence_number: outer1_18, last_seen_event_sequence_number: outer1_14, telemetry_period_start_timestamp: outer1_19, telemetry_period_end_timestamp: Date.now(), event_queue_rejection_count: outer1_15, event_queue_batch_count: outer1_20 };
    let num = 0;
    if (outer1_21 !== Number.MAX_SAFE_INTEGER) {
      num = outer1_21;
    }
    obj.event_queue_batch_min_size = num;
    obj.event_queue_batch_max_size = outer1_22;
    let num2 = 0;
    if (outer1_20 > 0) {
      num2 = outer1_23 / outer1_20;
    }
    obj.event_queue_batch_avg_size = num2;
    obj.science_request_id = outer1_27;
    obj.science_response = outer1_26;
    obj.launch_signature = B();
    obj.properties = obj;
    outer1_15 = 0;
    outer1_16 = 0;
    outer1_17 = 0;
    outer1_20 = 0;
    outer1_21 = Number.MAX_SAFE_INTEGER;
    outer1_22 = 0;
    outer1_23 = 0;
    outer1_19 = Date.now();
    outer1_18 = outer1_14;
    const items = [obj];
    return submitEventsImmediately(items, scheduleDrain.CLIENT_TELEMETRY);
  }
  function stopTelemetryHeartbeat() {
    if (null != outer1_24) {
      const type = outer1_24.type;
      if ("timeout" === type) {
        const _clearTimeout = clearTimeout;
        clearTimeout(outer1_24.id);
        outer1_24 = null;
      } else if ("interval" !== type) {
        const type2 = outer1_24.type;
      }
      const _clearInterval = clearInterval;
      clearInterval(outer1_24.id);
    }
  }
  if (null != drainTimeoutOverride) {
    class B {
      constructor() {
        return null;
      }
    }
  }
  let c13 = 1500;
  obj.handleConnectionOpen = (arg0) => {
    let analyticsToken;
    let user;
    ({ analyticsToken, user } = arg0);
    if (null != analyticsToken) {
      const outer1_28 = analyticsToken;
    }
    if (null != user.id) {
      const outer1_29 = user.id;
    }
    (function startTelemetryHeartbeat() {
      if (null == outer2_24) {
        const _Math = Math;
        const _Math2 = Math;
        function scheduleNextHeartbeat() {
          const result = 0.1 * submitEventsImmediately;
          const outer3_24 = {
            type: "timeout",
            id: setTimeout(() => {
              outer3_11();
              outer1_0();
            }, Math.max(submitEventsImmediately + (Math.floor(Math.random() * result * 2) - result), sendTelemetryEvent))
          };
        }
        const obj = { type: "timeout" };
        const _setTimeout = setTimeout;
        obj.id = setTimeout(() => {
          outer2_11();
          scheduleNextHeartbeat();
        }, Math.floor(Math.random() * (stopTelemetryHeartbeat - sendTelemetryEvent) + sendTelemetryEvent));
        outer2_24 = obj;
      }
    })();
    scheduleDrain({ shouldFlushOnNextTick: false });
    return false;
  };
  obj.handleConnectionClosed = () => {
    drainEventsQueue();
    stopTelemetryHeartbeat();
    const outer1_28 = null;
    const outer1_29 = null;
    return false;
  };
  obj.handleFingerprint = () => {
    drainEventsQueue();
    return false;
  };
  obj.handleTrack = (arg0) => {
    let closure_0;
    let closure_2;
    let getLowBits;
    let getSessionId;
    let scheduleWhenIdle;
    ({ event: closure_0, properties: getSessionId, flush: closure_2, fingerprint: getLowBits, resolve: scheduleWhenIdle } = arg0);
    getSessionId().then((client_heartbeat_session_id) => {
      let obj = { type: closure_0, fingerprint: getLowBits };
      obj = { client_track_timestamp: Date.now(), client_heartbeat_session_id: client_heartbeat_session_id.sessionId, event_sequence_number: sum };
      sum = outer2_14 + 1;
      outer2_14 = sum;
      const merged = Object.assign(closure_1);
      obj.properties = obj;
      obj.resolve = extractId;
      if (null != outer2_29) {
        let extractIdResult = outer2_29;
      } else {
        let fingerprint = obj.fingerprint;
        if (null == fingerprint) {
          fingerprint = outer1_0();
        }
        extractIdResult = null;
        if (null != fingerprint) {
          extractIdResult = outer2_0(outer2_2[7]).extractId(fingerprint);
          const obj3 = outer2_0(outer2_2[7]);
        }
      }
      if (null != extractIdResult) {
        obj.properties.client_uuid = outer2_31.generate(extractIdResult);
      }
      outer2_33.push(obj);
      if (outer2_33.length > 10000) {
        outer2_15 = outer2_37(outer2_15, outer2_33.length - 10000);
        outer2_33 = outer2_33.slice(-10000);
      }
      obj = {};
      if (closure_2) {
        obj.shouldFlushOnNextTick = true;
        let tmp14 = obj;
      } else {
        obj.shouldFlushOnNextTick = false;
        tmp14 = obj;
      }
      outer1_8(tmp14);
    });
    return false;
  };
  obj.handleSetAnalyticsToken = (analyticsToken) => {
    analyticsToken = analyticsToken.analyticsToken;
    let tmp = null == outer1_28;
    if (tmp) {
      tmp = null != analyticsToken;
    }
    if (tmp) {
      outer1_28 = analyticsToken;
      const outer1_29 = analyticsToken.userId;
      const obj = { shouldFlushOnNextTick: false };
      scheduleDrain(obj);
    }
    return false;
  };
  let tmp = ((Store) => {
    class AnalyticsTrackingStore {
      constructor(arg0) {
        self = this;
        items = [...arguments];
        tmp = waitFor(this, AnalyticsTrackingStore);
        items1 = [...items];
        obj = submitEvents(AnalyticsTrackingStore);
        tmp2 = B;
        if (outer2_36()) {
          tmp4 = globalThis;
          _Reflect = Reflect;
          tmp5 = submitEvents;
          constructResult = Reflect.construct(obj, items1, submitEvents(self).constructor);
        } else {
          constructResult = obj.apply(self, items1);
        }
        tmp2Result = tmp2(self, constructResult);
        tmp2Result.submitEventsImmediately = outer1_10;
        return tmp2Result;
      }
    }
    canDrain(AnalyticsTrackingStore, Store);
    let items = [
      {
        key: "initialize",
        value: function initialize() {
          const self = this;
          if (null != outer1_3) {
            const waitFor = self.waitFor;
            const items = [];
            HermesBuiltin.arraySpread(outer1_3, 0);
            HermesBuiltin.apply(items, self);
          }
        }
      }
    ];
    return scheduleWhenIdle(AnalyticsTrackingStore, items);
  })(getSessionId(566).Store);
  tmp.displayName = "AnalyticsTrackingStore";
  tmp = new tmp(dispatcher, actionHandler);
  return tmp;
};
