// Module ID: 12444
// Function ID: 95050
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 12444 (_createForOfIteratorHelperLoose)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).DISPATCHER_IDEAL_TIME_LIMIT_MS;
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult("GatewaySocket");
const set = new Set([8194600381347578000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001514308377944324]);
const set1 = new Set([true, true]);
const set2 = new Set([]);
const set3 = new Set([217251842, 1716584450, -208125653, 877723649, -325959211, -649003007, 1088700886, -2091843580, 1211777308, 1464926212, 877937127, -867106815, 18600260, 18669824, 18724864, 18984960, 25248768, -761397247]);
let closure_12 = { NotStarted: 0, [0]: "NotStarted", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded" };
let closure_13 = {};
const tmp8 = () => {
  class GatewaySocketDispatcher {
    constructor(arg0) {
      GatewaySocketDispatcher = this;
      tmp = closure_3(this, GatewaySocketDispatcher);
      this.socket = arg0;
      obj = GatewaySocketDispatcher(closure_2[5]);
      this.scheduler = obj.createDispatcherWorkScheduler();
      this.queue = [];
      this.paused = true;
      obj2 = GatewaySocketDispatcher(closure_2[6]);
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
            if (self.queue[0].status === closure_12.Loaded) {
              const sum = num3 + 1;
              num2 = sum;
              while (sum < self.queue.length) {
                let tmp8 = self;
                let tmp9 = closure_12;
                num3 = sum;
                num2 = sum;
                if (self.queue[sum].status !== closure_12.Loaded) {
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
              telemetry.timeEnd(self(closure_2[7]).WorkSchedulerTelemetryTiming.TIME_TO_QUEUE_EMPTY);
            }
            const _performance2 = performance;
            const diff = performance.now() - nowResult;
            if (tmp16) {
              const _HermesInternal = HermesInternal;
              closure_7.log("Dispatched " + spliceResult.length + " messages in " + diff + "ms");
            }
            return dispatchMultipleResult;
          }
          const nowResult = performance.now();
        }
      };
      return;
    }
  }
  const arg1 = GatewaySocketDispatcher;
  let obj = {
    key: "hasStuffToDispatchNow",
    value() {
      let tmp = this.queue.length > 0;
      if (tmp) {
        tmp = this.queue[0].status === closure_12.Loaded;
      }
      return tmp;
    }
  };
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "processFirstQueuedDispatch",
    value(has) {
      const self = this;
      const items = [];
      if (this.queue.length > 0) {
        if (has.has(self.queue[0].type)) {
          if (self.queue[0].status === closure_12.Loaded) {
            const queue = self.queue;
            items.push(queue.shift());
            while (self.queue.length > 0) {
              if (!has.has(self.queue[0].type)) {
                break;
              } else {
                let tmp3 = closure_12;
                if (self.queue[0].status !== closure_12.Loaded) {
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
      const tmp = callback3(this.queue);
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
        const obj = { data, type, compressionAnalytics, status: closure_12.NotStarted, preloadPromise: null, preloadedData: null };
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
      const self = this;
      const GatewaySocketDispatcher = this;
      if (this.paused) {
        if (!set.has(type.type)) {
          return false;
        }
      }
      if (type.status === closure_12.NotStarted) {
        const dispatchHandler = self.getDispatchHandler(type.type);
        let preloadResult;
        if (null != dispatchHandler) {
          preloadResult = dispatchHandler.preload(type.data);
        }
        if (null == preloadResult) {
          let Loading = closure_12.Loaded;
        } else {
          Loading = closure_12.Loading;
        }
        type.status = Loading;
        type.preloadPromise = preloadResult;
        if (null != preloadResult) {
          preloadResult.then((preloadedData) => {
            preloadedData.preloadedData = preloadedData;
            preloadedData.status = Loaded.Loaded;
            self.scheduleFlush(preloadedData.type);
          }).catch((error) => {
            const socket = self.socket;
            return socket.resetSocketOnDispatchError({ error, action: error.type });
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
        if (set2.has(arg0)) {
          scheduler.clearWorkTimeout();
          self.flush();
        } else if (!scheduler.hasWorkScheduled) {
          const scheduler2 = self.scheduler;
          const workTimeout = scheduler2.requestWorkTimeout(self.flush);
        }
        if (set3.has(arg0)) {
          const scheduler3 = self.scheduler;
          const result = scheduler3.markCriticalWorkScheduled();
        }
      }
    }
  };
  items[6] = {
    key: "getDispatchTimings",
    value() {
      return closure_13;
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
      const self = this;
      const GatewaySocketDispatcher = this;
      if (0 === arg0.length) {
        return true;
      } else {
        let closure_3 = "none";
        let closure_4 = false;
        const telemetry2 = self.scheduler.telemetry;
        telemetry2.measure(GatewaySocketDispatcher(arg1[7]).WorkSchedulerTelemetryMeasurement.COUNT_INITIAL_DISPATCHS_LENGTH, arg0.length);
        let closure_5 = [];
        if (self.socket.connectionState === arg0(arg1[8]).RESUMING) {
          const Emitter = arg0(arg1[9]).Emitter;
          Emitter.pause(150);
        }
        let closure_6 = 0;
        const Emitter2 = arg0(arg1[9]).Emitter;
        Emitter2.batched((arg0, self) => {
          let arr3;
          let num = 0;
          if (0 < arg0.length) {
            while (true) {
              let tmp = arg0;
              let tmp2 = arg0[num];
              let type2 = tmp2.type;
              let hasItem = closure_4;
              let tmp4 = num;
              if (!closure_4) {
                let tmp5 = set;
                hasItem = set.has(tmp2.type);
              }
              closure_4 = hasItem;
              let _performance = performance;
              let tmp7 = self;
              let nowResult = performance.now();
              let dispatchOneResult = self.dispatchOne(tmp2);
              let _performance2 = performance;
              let closure_6 = performance.now() - nowResult;
              let type = tmp2.type;
              let tmp10 = closure_13;
              let items = closure_13[type];
              let tmp9 = closure_6;
              if (null == items) {
                items = [1390895572, -255068174];
              }
              let tmp11 = callback;
              let tmp12 = callback(items, 2);
              let tmp13 = tmp12[1];
              let tmp14 = closure_13;
              let items1 = [(tmp12[0] * tmp13 + tmp9) / (tmp13 + 1), tmp13 + 1];
              closure_13[type] = items1;
              let tmp15 = callback2;
              let tmp16 = arg0;
              let tmp17 = self;
              arr3 = arg0;
              if (callback2(arg0, num, self)) {
                break;
              } else {
                num = num + 1;
              }
            }
            const callback = arr3.slice(num + 1);
            let tmp19 = null != self;
            if (tmp19) {
              tmp19 = self.timeRemaining() <= 0;
            }
            if (tmp19) {
              const telemetry = self.scheduler.telemetry;
              telemetry.timeTrack(self(self[7]).WorkSchedulerTelemetryTiming.TIME_OVER_DEADLINE, self.timeSinceExpiration);
            }
          }
          arg0(self[10]).flush();
        });
        if (closure_4) {
          const Emitter3 = arg0(arg1[9]).Emitter;
          Emitter3.resume();
        }
        if (closure_5.length > 0) {
          const telemetry = self.scheduler.telemetry;
          telemetry.measure(GatewaySocketDispatcher(arg1[7]).WorkSchedulerTelemetryMeasurement.COUNT_DISPATCHES_LEFT_AFTER_YIELD, closure_5.length);
          const queue = self.queue;
          const unshift = queue.unshift;
          const items = [];
          HermesBuiltin.arraySpread(closure_5, 0);
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
      if (this.socket.connectionState !== callback(closure_2[8]).RESUMING) {
        callback(closure_2[10]).flush(type, data);
        if ("READY" === type) {
          const readyPayloadByteSizeAnalytics = GatewaySocketDispatcher(closure_2[6]).getReadyPayloadByteSizeAnalytics(data);
          const dispatchHandler = self.getDispatchHandler(type);
          if (null != dispatchHandler) {
            dispatchHandler.dispatch(data, type, preloadedData);
          }
          const obj8 = GatewaySocketDispatcher(closure_2[6]);
          const result = obj8.logReadyPayloadReceived(self.socket, data, nowResult, compressionAnalytics, readyPayloadByteSizeAnalytics);
          const obj6 = GatewaySocketDispatcher(closure_2[6]);
        } else if ("RESUMED" === type) {
          const dispatchHandler1 = self.getDispatchHandler(type);
          if (null != dispatchHandler1) {
            dispatchHandler1.dispatch(data, type, preloadedData);
          }
          GatewaySocketDispatcher(closure_2[6]).logResumeAnalytics(self.resumeAnalytics);
          const socket = self.socket;
          const result1 = socket.handleResumeDispatched();
          const obj4 = GatewaySocketDispatcher(closure_2[6]);
          self.resumeAnalytics = GatewaySocketDispatcher(closure_2[6]).createResumeAnalytics();
          const obj5 = GatewaySocketDispatcher(closure_2[6]);
        } else {
          const dispatchHandler2 = self.getDispatchHandler(type);
          if (null != dispatchHandler2) {
            dispatchHandler2.dispatch(data, type, preloadedData);
          }
        }
        if (self.socket.connectionState === callback(closure_2[8]).RESUMING) {
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
}();
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/gateway/GatewaySocketDispatcher.tsx");

export default tmp8;
