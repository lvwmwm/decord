// Module ID: 12456
// Function ID: 95138
// Name: BasicWorkScheduler
// Dependencies: []

// Module 12456 (BasicWorkScheduler)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ MAX_DISPATCHER_FLUSH_DEADLINE_TRIES: closure_5, DISPATCHER_STANDARD_TIMEOUT_MS: closure_6, DISPATCHER_IDEAL_TIME_LIMIT_MS: closure_7, DISPATCHER_LONG_TIMEOUT_MS: closure_8 } = arg1(dependencyMap[2]));
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult("DispatcherWorkScheduler");
const tmp2 = arg1(dependencyMap[2]);
const tmp5 = () => {
  class BasicWorkScheduler {
    constructor() {
      tmp = closure_3(this, BasicWorkScheduler);
      this._flushTimeoutHandler = null;
      this._flushIdleHandler = null;
      this._nextDispatchTimeout = closure_6;
      this._workCallbackFn = null;
      this._consecutiveFlushesBeforeQueueEmpty = 0;
      this._isBackgrounded = false;
      this._enableRequestIdleCallback = true;
      this._criticalWorkScheduled = false;
      workSchedulerTelemetry = new BasicWorkScheduler(closure_2[4]).WorkSchedulerTelemetry();
      this.telemetry = workSchedulerTelemetry;
      this._logger = closure_9;
      return;
    }
  }
  const arg1 = BasicWorkScheduler;
  let obj = {
    key: "_trackAppBackgrounded",
    value(_isBackgrounded) {
      const self = this;
      if (this._isBackgrounded !== _isBackgrounded) {
        self._isBackgrounded = _isBackgrounded;
        if (tmp) {
          const telemetry = self.telemetry;
          telemetry.track(BasicWorkScheduler(closure_2[4]).WorkSchedulerTelemetryEvent.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED);
          self._processWorkCallback();
        }
        const tmp = self._isBackgrounded && self.hasWorkScheduled;
      }
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "_queueIdleCallback",
    value() {
      const error = new Error("Not implemented");
      throw error;
    }
  };
  items[1] = obj;
  obj = {
    key: "_clearIdleCallback",
    value() {
      const error = new Error("Not implemented");
      throw error;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_hasExceededMaxConsecutiveFlushes",
    get() {
      return this._consecutiveFlushesBeforeQueueEmpty >= closure_5;
    }
  };
  items[4] = {
    key: "_processWorkCallback",
    value(arg0) {
      const self = this;
      if (null != this._workCallbackFn) {
        if (self._hasExceededMaxConsecutiveFlushes) {
          closure_9.log("Unable to fully flush work queue after max retries, skipping future deadline.");
          self._workCallbackFn();
          self.clearWorkTimeout();
          const telemetry2 = self.telemetry;
          telemetry2.measure(BasicWorkScheduler(closure_2[4]).WorkSchedulerTelemetryMeasurement.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, self._consecutiveFlushesBeforeQueueEmpty);
          const telemetry3 = self.telemetry;
          telemetry3.track(BasicWorkScheduler(closure_2[4]).WorkSchedulerTelemetryEvent.EXCEEDED_MAX_CONSECUTIVE_FLUSHES);
          self._consecutiveFlushesBeforeQueueEmpty = 0;
          self._nextDispatchTimeout = closure_8;
        } else {
          const _performance = performance;
          const _performance2 = performance;
          const nowResult = performance.now();
          const _workCallbackFnResult1 = self._workCallbackFn(arg0);
          self.clearWorkTimeout();
          self._nextDispatchTimeout = performance.now() - nowResult > closure_7 ? closure_8 : closure_6;
          const _consecutiveFlushesBeforeQueueEmpty = self._consecutiveFlushesBeforeQueueEmpty;
          if (_workCallbackFnResult1) {
            if (_consecutiveFlushesBeforeQueueEmpty > 0) {
              const telemetry = self.telemetry;
              const _parseInt = parseInt;
              const _HermesInternal = HermesInternal;
              telemetry.measure(BasicWorkScheduler(closure_2[4]).WorkSchedulerTelemetryMeasurement.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, parseInt("" + self._consecutiveFlushesBeforeQueueEmpty));
            }
            self._consecutiveFlushesBeforeQueueEmpty = 0;
            self._criticalWorkScheduled = false;
          } else {
            self._consecutiveFlushesBeforeQueueEmpty = _consecutiveFlushesBeforeQueueEmpty + 1;
          }
          const nowResult1 = performance.now();
        }
      }
    }
  };
  items[5] = {
    key: "markCriticalWorkScheduled",
    value() {
      const self = this;
      this._criticalWorkScheduled = true;
      if (null != this._flushIdleHandler) {
        self._clearIdleCallback();
        self._processWorkCallback();
      }
    }
  };
  items[6] = {
    key: "toggleRequestIdleCallback",
    value(_enableRequestIdleCallback) {
      const self = this;
      this._enableRequestIdleCallback = _enableRequestIdleCallback;
      if (tmp) {
        self._clearIdleCallback();
        self._processWorkCallback();
      }
    }
  };
  items[7] = {
    key: "isBackgrounded",
    get() {
      return this._isBackgrounded;
    }
  };
  items[8] = {
    key: "hasWorkScheduled",
    get() {
      return null != this._flushTimeoutHandler || null != this._flushIdleHandler;
    }
  };
  items[9] = {
    key: "isRequestIdleCallbackEnabled",
    get() {
      return this._enableRequestIdleCallback;
    }
  };
  items[10] = {
    key: "clearWorkTimeout",
    value() {
      const self = this;
      if (null != this._flushTimeoutHandler) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._flushTimeoutHandler);
        self._flushTimeoutHandler = null;
      }
      self._clearIdleCallback();
      self._nextDispatchTimeout = closure_6;
      self._workCallbackFn = null;
    }
  };
  items[11] = {
    key: "requestWorkTimeout",
    value(_workCallbackFn) {
      let flag = arg1;
      const self = this;
      const BasicWorkScheduler = this;
      if (arg1 === undefined) {
        flag = false;
      }
      self._workCallbackFn = _workCallbackFn;
      if (!self.hasWorkScheduled) {
        const telemetry = self.telemetry;
        telemetry.time(BasicWorkScheduler(closure_2[4]).WorkSchedulerTelemetryTiming.TIME_TO_QUEUE_EMPTY);
        if (self._nextDispatchTimeout === closure_8) {
          const telemetry2 = self.telemetry;
          telemetry2.track(BasicWorkScheduler(closure_2[4]).WorkSchedulerTelemetryEvent.LONGER_DISPATCH);
        }
        if (flag) {
          self._queueIdleCallback();
        } else {
          const _setTimeout = setTimeout;
          self._flushTimeoutHandler = setTimeout(() => {
            callback(closure_2[5])(null != self._workCallbackFn, "Work callback should be set");
            if (self._isBackgrounded) {
              const telemetry = obj.telemetry;
              telemetry.track(self(closure_2[4]).WorkSchedulerTelemetryEvent.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED);
              return obj._processWorkCallback();
            } else {
              obj._queueIdleCallback();
            }
          }, self._nextDispatchTimeout);
        }
      }
    }
  };
  return callback(BasicWorkScheduler, items);
}();
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/gateway/BasicWorkScheduler.tsx");

export const BasicWorkScheduler = tmp5;
