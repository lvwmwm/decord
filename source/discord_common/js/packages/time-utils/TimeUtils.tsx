// Module ID: 4206
// Function ID: 36490
// Name: sleep
// Dependencies: [5, 153, 6, 7, 4207, 629, 4208, 2]
// Exports: getTimeAndUnit

// Module 4206 (sleep)
import module_629 from "module_629";
import "_readOnlyError";
import findLastIndex from "findLastIndex";
import set from "set";
import wrap from "wrap";

let require = arg1;
function sleep(asMilliseconds) {
  let asMillisecondsResult = asMilliseconds;
  if ("number" !== typeof asMilliseconds) {
    asMillisecondsResult = asMilliseconds.asMilliseconds();
  }
  const require = asMillisecondsResult;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    const timerId = setTimeout(() => callback(), closure_0);
  });
}
function convertMinutesToGivenTimeUnit(rounded, unit) {
  if (obj.NONE === unit) {
    return 0;
  } else if (obj.SECONDS === unit) {
    return 60 * rounded;
  } else if (obj.MINUTES === unit) {
    return rounded;
  } else if (obj.HOURS === unit) {
    return rounded / 60;
  } else if (obj.DAYS === unit) {
    return rounded / 60 / 24;
  } else if (obj.WEEKS === unit) {
    return rounded / 60 / 24 / 7;
  } else if (obj.MONTHS === unit) {
    return rounded / 60 / 24 / 31;
  } else if (obj.YEARS === unit) {
    return rounded / 60 / 24 / 365;
  }
}
function getTimeUnit(rounded, arg1) {
  let closure_0 = rounded;
  const importDefault = arg1;
  const tmp2 = importDefault(4208)(items, (unit) => callback(unit.unit), items.findIndex((max) => {
    max = max.max;
    let tmp = max.unit === outer1_11.NONE;
    if (tmp) {
      tmp = closure_0 === max;
    }
    if (!tmp) {
      tmp = closure_0 < max;
    }
    return tmp;
  }));
  if (null != tmp2) {
    return tmp2.unit;
  } else {
    const found = items.find((unit) => callback(unit.unit));
    let unit = null;
    if (null != found) {
      unit = found.unit;
    }
    return unit;
  }
  const findIndexResult = items.findIndex((max) => {
    max = max.max;
    let tmp = max.unit === outer1_11.NONE;
    if (tmp) {
      tmp = closure_0 === max;
    }
    if (!tmp) {
      tmp = closure_0 < max;
    }
    return tmp;
  });
}
function _now() {
  const _performance = require(629).performance;
  return Math.floor(require(629).timeOrigin + _performance.now());
}
let tmp5 = (() => {
  class TimeStampProducerImpl {
    constructor() {
      tmp = outer1_5(this, TimeStampProducerImpl);
      return;
    }
  }
  const items = [
    {
      key: "now",
      value() {
        return outer1_7();
      }
    }
  ];
  return callback2(TimeStampProducerImpl, items);
})();
tmp5 = new tmp5();
let closure_8 = tmp5;
const tmp7 = (() => {
  class TimeSpan {
    constructor(arg0, arg1, arg2, arg3) {
      num = arg0;
      num2 = arg1;
      num3 = arg2;
      num4 = arg3;
      self = this;
      self = this;
      tmp = outer1_5(this, self);
      this.milliseconds = 0;
      this.asMilliseconds = () => self.milliseconds;
      this.asSeconds = () => self.milliseconds / 1000;
      this.asMinutes = () => self.milliseconds / 1000 / 60;
      this.asHours = () => self.milliseconds / 1000 / 60 / 60;
      this.add = (milliseconds) => self.fromMilliseconds(self.milliseconds + milliseconds.milliseconds);
      this.subtract = (milliseconds) => self.fromMilliseconds(self.milliseconds - milliseconds.milliseconds);
      this.subtractOrZero = (milliseconds) => self.fromMilliseconds(Math.max(self.milliseconds - milliseconds.milliseconds, 0));
      if (!arg3) {
        num4 = 0;
      }
      self.milliseconds = this.milliseconds + num4;
      if (!num3) {
        num3 = 0;
      }
      self.milliseconds = self.milliseconds + 1000 * num3;
      if (!num2) {
        num2 = 0;
      }
      self.milliseconds = self.milliseconds + 60000 * num2;
      if (!num) {
        num = 0;
      }
      self.milliseconds = self.milliseconds + num * 3600000;
      return;
    }
  }
  let obj = {
    key: "isGreaterThan",
    value(milliseconds) {
      return this.milliseconds > milliseconds.milliseconds;
    }
  };
  const items = [obj, ];
  obj = {
    key: "isGreaterOrEqualTo",
    value(milliseconds) {
      return this.milliseconds >= milliseconds.milliseconds;
    }
  };
  items[1] = obj;
  return callback2(TimeSpan, items);
})();
let closure_9 = tmp7;
let closure_3 = tmp7;
tmp7.fromMilliseconds = (arg0) => new closure_3(0, 0, 0, arg0);
tmp7.fromSeconds = (arg0) => new closure_3(0, 0, arg0);
tmp7.fromMinutes = (arg0) => new closure_3(0, arg0);
tmp7.fromHours = (arg0) => new closure_3(arg0);
const tmp8 = (() => {
  class StopWatch {
    constructor() {
      tmp = arg0;
      self = this;
      if (arg0 === undefined) {
        tmp = outer1_8;
      }
      tmp2 = outer1_5(self, StopWatch);
      self.timestampProducer = tmp;
      self.startTime = undefined;
      self.timePassed = 0;
      return;
    }
  }
  let obj = {
    key: "lastElapsed",
    get() {
      return this.timePassed;
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "lastStartTime",
    get() {
      return this.startTime;
    }
  };
  items[1] = obj;
  obj = {
    key: "start",
    value() {
      const self = this;
      if (null == this.startTime) {
        const timestampProducer = self.timestampProducer;
        self.startTime = timestampProducer.now();
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "restart",
    value() {
      const timestampProducer = this.timestampProducer;
      this.startTime = timestampProducer.now();
    }
  };
  items[4] = {
    key: "reset",
    value() {
      this.startTime = undefined;
      this.timePassed = 0;
    }
  };
  items[5] = {
    key: "stop",
    value() {
      let timePassed;
      let timestampProducer;
      const self = this;
      if (null != this.startTime) {
        ({ timestampProducer, timePassed } = self);
        self.timePassed = timePassed + (timestampProducer.now() - self.startTime);
        self.startTime = undefined;
      }
    }
  };
  items[6] = {
    key: "toggle",
    value(arg0) {
      const self = this;
      if (arg0 !== this.isRunning()) {
        if (arg0) {
          self.start();
        } else {
          self.stop();
        }
      }
    }
  };
  items[7] = {
    key: "elapsed",
    value: function elapsed() {
      const self = this;
      if (null == this.startTime) {
        return outer1_9.fromMilliseconds(self.timePassed);
      } else {
        const timestampProducer = self.timestampProducer;
        return outer1_9.fromMilliseconds(self.timePassed + (timestampProducer.now() - self.startTime));
      }
    }
  };
  items[8] = {
    key: "isRunning",
    value() {
      return null != this.startTime;
    }
  };
  const items1 = [
    {
      key: "startNew",
      value() {
        const obj = new StopWatch();
        obj.start();
        return obj;
      }
    }
  ];
  return callback2(StopWatch, items, items1);
})();
let closure_10 = tmp8;
let tmp4 = (() => {
  class ControllableTimeStampProducer {
    constructor() {
      tmp = outer1_5(this, ControllableTimeStampProducer);
      this.time = 0;
      return;
    }
  }
  let obj = {
    key: "now",
    value() {
      return this.time;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "set",
    value(time) {
      this.time = time;
    }
  };
  items[1] = obj;
  obj = {
    key: "increase",
    value(arg0) {
      this.time = this.time + arg0;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "reset",
    value() {
      this.time = 0;
    }
  };
  return callback2(ControllableTimeStampProducer, items);
})();
let obj = { NONE: "NONE", SECONDS: "SECONDS", MINUTES: "MINUTES", HOURS: "HOURS", DAYS: "DAYS", WEEKS: "WEEKS", MONTHS: "MONTHS", YEARS: "YEARS" };
obj = { unit: obj.NONE, max: 0 };
let items = [obj, { unit: obj.SECONDS, max: 1 }, , , , , , ];
obj = { unit: obj.MINUTES, max: 60 };
items[2] = obj;
items[3] = { unit: obj.HOURS, max: 1440 };
items[4] = { unit: obj.DAYS, max: 44640 };
items[5] = { unit: obj.WEEKS, max: 40320 };
items[6] = { unit: obj.MONTHS, max: 525600 };
items[7] = { unit: obj.YEARS, max: Infinity };
let obj1 = { unit: obj.HOURS, max: 1440 };
const obj2 = { unit: obj.DAYS, max: 44640 };
const obj3 = { unit: obj.WEEKS, max: 40320 };
const obj4 = { unit: obj.MONTHS, max: 525600 };
const obj5 = { unit: obj.YEARS, max: Infinity };
const tmp9 = (() => {
  class DurationEnabled {
    constructor(arg0) {
      tmp = arg1;
      self = this;
      if (arg1 === undefined) {
        tmp = outer1_8;
      }
      tmp2 = outer1_5(self, DurationEnabled);
      tmp3 = new outer1_10(tmp);
      self.stopwatch = tmp3;
      self.state = arg0;
      stopwatch = self.stopwatch;
      toggleResult = stopwatch.toggle(arg0);
      return;
    }
  }
  let obj = {
    key: "value",
    get() {
      return this.state;
    },
    set(state) {
      const stopwatch = this.stopwatch;
      stopwatch.toggle(state);
      this.state = state;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "reset",
    value() {
      const stopwatch = this.stopwatch;
      stopwatch.reset();
      const stopwatch2 = this.stopwatch;
      stopwatch2.toggle(this.state);
    }
  };
  items[1] = obj;
  obj = {
    key: "totalDuration",
    value() {
      const stopwatch = this.stopwatch;
      return stopwatch.elapsed().asMilliseconds();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "totalDurationSeconds",
    value() {
      const stopwatch = this.stopwatch;
      return stopwatch.elapsed().asSeconds();
    }
  };
  return callback2(DurationEnabled, items);
})();
const tmp10 = (() => {
  class TimeOut {
    constructor(arg0) {
      tmp = outer1_5(this, TimeOut);
      this.timeout = arg0;
      tmp2 = new outer1_10();
      this.watch = tmp2;
      return;
    }
  }
  let obj = {
    key: "hasTimedOut",
    value() {
      const self = this;
      const watch = this.watch;
      if (watch.isRunning()) {
        const watch2 = self.watch;
        return watch2.elapsed().isGreaterOrEqualTo(self.timeout);
      } else {
        const _Error = Error;
        const error = new Error("`start` must be called before `hasTimedOut`");
        throw error;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "start",
    value() {
      const watch = this.watch;
      watch.start();
    }
  };
  items[1] = obj;
  obj = {
    key: "startNew",
    value(timeout) {
      const obj = new TimeOut(timeout);
      obj.start();
      return obj;
    }
  };
  const items1 = [obj, ];
  const obj1 = { key: "waitFor" };
  let closure_0 = callback(async (arg0, arg1) => {
    const fromMillisecondsResult = outer2_9.fromMilliseconds(100);
    let tmp2 = arg0;
    let sleep = fromMillisecondsResult;
    if (!(arg0 instanceof outer2_9)) {
      const timeout = arg0.timeout;
      tmp2 = timeout;
      sleep = fromMillisecondsResult;
      if (null != arg0.sleep) {
        sleep = arg0.sleep;
        tmp2 = timeout;
      }
    }
    while (true) {
      if (true === (yield arg1())) {
        break;
      } else {
        let tmp4 = outer2_13;
        let tmp5 = yield outer2_13(sleep);
        if (!startNewResult.hasTimedOut()) {
          continue;
        } else {
          let flag = false;
          return false;
        }
      }
    }
  });
  obj1.value = function waitFor(outer1_8, outer1_9, outer1_11, outer1_12, outer1_112, outer1_14, outer1_17, outer1_113, outer1_19, outer1_192, outer1_13, outer1_20, outer1_22, outer1_23, outer1_132, outer1_35, outer1_36, outer1_37, outer1_38, outer1_21, outer1_39, outer1_40) {
    return callback(...arguments);
  };
  items1[1] = obj1;
  return callback2(TimeOut, items, items1);
})();
const result = require("_classCallCheck").fileFinishedImporting("../discord_common/js/packages/time-utils/TimeUtils.tsx");

export const MS_PER_SECOND = 1000;
export const MS_PER_MINUTE = 60000;
export const MS_PER_HOUR = 3600000;
export const MS_PER_DAY = 86400000;
export const MS_PER_WEEK = 604800000;
export const now = _now;
export const ControllableTimeStampProducer = tmp4;
export const TimeStampProducer = tmp5;
export const TimeSpan = tmp7;
export const StopWatch = tmp8;
export const DurationEnabled = tmp9;
export const TimeOut = tmp10;
export { sleep };
export const TimeUnits = obj;
export { convertMinutesToGivenTimeUnit };
export const TimeUnitMax = items;
export { getTimeUnit };
export const getTimeAndUnit = function getTimeAndUnit(rounded, items) {
  let closure_0 = items;
  if (null == rounded) {
    let obj = {};
    obj.unit = obj.NONE;
    obj.time = 0;
    return obj;
  } else {
    const tmp2 = getTimeUnit(rounded, (arg0) => items.includes(arg0));
    let tmp3 = null;
    if (null != tmp2) {
      tmp3 = convertMinutesToGivenTimeUnit(rounded, tmp2);
    }
    obj = { unit: tmp2 };
    rounded = null;
    if (null != tmp3) {
      const _Math = Math;
      rounded = Math.floor(tmp3);
    }
    obj.time = rounded;
    return obj;
  }
};
