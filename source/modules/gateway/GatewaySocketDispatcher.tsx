// Module ID: 12572
// Function ID: 97279
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 57, 12573, 3, 12574, 12577, 12576, 12578, 566, 12579, 2]

// Module 12572 (_createForOfIteratorHelperLoose)
import prettyPrintTrace_ from "prettyPrintTrace_";
import WorkSchedulerTelemetry from "WorkSchedulerTelemetry";
import _slicedToArray from "_slicedToArray";
import { DISPATCHER_IDEAL_TIME_LIMIT_MS as closure_6 } from "WorkIdleDeadline";
import importDefaultResult from "WorkIdleDeadline";
import set from "_slicedToArray";

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
function _shouldYieldToBrowser(arg0, arg1, timeRemaining) {
  if (null == timeRemaining) {
    return false;
  } else {
    const diff = arg0.length - 1;
    let tmp2 = null;
    if (arg1 < diff) {
      tmp2 = arg0[arg1 + 1];
    }
    let timeRemainingResult;
    if (null != timeRemaining) {
      timeRemainingResult = timeRemaining.timeRemaining();
    }
    let num3 = 0;
    if (null != timeRemainingResult) {
      num3 = timeRemainingResult;
    }
    let type;
    if (null != tmp2) {
      type = tmp2.type;
    }
    return null != timeRemaining && num3 <= 0 && arg0[arg1].type !== type && arg1 !== diff;
  }
}
importDefaultResult = new importDefaultResult("GatewaySocket");
let set = new Set(["INITIAL_GUILD", "READY"]);
const set1 = new Set(["READY", "INITIAL_GUILD"]);
const set2 = new Set(["READY", "READY_SUPPLEMENTAL", "RESUMED"]);
const set3 = new Set(["READY", "INITIAL_GUILD", "READY_SUPPLEMENTAL", "RESUMED", "VOICE_CHANNEL_SELECT", "VOICE_STATE_UPDATE", "VOICE_SERVER_UPDATE", "RTC_CONNECTION_STATE", "RTC_CONNECTION_VIDEO", "RTC_CONNECTION_CLIENT_CONNECT", "RTC_CONNECTION_PING", "MEDIA_SESSION_JOINED", "MEDIA_ENGINE_PERMISSION", "SESSIONS_REPLACE", "STREAM_CREATE", "STREAM_SERVER_UPDATE", "STREAM_DELETE", "STREAM_UPDATE"]);
let closure_12 = { NotStarted: 0, [0]: "NotStarted", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded" };
let closure_13 = {};
let result = set.fileFinishedImporting("modules/gateway/GatewaySocketDispatcher.tsx");

export default (() => {
  class GatewaySocketDispatcher {
    constructor(arg0) {
      self = this;
      tmp = outer1_3(this, self);
      this.socket = arg0;
      obj = GatewaySocketDispatcher(outer1_2[5]);
      this.scheduler = obj.createDispatcherWorkScheduler();
      this.queue = [];
      this.paused = true;
      obj2 = GatewaySocketDispatcher(outer1_2[6]);
      this.resumeAnalytics = obj2.createResumeAnalytics();
      this.getDispatchHandler = null;
      this.flush = (arg0) => {
        if (self.paused) {
          return true;
        } else {
          const _performance = performance;
          let num2 = 0;
          if (0 < self.queue.length) {
            let num3 = 0;
            num2 = 0;
            if (self.queue[0].status === outer2_12.Loaded) {
              const sum = num3 + 1;
              num2 = sum;
              while (sum < self.queue.length) {
                let tmp8 = self;
                let tmp9 = outer2_12;
                num3 = sum;
                num2 = sum;
                if (self.queue[sum].status !== outer2_12.Loaded) {
                  break;
                }
              }
            }
          }
          if (0 === num2) {
            return true;
          } else {
            const queue = self.queue;
            const spliceResult = queue.splice(0, num2);
            const dispatchMultipleResult = self.dispatchMultiple(spliceResult, arg0);
            if (dispatchMultipleResult) {
              const telemetry = self.scheduler.telemetry;
              telemetry.timeEnd(GatewaySocketDispatcher(outer2_2[7]).WorkSchedulerTelemetryTiming.TIME_TO_QUEUE_EMPTY);
            }
            const _performance2 = performance;
            const diff = performance.now() - nowResult;
            if (tmp16) {
              const _HermesInternal = HermesInternal;
              outer2_7.log("Dispatched " + spliceResult.length + " messages in " + diff + "ms");
            }
            return dispatchMultipleResult;
          }
          nowResult = performance.now();
        }
      };
      return;
    }
  }
  let obj = {
    key: "hasStuffToDispatchNow",
    value() {
      let tmp = this.queue.length > 0;
      if (tmp) {
        tmp = this.queue[0].status === outer1_12.Loaded;
      }
      return tmp;
    }
  };
  let items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "processFirstQueuedDispatch",
    value(has) {
      const self = this;
      const items = [];
      if (this.queue.length > 0) {
        if (has.has(self.queue[0].type)) {
          if (self.queue[0].status === outer1_12.Loaded) {
            const queue = self.queue;
            items.push(queue.shift());
            while (self.queue.length > 0) {
              if (!has.has(self.queue[0].type)) {
                break;
              } else {
                let tmp3 = outer1_12;
                if (self.queue[0].status !== outer1_12.Loaded) {
                  break;
                }
              }
            }
          }
        }
      }
      self.dispatchMultiple(items);
    }
  };
  items[1] = obj;
  obj = {
    key: "unpauseDispatchQueue",
    value() {
      let done;
      const self = this;
      this.paused = false;
      const tmp = outer1_14(this.queue);
      let iter = tmp();
      if (!iter.done) {
        do {
          let maybePreloadResult = self.maybePreload(iter.value);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      self.flush();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "receiveDispatch",
    value(data, type, compressionAnalytics) {
      const self = this;
      if (null == this.getDispatchHandler) {
        const _Error = Error;
        throw Error("getDispatchHandler needs to be passed in first!");
      } else {
        const obj = { data, type, compressionAnalytics, status: outer1_12.NotStarted, preloadPromise: null, preloadedData: null };
        const queue = self.queue;
        queue.push(obj);
        if (!self.maybePreload(obj)) {
          self.scheduleFlush(type);
        }
      }
    }
  };
  items[4] = {
    key: "maybePreload",
    value(type) {
      let self = this;
      self = this;
      let closure_1 = type;
      if (this.paused) {
        if (!outer1_8.has(type.type)) {
          return false;
        }
      }
      if (type.status === outer1_12.NotStarted) {
        const dispatchHandler = self.getDispatchHandler(type.type);
        let preloadResult;
        if (null != dispatchHandler) {
          preloadResult = dispatchHandler.preload(type.data);
        }
        if (null == preloadResult) {
          let Loading = outer1_12.Loaded;
        } else {
          Loading = outer1_12.Loading;
        }
        type.status = Loading;
        type.preloadPromise = preloadResult;
        if (null != preloadResult) {
          preloadResult.then((preloadedData) => {
            type.preloadedData = preloadedData;
            type.status = outer2_12.Loaded;
            self.scheduleFlush(type.type);
          }).catch((error) => {
            const socket = self.socket;
            return socket.resetSocketOnDispatchError({ error, action: type.type });
          });
          return true;
        }
      }
      return false;
    }
  };
  items[5] = {
    key: "scheduleFlush",
    value(arg0) {
      const self = this;
      if (!this.paused) {
        const scheduler = self.scheduler;
        if (outer1_9.has(arg0)) {
          scheduler.clearWorkTimeout();
          self.flush();
        } else if (!scheduler.hasWorkScheduled) {
          const scheduler2 = self.scheduler;
          const workTimeout = scheduler2.requestWorkTimeout(self.flush);
        }
        if (outer1_11.has(arg0)) {
          const scheduler3 = self.scheduler;
          const result = scheduler3.markCriticalWorkScheduled();
        }
      }
    }
  };
  items[6] = {
    key: "getDispatchTimings",
    value() {
      return outer1_13;
    }
  };
  items[7] = {
    key: "getSchedulerTelemetry",
    value() {
      return this.scheduler.telemetry;
    }
  };
  items[8] = {
    key: "getIsSchedulerBackgrounded",
    value() {
      return this.scheduler.isBackgrounded;
    }
  };
  items[9] = {
    key: "toggleRequestIdleCallback",
    value(arg0) {
      const scheduler = this.scheduler;
      const result = scheduler.toggleRequestIdleCallback(arg0);
    }
  };
  items[10] = {
    key: "getIsRequestIdleCallbackEnabled",
    value() {
      return this.scheduler.isRequestIdleCallbackEnabled;
    }
  };
  items[11] = {
    key: "dispatchMultiple",
    value(arg0, arg1) {
      let self = this;
      self = this;
      let closure_1 = arg0;
      let closure_2 = arg1;
      if (0 === arg0.length) {
        return true;
      } else {
        const none = "none";
        let c4 = false;
        const telemetry2 = self.scheduler.telemetry;
        telemetry2.measure(GatewaySocketDispatcher(outer1_2[7]).WorkSchedulerTelemetryMeasurement.COUNT_INITIAL_DISPATCHS_LENGTH, arg0.length);
        let _slicedToArray = [];
        if (self.socket.connectionState === outer1_1(outer1_2[8]).RESUMING) {
          const Emitter = outer1_1(outer1_2[9]).Emitter;
          Emitter.pause(150);
        }
        let c6 = 0;
        const Emitter2 = outer1_1(outer1_2[9]).Emitter;
        Emitter2.batched(() => {
          let arr3;
          let num = 0;
          if (0 < length.length) {
            while (true) {
              let tmp = length;
              let tmp2 = length[num];
              let type = tmp2.type;
              let tmp4 = num;
              if (!hasItem) {
                let tmp5 = outer2_10;
                hasItem = outer2_10.has(tmp2.type);
              }
              let _performance = performance;
              let tmp7 = self;
              let nowResult = performance.now();
              let dispatchOneResult = self.dispatchOne(tmp2);
              let _performance2 = performance;
              let closure_6 = performance.now() - nowResult;
              type = tmp2.type;
              let tmp10 = outer2_13;
              let items = outer2_13[type];
              let tmp9 = closure_6;
              if (null == items) {
                items = [0, 0];
              }
              let tmp11 = outer2_5;
              let tmp12 = outer2_5(items, 2);
              let tmp13 = tmp12[1];
              let tmp14 = outer2_13;
              let items1 = [(tmp12[0] * tmp13 + tmp9) / (tmp13 + 1), tmp13 + 1];
              outer2_13[type] = items1;
              let tmp15 = outer2_16;
              let tmp16 = length;
              let tmp17 = closure_2;
              arr3 = length;
              if (outer2_16(length, num, closure_2)) {
                break;
              } else {
                num = num + 1;
              }
            }
            let _slicedToArray = arr3.slice(num + 1);
            let tmp19 = null != closure_2;
            if (tmp19) {
              tmp19 = closure_2.timeRemaining() <= 0;
            }
            if (tmp19) {
              const telemetry = self.scheduler.telemetry;
              telemetry.timeTrack(GatewaySocketDispatcher(outer2_2[7]).WorkSchedulerTelemetryTiming.TIME_OVER_DEADLINE, closure_2.timeSinceExpiration);
            }
          }
          outer2_1(outer2_2[10]).flush();
        });
        if (c4) {
          const Emitter3 = outer1_1(outer1_2[9]).Emitter;
          Emitter3.resume();
        }
        if (_slicedToArray.length > 0) {
          let telemetry = self.scheduler.telemetry;
          telemetry.measure(GatewaySocketDispatcher(outer1_2[7]).WorkSchedulerTelemetryMeasurement.COUNT_DISPATCHES_LEFT_AFTER_YIELD, _slicedToArray.length);
          const queue = self.queue;
          const unshift = queue.unshift;
          let items = [];
          HermesBuiltin.arraySpread(_slicedToArray, 0);
          HermesBuiltin.apply(items, queue);
          const scheduler = self.scheduler;
          const workTimeout = scheduler.requestWorkTimeout(self.flush, true);
          return false;
        }
      }
    }
  };
  items[12] = {
    key: "dispatchOne",
    value(arg0) {
      let compressionAnalytics;
      let data;
      let preloadedData;
      let type;
      const self = this;
      ({ data, type, compressionAnalytics, preloadedData } = arg0);
      const nowResult = performance.now();
      if (this.socket.connectionState !== outer1_1(outer1_2[8]).RESUMING) {
        outer1_1(outer1_2[10]).flush(type, data);
        if ("READY" === type) {
          const readyPayloadByteSizeAnalytics = GatewaySocketDispatcher(outer1_2[6]).getReadyPayloadByteSizeAnalytics(data);
          const dispatchHandler = self.getDispatchHandler(type);
          if (null != dispatchHandler) {
            dispatchHandler.dispatch(data, type, preloadedData);
          }
          const obj8 = GatewaySocketDispatcher(outer1_2[6]);
          const result = obj8.logReadyPayloadReceived(self.socket, data, nowResult, compressionAnalytics, readyPayloadByteSizeAnalytics);
          const obj6 = GatewaySocketDispatcher(outer1_2[6]);
        } else if ("RESUMED" === type) {
          const dispatchHandler1 = self.getDispatchHandler(type);
          if (null != dispatchHandler1) {
            dispatchHandler1.dispatch(data, type, preloadedData);
          }
          GatewaySocketDispatcher(outer1_2[6]).logResumeAnalytics(self.resumeAnalytics);
          const socket = self.socket;
          const result1 = socket.handleResumeDispatched();
          const obj4 = GatewaySocketDispatcher(outer1_2[6]);
          self.resumeAnalytics = GatewaySocketDispatcher(outer1_2[6]).createResumeAnalytics();
          const obj5 = GatewaySocketDispatcher(outer1_2[6]);
        } else {
          const dispatchHandler2 = self.getDispatchHandler(type);
          if (null != dispatchHandler2) {
            dispatchHandler2.dispatch(data, type, preloadedData);
          }
        }
        if (self.socket.connectionState === outer1_1(outer1_2[8]).RESUMING) {
          const resumeAnalytics3 = self.resumeAnalytics;
          const _performance = performance;
          resumeAnalytics3.dispatchTime = resumeAnalytics3.dispatchTime + (performance.now() - nowResult);
        }
      } else {
        let numEvents = nowResult - self.resumeAnalytics.lastUpdateTime;
        if (0 === self.resumeAnalytics.numEvents) {
          self.resumeAnalytics.initialWaitTime = numEvents;
        } else if (numEvents > self.resumeAnalytics.largestWaitTime) {
          self.resumeAnalytics.largestWaitTime = numEvents;
        }
        const resumeAnalytics = self.resumeAnalytics;
        resumeAnalytics.totalWaitTime = resumeAnalytics.totalWaitTime + numEvents;
        self.resumeAnalytics.lastUpdateTime = nowResult;
        const resumeAnalytics2 = self.resumeAnalytics;
        numEvents = resumeAnalytics2.numEvents;
        resumeAnalytics2.numEvents = numEvents + 1;
      }
    }
  };
  items[13] = {
    key: "clear",
    value() {
      this.paused = false;
      this.queue.length = 0;
    }
  };
  return callback(GatewaySocketDispatcher, items);
})();
