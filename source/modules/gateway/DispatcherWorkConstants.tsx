// Module ID: 12573
// Function ID: 97304
// Name: WorkIdleDeadline
// Dependencies: [6, 7, 2]

// Module 12573 (WorkIdleDeadline)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class WorkIdleDeadline {
    constructor(arg0) {
      flag = arg1;
      self = this;
      if (arg1 === undefined) {
        flag = false;
      }
      tmp = WorkIdleDeadline(self, WorkIdleDeadline);
      self._deadlineMs = Math.max(2.0833333333333335, arg0);
      self._browserDeadlineMs = arg0;
      self._firedDueToMaxTimeout = flag;
      self._startMs = performance.now();
      return;
    }
  }
  let obj = {
    key: "timeRemaining",
    value() {
      return Math.max(0, this._deadlineMs - (performance.now() - this._startMs));
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "didTimeout",
    get() {
      return this._firedDueToMaxTimeout;
    }
  };
  items[1] = obj;
  obj = {
    key: "timeSinceExpiration",
    get() {
      return performance.now() - (this._startMs + this._deadlineMs);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "generateDeadlineMetrics",
    value() {
      const obj = { isDeadlineNotIdeal: this._browserDeadlineMs < 2.0833333333333335, deadlineMs: _deadlineMs.toFixed(2) };
      _deadlineMs = this._deadlineMs;
      const diff = performance.now() - this._startMs;
      obj.timeSinceStartMs = diff.toFixed(2);
      return obj;
    }
  };
  return callback(WorkIdleDeadline, items);
})();
const result = require("set").fileFinishedImporting("modules/gateway/DispatcherWorkConstants.tsx");

export const DISPATCHER_STANDARD_TIMEOUT_MS = 50;
export const DISPATCHER_IDEAL_TIME_LIMIT_MS = 50;
export const DISPATCHER_MIN_DEADLINE_TIME_MS = 2.0833333333333335;
export const DISPATCHER_DEADLINE_OVERHEAD_MS = 3.3333333333333335;
export const NATIVE_WORK_DEADLINE_MS = 5.555555555555556;
export const NATIVE_WORK_BACKOFF_MS = 4.166666666666667;
export const DISPATCHER_LONG_TIMEOUT_MS = 200;
export const MAX_DISPATCHER_TIMEOUT_MS = 1000;
export const MAX_DISPATCHER_FLUSH_DEADLINE_TRIES = 2;
export const DISPATCHER_CALLBACK_MAX_TIME_REMAINING_MS = 50;
export const WorkIdleDeadline = tmp2;
