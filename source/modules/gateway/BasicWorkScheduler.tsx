// Module ID: 12575
// Function ID: 97322
// Name: BasicWorkScheduler
// Dependencies: [6, 7, 12573, 3, 12576, 44, 2]

// Module 12575 (BasicWorkScheduler)
import set from "set";
import _defineProperties from "_defineProperties";
import WorkIdleDeadline from "WorkIdleDeadline";
import importDefaultResult from "timestamp";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ MAX_DISPATCHER_FLUSH_DEADLINE_TRIES: closure_5, DISPATCHER_STANDARD_TIMEOUT_MS: closure_6, DISPATCHER_IDEAL_TIME_LIMIT_MS: closure_7, DISPATCHER_LONG_TIMEOUT_MS: closure_8 } = WorkIdleDeadline);
importDefaultResult = new importDefaultResult("DispatcherWorkScheduler");
const tmp5 = (() => {
  class BasicWorkScheduler {
    constructor() {
      tmp = outer1_3(this, BasicWorkScheduler);
      this._flushTimeoutHandler = null;
      this._flushIdleHandler = null;
      this._nextDispatchTimeout = outer1_6;
      this._workCallbackFn = null;
      this._consecutiveFlushesBeforeQueueEmpty = 0;
      this._isBackgrounded = false;
      this._enableRequestIdleCallback = true;
      this._criticalWorkScheduled = false;
      workSchedulerTelemetry = new BasicWorkScheduler(outer1_2[4]).WorkSchedulerTelemetry();
      this.telemetry = workSchedulerTelemetry;
      this._logger = outer1_9;
      return;
    }
  }
  let obj = {
    key: "_trackAppBackgrounded",
    value(_isBackgrounded) {
      const self = this;
      if (this._isBackgrounded !== _isBackgrounded) {
        self._isBackgrounded = _isBackgrounded;
        if (tmp) {
          const telemetry = self.telemetry;
          telemetry.track(BasicWorkScheduler(outer1_2[4]).WorkSchedulerTelemetryEvent.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED);
          self._processWorkCallback();
        }
        tmp = self._isBackgrounded && self.hasWorkScheduled;
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
      return this._consecutiveFlushesBeforeQueueEmpty >= outer1_5;
    }
  };
  items[4] = {
    key: "_processWorkCallback",
    value(arg0) {
      const self = this;
      if (null != this._workCallbackFn) {
        if (self._hasExceededMaxConsecutiveFlushes) {
          outer1_9.log("Unable to fully flush work queue after max retries, skipping future deadline.");
          self._workCallbackFn();
          self.clearWorkTimeout();
          const telemetry2 = self.telemetry;
          telemetry2.measure(BasicWorkScheduler(outer1_2[4]).WorkSchedulerTelemetryMeasurement.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, self._consecutiveFlushesBeforeQueueEmpty);
          const telemetry3 = self.telemetry;
          telemetry3.track(BasicWorkScheduler(outer1_2[4]).WorkSchedulerTelemetryEvent.EXCEEDED_MAX_CONSECUTIVE_FLUSHES);
          self._consecutiveFlushesBeforeQueueEmpty = 0;
          self._nextDispatchTimeout = outer1_8;
        } else {
          const _performance = performance;
          const _performance2 = performance;
          const nowResult = performance.now();
          const _workCallbackFnResult1 = self._workCallbackFn(arg0);
          self.clearWorkTimeout();
          self._nextDispatchTimeout = performance.now() - nowResult > outer1_7 ? outer1_8 : outer1_6;
          const _consecutiveFlushesBeforeQueueEmpty = self._consecutiveFlushesBeforeQueueEmpty;
          if (_workCallbackFnResult1) {
            if (_consecutiveFlushesBeforeQueueEmpty > 0) {
              const telemetry = self.telemetry;
              const _parseInt = parseInt;
              const _HermesInternal = HermesInternal;
              telemetry.measure(BasicWorkScheduler(outer1_2[4]).WorkSchedulerTelemetryMeasurement.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, parseInt("" + self._consecutiveFlushesBeforeQueueEmpty));
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
      self._nextDispatchTimeout = outer1_6;
      self._workCallbackFn = null;
    }
  };
  items[11] = {
    key: "requestWorkTimeout",
    value(_workCallbackFn) {
      let flag = arg1;
      let self = this;
      self = this;
      if (arg1 === undefined) {
        flag = false;
      }
      self._workCallbackFn = _workCallbackFn;
      if (!self.hasWorkScheduled) {
        let telemetry = self.telemetry;
        telemetry.time(BasicWorkScheduler(outer1_2[4]).WorkSchedulerTelemetryTiming.TIME_TO_QUEUE_EMPTY);
        if (self._nextDispatchTimeout === outer1_8) {
          const telemetry2 = self.telemetry;
          telemetry2.track(BasicWorkScheduler(outer1_2[4]).WorkSchedulerTelemetryEvent.LONGER_DISPATCH);
        }
        if (flag) {
          self._queueIdleCallback();
        } else {
          const _setTimeout = setTimeout;
          self._flushTimeoutHandler = setTimeout(() => {
            outer2_1(outer2_2[5])(null != self._workCallbackFn, "Work callback should be set");
            if (self._isBackgrounded) {
              const telemetry = obj.telemetry;
              telemetry.track(BasicWorkScheduler(outer2_2[4]).WorkSchedulerTelemetryEvent.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED);
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
})();
const result = require("WorkIdleDeadline").fileFinishedImporting("modules/gateway/BasicWorkScheduler.tsx");

export const BasicWorkScheduler = tmp5;
