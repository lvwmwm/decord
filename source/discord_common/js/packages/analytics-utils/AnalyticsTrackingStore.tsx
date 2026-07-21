// Module ID: 481
// Function ID: 6192
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: analyticsTrackingStoreMaker

// Module 481 (_isNativeReflectConstruct)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ TelemetryEndpoints: closure_8, TelemetryEvents: closure_9 } = arg1(dependencyMap[5]));
({ FREQUENCY: closure_10, MIN_DELAY: closure_11, MAX_DELAY: closure_12 } = { "Bool(true)": "<string:494981120>", "Bool(true)": "<string:497229219>", "Bool(true)": "<string:1050877347>" });
let closure_13 = 1500;
let closure_14 = 0;
let closure_15 = 0;
let closure_16 = 0;
let closure_17 = 0;
let closure_18 = 0;
let closure_19 = null;
let closure_20 = 0;
let closure_22 = 0;
let closure_23 = 0;
let closure_24 = null;
let closure_25 = false;
let closure_26 = null;
let closure_27 = null;
let fn = window.requestIdleCallback;
if (null == fn) {
  fn = (arg0) => {
    const arg1 = arg0;
    return setImmediate(() => arg0());
  };
}
const idGenerator = new arg1(dependencyMap[6]).IdGenerator();
const obj = {
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
let closure_34 = null;
function defaultGetSessionId() {
  return Promise.resolve({ sessionId: undefined });
}
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsTrackingStore.tsx");

export const AnalyticsActionHandlers = obj;
export const analyticsTrackingStoreMaker = (getLaunchSignature) => {
  let actionHandler;
  let dispatcher;
  let drainTimeoutOverride;
  let getSessionId;
  let scheduleWhenIdle;
  ({ dispatcher, actionHandler, getFingerprint: closure_0, getSessionId } = getLaunchSignature);
  if (getSessionId === undefined) {
    getSessionId = defaultGetSessionId;
  }
  const importDefault = getSessionId;
  ({ TRACKING_URL: closure_2, drainTimeoutOverride, waitFor: closure_3, scheduleWhenIdle } = getLaunchSignature);
  if (scheduleWhenIdle === undefined) {
    scheduleWhenIdle = fn;
  }
  let closure_4 = scheduleWhenIdle;
  const B = getLaunchSignature.getLaunchSignature;
  if (B === undefined) {
    class B {
      constructor() {
        return null;
      }
    }
  }
  let closure_5 = B;
  const submitEvents = getLaunchSignature.submitEvents;
  function canDrain(AnalyticsTrackingStore, Store) {
    if (0 === arr.length) {
      return tmp;
    } else if (null != closure_29) {
      let tmp5 = null != closure_28;
    } else {
      tmp5 = null != callback();
    }
  }
  function scheduleDrain(shouldFlushOnNextTick) {
    let flag = shouldFlushOnNextTick.shouldFlushOnNextTick;
    if (flag === undefined) {
      flag = false;
    }
    let tmp = null == timerId;
    if (tmp) {
      tmp = canDrain();
    }
    if (tmp) {
      if (flag) {
        const _setTimeout = setTimeout;
        let timerId = setTimeout(drainEventsQueue, 0);
      } else {
        const obj = { timeout: closure_13 };
        timerId = scheduleWhenIdle(drainEventsQueue, obj);
      }
    }
  }
  function drainEventsQueue() {
    let closure_34 = null;
    if (canDrain()) {
      const substr = arr.slice();
      const arr = [];
      closure_20 = callback2(closure_20);
      const _Math = Math;
      closure_21 = Math.min(closure_21, length);
      const _Math2 = Math;
      closure_22 = Math.max(closure_22, length);
      closure_23 = callback2(closure_23, length);
      const promise = submitEventsImmediately(substr);
      promise.then(() => {
        const item = substr.forEach((resolve) => {
          if (null != resolve.resolve) {
            resolve.resolve();
          }
        });
        closure_16 = callback(closure_16);
      }, (body) => {
        const items = [...closure_0];
        unshift.unshift.apply(items);
        closure_17 = callback(closure_17);
      });
      return promise;
    } else {
      return Promise.resolve();
    }
  }
  function submitEventsImmediately(items, CLIENT_TELEMETRY) {
    let tmp = CLIENT_TELEMETRY;
    const callback = Date.now();
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
      return submitEvents(mapped, closure_28);
    } else {
      if (null == tmp) {
        tmp = closure_2;
      }
      let obj = {};
      const getSessionId = obj;
      if (!closure_25) {
        const v4Result = callback(closure_2[8]).v4();
        obj.x-science-test = v4Result;
        closure_25 = true;
        const obj2 = callback(closure_2[8]);
      }
      const HTTP = callback(closure_2[9]).HTTP;
      obj = { url: tmp };
      obj.headers = obj;
      obj = { token: closure_28, events: mapped };
      obj.body = obj;
      obj.retries = 3;
      obj.rejectWithError = false;
      return HTTP.post(obj).then((headers) => {
        if (obj.x-science-test) {
          let prop;
          if (null != headers) {
            headers = headers.headers;
            if (null != headers) {
              prop = headers.x-science-test;
            }
          }
          let tmp3 = null;
          if (null != prop) {
            tmp3 = prop;
          }
        }
        return headers;
      });
    }
  }
  function sendTelemetryEvent() {
    let obj = { type: drainEventsQueue.CLIENT_TELEMETRY };
    obj = { client_track_timestamp: Date.now(), rpc_success_count: closure_16, rpc_failure_count: closure_17, first_seen_event_sequence_number: closure_18, last_seen_event_sequence_number: closure_14, telemetry_period_start_timestamp: closure_19, telemetry_period_end_timestamp: Date.now(), event_queue_rejection_count: closure_15, event_queue_batch_count: closure_20 };
    let num = 0;
    if (MAX_SAFE_INTEGER !== Number.MAX_SAFE_INTEGER) {
      num = MAX_SAFE_INTEGER;
    }
    obj.event_queue_batch_min_size = num;
    obj.event_queue_batch_max_size = closure_22;
    let num2 = 0;
    if (closure_20 > 0) {
      num2 = closure_23 / closure_20;
    }
    obj.event_queue_batch_avg_size = num2;
    obj.science_request_id = closure_27;
    obj.science_response = closure_26;
    obj.launch_signature = B();
    obj.properties = obj;
    closure_15 = 0;
    closure_16 = 0;
    closure_17 = 0;
    closure_20 = 0;
    closure_22 = 0;
    closure_23 = 0;
    closure_19 = Date.now();
    closure_18 = closure_14;
    const items = [obj];
    return submitEventsImmediately(items, scheduleDrain.CLIENT_TELEMETRY);
  }
  function stopTelemetryHeartbeat() {
    if (null != user) {
      const type = user.type;
      if ("timeout" === type) {
        const _clearTimeout = clearTimeout;
        clearTimeout(user.id);
        const user = null;
      } else if ("interval" !== type) {
        const type2 = user.type;
      }
      const _clearInterval = clearInterval;
      clearInterval(user.id);
    }
  }
  if (null != drainTimeoutOverride) {
    class B {
      constructor() {
        return null;
      }
    }
  }
  let closure_13 = 1500;
  obj.handleConnectionOpen = (arg0) => {
    let analyticsToken;
    let user;
    ({ analyticsToken, user } = arg0);
    if (null != user.id) {
      const id = user.id;
    }
    function startTelemetryHeartbeat() {
      if (null == obj) {
        const _Math = Math;
        const _Math2 = Math;
        function scheduleNextHeartbeat() {
          const result = 0.1 * closure_10;
          const obj = {
            type: "timeout",
            id: setTimeout(() => {
              callback2();
              callback();
            }, Math.max(closure_10 + (Math.floor(Math.random() * result * 2) - result), closure_11))
          };
        }
        const obj = { type: "timeout" };
        const _setTimeout = setTimeout;
        obj.id = setTimeout(() => {
          callback();
          scheduleNextHeartbeat();
        }, Math.floor(Math.random() * (closure_12 - closure_11) + closure_11));
      }
    }();
    scheduleDrain({ shouldFlushOnNextTick: false });
    return false;
  };
  obj.handleConnectionClosed = () => {
    drainEventsQueue();
    stopTelemetryHeartbeat();
    let closure_28 = null;
    let closure_29 = null;
    return false;
  };
  obj.handleFingerprint = () => {
    drainEventsQueue();
    return false;
  };
  obj.handleTrack = (arg0) => {
    ({ event: closure_0, properties: closure_1, flush: closure_2, fingerprint: closure_3, resolve: closure_4 } = arg0);
    getSessionId().then((client_heartbeat_session_id) => {
      let obj = { type: callback, fingerprint: closure_3 };
      obj = { client_track_timestamp: Date.now(), client_heartbeat_session_id: client_heartbeat_session_id.sessionId, event_sequence_number: sum };
      const sum = sum + 1;
      const merged = Object.assign(closure_1);
      obj.properties = obj;
      obj.resolve = closure_4;
      if (null != closure_29) {
        let extractIdResult = closure_29;
      } else {
        let fingerprint = obj.fingerprint;
        if (null == fingerprint) {
          fingerprint = callback();
        }
        extractIdResult = null;
        if (null != fingerprint) {
          extractIdResult = callback(closure_2[7]).extractId(fingerprint);
          const obj3 = callback(closure_2[7]);
        }
      }
      if (null != extractIdResult) {
        obj.properties.client_uuid = closure_31.generate(extractIdResult);
      }
      let arr = arr.push(obj);
      if (arr.length > 10000) {
        closure_15 = callback2(closure_15, arr.length - 10000);
        arr = arr.slice(-10000);
      }
      obj = {};
      if (closure_2) {
        obj.shouldFlushOnNextTick = true;
        let tmp14 = obj;
      } else {
        obj.shouldFlushOnNextTick = false;
        tmp14 = obj;
      }
      closure_8(tmp14);
    });
    return false;
  };
  obj.handleSetAnalyticsToken = (analyticsToken) => {
    analyticsToken = analyticsToken.analyticsToken;
    let tmp = null == analyticsToken;
    if (tmp) {
      tmp = null != analyticsToken;
    }
    if (tmp) {
      const userId = analyticsToken.userId;
      const obj = { shouldFlushOnNextTick: false };
      scheduleDrain(obj);
    }
    return false;
  };
  let tmp = (Store) => {
    class AnalyticsTrackingStore {
      constructor(arg0) {
        self = this;
        items = [...arguments];
        tmp = closure_3(this, AnalyticsTrackingStore);
        items1 = [...items];
        obj = closure_6(AnalyticsTrackingStore);
        tmp2 = closure_5;
        if (closure_36()) {
          tmp4 = globalThis;
          _Reflect = Reflect;
          tmp5 = closure_6;
          constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
        } else {
          constructResult = obj.apply(self, items1);
        }
        tmp2Result = tmp2(self, constructResult);
        tmp2Result.submitEventsImmediately = closure_10;
        return tmp2Result;
      }
    }
    canDrain(AnalyticsTrackingStore, Store);
    const items = [
      {
        key: "initialize",
        value: function initialize() {
          const self = this;
          if (null != closure_3) {
            const waitFor = self.waitFor;
            const items = [];
            HermesBuiltin.arraySpread(closure_3, 0);
            HermesBuiltin.apply(items, self);
          }
        }
      }
    ];
    return scheduleWhenIdle(AnalyticsTrackingStore, items);
  }(importDefault(dependencyMap[10]).Store);
  tmp.displayName = "AnalyticsTrackingStore";
  tmp = new tmp(dispatcher, actionHandler);
  return tmp;
};
