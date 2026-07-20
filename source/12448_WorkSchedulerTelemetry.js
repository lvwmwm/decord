// Module ID: 12448
// Function ID: 95109
// Name: WorkSchedulerTelemetry
// Dependencies: []

// Module 12448 (WorkSchedulerTelemetry)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let obj = { LONGER_DISPATCH: "longer_dispatch", EXCEEDED_MAX_CONSECUTIVE_FLUSHES: "exceeded_max_consecutive_flushes", FIRED_DUE_TO_MAX_TIMEOUT: "fired_due_to_max_timeout", SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED: "skip_idle_callback_due_to_backgrounded" };
obj = { TIME_TO_FIRE_IDLE_CALLBACK: "time_to_fire_idle_callback", TIME_TO_QUEUE_EMPTY: "time_to_flush_all_work", TIME_OVER_DEADLINE: "time_over_deadline", DEADLINE_INITIAL_TIME_REMAINING: "initial_time_of_deadline" };
obj = { COUNT_DISPATCHES_LEFT_AFTER_YIELD: "count_dispatches_left_after_yield", COUNT_FLUSH_BEFORE_QUEUE_EMPTY: "count_flush_before_queue_empty", COUNT_INITIAL_DISPATCHS_LENGTH: "count_initial_dispatches_length" };
let closure_5 = Object.freeze({ [obj.TIME_TO_FIRE_IDLE_CALLBACK]: null, [obj.TIME_TO_QUEUE_EMPTY]: null, [obj.TIME_OVER_DEADLINE]: null, [obj.DEADLINE_INITIAL_TIME_REMAINING]: null });
let closure_6 = Object.freeze({ [obj.TIME_TO_FIRE_IDLE_CALLBACK]: [1390895572, -255068174], [obj.TIME_TO_QUEUE_EMPTY]: [1390895572, -255068174], [obj.TIME_OVER_DEADLINE]: [1390895572, -255068174], [obj.DEADLINE_INITIAL_TIME_REMAINING]: [1390895572, -255068174] });
let closure_7 = Object.freeze({ [obj.COUNT_FLUSH_BEFORE_QUEUE_EMPTY]: [1390895572, -255068174], [obj.COUNT_DISPATCHES_LEFT_AFTER_YIELD]: [1390895572, -255068174], [obj.COUNT_INITIAL_DISPATCHS_LENGTH]: [1390895572, -255068174] });
let closure_8 = Object.freeze({ [obj.LONGER_DISPATCH]: 0, [obj.EXCEEDED_MAX_CONSECUTIVE_FLUSHES]: 0, [obj.FIRED_DUE_TO_MAX_TIMEOUT]: 0, [obj.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED]: 0 });
const tmp2 = () => {
  class WorkSchedulerTelemetry {
    constructor() {
      tmp = closure_3(this, WorkSchedulerTelemetry);
      obj = WorkSchedulerTelemetry(closure_1[3]);
      this._timeTracking = obj.cloneDeep(closure_5);
      obj2 = WorkSchedulerTelemetry(closure_1[3]);
      this._timingStats = obj2.cloneDeep(closure_6);
      obj3 = WorkSchedulerTelemetry(closure_1[3]);
      this._measurements = obj3.cloneDeep(closure_7);
      obj4 = WorkSchedulerTelemetry(closure_1[3]);
      this._eventCounts = obj4.cloneDeep(closure_8);
      this._enabled = false;
      return;
    }
  }
  const arg1 = WorkSchedulerTelemetry;
  let obj = {
    key: "reset",
    value() {
      this._timeTracking = WorkSchedulerTelemetry(closure_1[3]).cloneDeep(closure_5);
      const obj = WorkSchedulerTelemetry(closure_1[3]);
      this._timingStats = WorkSchedulerTelemetry(closure_1[3]).cloneDeep(closure_6);
      const obj2 = WorkSchedulerTelemetry(closure_1[3]);
      this._measurements = WorkSchedulerTelemetry(closure_1[3]).cloneDeep(closure_7);
      const obj3 = WorkSchedulerTelemetry(closure_1[3]);
      this._eventCounts = WorkSchedulerTelemetry(closure_1[3]).cloneDeep(closure_8);
    }
  };
  const items = [obj, , , , , , , , , , ];
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
      const tmp = callback(this._timingStats[arg0], 2);
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
        const tmp2 = callback(self._measurements[arg0], 2);
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
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/gateway/WorkSchedulerTelemetry.tsx");

export const WorkSchedulerTelemetryEvent = obj;
export const WorkSchedulerTelemetryTiming = obj;
export const WorkSchedulerTelemetryMeasurement = obj;
export const WorkSchedulerTelemetry = tmp2;
