// Module ID: 12627
// Function ID: 97659
// Name: WorkSchedulerTelemetry
// Dependencies: [57, 6, 7, 22, 2]

// Module 12627 (WorkSchedulerTelemetry)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
let obj = { LONGER_DISPATCH: "longer_dispatch", EXCEEDED_MAX_CONSECUTIVE_FLUSHES: "exceeded_max_consecutive_flushes", FIRED_DUE_TO_MAX_TIMEOUT: "fired_due_to_max_timeout", SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED: "skip_idle_callback_due_to_backgrounded" };
obj = { TIME_TO_FIRE_IDLE_CALLBACK: "time_to_fire_idle_callback", TIME_TO_QUEUE_EMPTY: "time_to_flush_all_work", TIME_OVER_DEADLINE: "time_over_deadline", DEADLINE_INITIAL_TIME_REMAINING: "initial_time_of_deadline" };
obj = { COUNT_DISPATCHES_LEFT_AFTER_YIELD: "count_dispatches_left_after_yield", COUNT_FLUSH_BEFORE_QUEUE_EMPTY: "count_flush_before_queue_empty", COUNT_INITIAL_DISPATCHS_LENGTH: "count_initial_dispatches_length" };
let closure_5 = Object.freeze({ [obj.TIME_TO_FIRE_IDLE_CALLBACK]: null, [obj.TIME_TO_QUEUE_EMPTY]: null, [obj.TIME_OVER_DEADLINE]: null, [obj.DEADLINE_INITIAL_TIME_REMAINING]: null });
let closure_6 = Object.freeze({ [obj.TIME_TO_FIRE_IDLE_CALLBACK]: [0, 0], [obj.TIME_TO_QUEUE_EMPTY]: [0, 0], [obj.TIME_OVER_DEADLINE]: [0, 0], [obj.DEADLINE_INITIAL_TIME_REMAINING]: [0, 0] });
let closure_7 = Object.freeze({ [obj.COUNT_FLUSH_BEFORE_QUEUE_EMPTY]: [0, 0], [obj.COUNT_DISPATCHES_LEFT_AFTER_YIELD]: [0, 0], [obj.COUNT_INITIAL_DISPATCHS_LENGTH]: [0, 0] });
let closure_8 = Object.freeze({ [obj.LONGER_DISPATCH]: 0, [obj.EXCEEDED_MAX_CONSECUTIVE_FLUSHES]: 0, [obj.FIRED_DUE_TO_MAX_TIMEOUT]: 0, [obj.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED]: 0 });
let tmp2 = (() => {
  class WorkSchedulerTelemetry {
    constructor() {
      tmp = outer1_3(this, WorkSchedulerTelemetry);
      obj = WorkSchedulerTelemetry(outer1_1[3]);
      this._timeTracking = obj.cloneDeep(outer1_5);
      obj2 = WorkSchedulerTelemetry(outer1_1[3]);
      this._timingStats = obj2.cloneDeep(outer1_6);
      obj3 = WorkSchedulerTelemetry(outer1_1[3]);
      this._measurements = obj3.cloneDeep(outer1_7);
      obj4 = WorkSchedulerTelemetry(outer1_1[3]);
      this._eventCounts = obj4.cloneDeep(outer1_8);
      this._enabled = false;
      return;
    }
  }
  let obj = {
    key: "reset",
    value() {
      this._timeTracking = WorkSchedulerTelemetry(outer1_1[3]).cloneDeep(outer1_5);
      const obj = WorkSchedulerTelemetry(outer1_1[3]);
      this._timingStats = WorkSchedulerTelemetry(outer1_1[3]).cloneDeep(outer1_6);
      const obj2 = WorkSchedulerTelemetry(outer1_1[3]);
      this._measurements = WorkSchedulerTelemetry(outer1_1[3]).cloneDeep(outer1_7);
      const obj3 = WorkSchedulerTelemetry(outer1_1[3]);
      this._eventCounts = WorkSchedulerTelemetry(outer1_1[3]).cloneDeep(outer1_8);
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "clearTime",
    value(arg0) {
      this._timeTracking[arg0] = null;
    }
  };
  items[1] = obj;
  obj = {
    key: "_storeTimeValue",
    value(arg0, arg1) {
      const tmp = outer1_2(this._timingStats[arg0], 2);
      const items = [(tmp[0] * tmp[1] + arg1) / (tmp[1] + 1), tmp[1] + 1];
      this._timingStats[arg0] = items;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "time",
    value(arg0) {
      if (this._enabled) {
        const _performance = performance;
        this._timeTracking[arg0] = performance.now();
      }
    }
  };
  items[4] = {
    key: "timeEnd",
    value(arg0) {
      const self = this;
      if (this._enabled) {
        if (null != self._timeTracking[arg0]) {
          const _performance = performance;
          self._storeTimeValue(arg0, performance.now() - tmp);
          self._timeTracking[arg0] = null;
        }
      }
    }
  };
  items[5] = {
    key: "timeTrack",
    value(arg0, arg1) {
      const self = this;
      if (this._enabled) {
        self._storeTimeValue(arg0, arg1);
      }
    }
  };
  items[6] = {
    key: "measure",
    value(arg0, arg1) {
      const self = this;
      if (this._enabled) {
        const tmp2 = outer1_2(self._measurements[arg0], 2);
        const items = [(tmp2[0] * tmp2[1] + arg1) / (tmp2[1] + 1), tmp2[1] + 1];
        self._measurements[arg0] = items;
      }
    }
  };
  items[7] = {
    key: "track",
    value(arg0) {
      if (this._enabled) {
        const _eventCounts = this._eventCounts;
        _eventCounts[arg0] = _eventCounts[arg0] + 1;
      }
    }
  };
  items[8] = {
    key: "toggleTelemetry",
    value(_enabled) {
      this._enabled = _enabled;
    }
  };
  items[9] = {
    key: "isTelemetryEnabled",
    get() {
      return this._enabled;
    }
  };
  items[10] = {
    key: "generateTelemetry",
    value() {
      const entries = Object.entries(this._timingStats);
      const reduced = entries.reduce((arg0, arg1) => {
        let tmp;
        [tmp, ] = arg1;
        const combined = "avg_" + tmp;
        arg0[combined] = "" + obj.toFixed(2) + "ms";
        return arg0;
      }, {});
      const entries1 = Object.entries(this._measurements);
      const reduced1 = entries1.reduce((arg0, arg1) => {
        let tmp;
        [tmp, ] = arg1;
        const combined = "avg_" + tmp;
        arg0[combined] = "" + obj.toFixed(2);
        return arg0;
      }, {});
      const entries2 = Object.entries(this._eventCounts);
      const merged = Object.assign(entries2.reduce((arg0, arg1) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg1;
        const combined = "count_" + tmp;
        arg0[combined] = "" + tmp2;
        return arg0;
      }, {}));
      const merged1 = Object.assign(reduced);
      const merged2 = Object.assign(reduced1);
      return {};
    }
  };
  return callback(WorkSchedulerTelemetry, items);
})();
const result = require("_defineProperties").fileFinishedImporting("modules/gateway/WorkSchedulerTelemetry.tsx");

export const WorkSchedulerTelemetryEvent = obj;
export const WorkSchedulerTelemetryTiming = obj;
export const WorkSchedulerTelemetryMeasurement = obj;
export const WorkSchedulerTelemetry = tmp2;
