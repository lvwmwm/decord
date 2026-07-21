// Module ID: 4202
// Function ID: 36451
// Name: sleep
// Dependencies: []
// Exports: getTimeAndUnit

// Module 4202 (sleep)
function sleep(asMilliseconds) {
  let asMillisecondsResult = asMilliseconds;
  if ("number" !== typeof asMilliseconds) {
    asMillisecondsResult = asMilliseconds.asMilliseconds();
  }
  const arg1 = asMillisecondsResult;
  return new Promise((arg0) => {
    const timerId = setTimeout(() => arg0(), arg0);
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
  arg1 = rounded;
  const importDefault = arg1;
  const tmp2 = importDefault(dependencyMap[6])(items, (unit) => arg1(unit.unit), items.findIndex((max) => {
    max = max.max;
    let tmp = max.unit === constants.NONE;
    if (tmp) {
      tmp = max === max;
    }
    if (!tmp) {
      tmp = max < max;
    }
    return tmp;
  }));
  if (null != tmp2) {
    return tmp2.unit;
  } else {
    const found = items.find((unit) => arg1(unit.unit));
    let unit = null;
    if (null != found) {
      unit = found.unit;
    }
    return unit;
  }
  const findIndexResult = items.findIndex((max) => {
    max = max.max;
    let tmp = max.unit === constants.NONE;
    if (tmp) {
      tmp = max === max;
    }
    if (!tmp) {
      tmp = max < max;
    }
    return tmp;
  });
}
let closure_4 = importDefault(dependencyMap[0]);
importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
arg1(dependencyMap[4]);
function _now() {
  const _performance = arg1(dependencyMap[5]).performance;
  return Math.floor(arg1(dependencyMap[5]).timeOrigin + _performance.now());
}
let tmp5 = () => {
  class TimeStampProducerImpl {
    constructor() {
      tmp = closure_5(this, TimeStampProducerImpl);
      return;
    }
  }
  const arg1 = TimeStampProducerImpl;
  const items = [
    {
      key: "now",
      value() {
        return callback2();
      }
    }
  ];
  return callback2(TimeStampProducerImpl, items);
}();
tmp5 = new tmp5();
const tmp7 = () => {
  class TimeSpan {
    constructor(arg0, arg1, arg2, arg3) {
      num = arg0;
      num2 = arg1;
      num3 = arg2;
      num4 = arg3;
      self = this;
      TimeSpan = this;
      tmp = closure_5(this, TimeSpan);
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
  const arg1 = TimeSpan;
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
}();
tmp7.fromMilliseconds = (arg0) => new tmp7(0, 0, 0, arg0);
tmp7.fromSeconds = (arg0) => new tmp7(0, 0, arg0);
tmp7.fromMinutes = (arg0) => new tmp7(0, arg0);
tmp7.fromHours = (arg0) => new tmp7(arg0);
const tmp8 = () => {
  class StopWatch {
    constructor() {
      tmp = arg0;
      self = this;
      if (arg0 === undefined) {
        tmp = closure_8;
      }
      tmp2 = closure_5(self, StopWatch);
      self.timestampProducer = tmp;
      self.startTime = undefined;
      self.timePassed = 0;
      return;
    }
  }
  const arg1 = StopWatch;
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
        return closure_9.fromMilliseconds(self.timePassed);
      } else {
        const timestampProducer = self.timestampProducer;
        return closure_9.fromMilliseconds(self.timePassed + (timestampProducer.now() - self.startTime));
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
}();
const tmp4 = () => {
  class ControllableTimeStampProducer {
    constructor() {
      tmp = closure_5(this, ControllableTimeStampProducer);
      this.time = 0;
      return;
    }
  }
  const arg1 = ControllableTimeStampProducer;
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
}();
let obj = { NONE: "NONE", SECONDS: "SECONDS", MINUTES: "MINUTES", HOURS: "HOURS", DAYS: "DAYS", WEEKS: "WEEKS", MONTHS: "MONTHS", YEARS: "YEARS" };
obj = { unit: obj.NONE, max: 0 };
const items = [obj, { unit: obj.SECONDS, max: 1 }, , , , , , ];
obj = { unit: obj.MINUTES, max: 60 };
items[2] = obj;
items[3] = { unit: obj.HOURS, max: 1440 };
items[4] = { unit: obj.DAYS, max: 44640 };
items[5] = { unit: obj.WEEKS, max: 40320 };
items[6] = { unit: obj.MONTHS, max: 525600 };
items[7] = { unit: obj.YEARS, max: Infinity };
const obj1 = { unit: obj.HOURS, max: 1440 };
const obj2 = { unit: obj.DAYS, max: 44640 };
const obj3 = { unit: obj.WEEKS, max: 40320 };
const obj4 = { unit: obj.MONTHS, max: 525600 };
const obj5 = { unit: obj.YEARS, max: Infinity };
const tmp9 = () => {
  class DurationEnabled {
    constructor(arg0) {
      tmp = arg1;
      self = this;
      if (arg1 === undefined) {
        tmp = closure_8;
      }
      tmp2 = closure_5(self, DurationEnabled);
      tmp3 = new closure_10(tmp);
      self.stopwatch = tmp3;
      self.state = arg0;
      stopwatch = self.stopwatch;
      toggleResult = stopwatch.toggle(arg0);
      return;
    }
  }
  const arg1 = DurationEnabled;
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
}();
const tmp10 = () => {
  class TimeOut {
    constructor(arg0) {
      tmp = closure_5(this, TimeOut);
      this.timeout = arg0;
      tmp2 = new closure_10();
      this.watch = tmp2;
      return;
    }
  }
  const importDefault = TimeOut;
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
    const fromMillisecondsResult = closure_9.fromMilliseconds(100);
    let tmp2 = arg0;
    let sleep = fromMillisecondsResult;
    if (!(arg0 instanceof closure_9)) {
      const timeout = arg0.timeout;
      tmp2 = timeout;
      sleep = fromMillisecondsResult;
      if (null != arg0.sleep) {
        sleep = arg0.sleep;
        tmp2 = timeout;
      }
    }
    while (true) {
      if (true === yield arg1()) {
        break;
      } else {
        let tmp4 = closure_13;
        let tmp5 = yield closure_13(sleep);
        if (!startNewResult.hasTimedOut()) {
          continue;
        } else {
          let flag = false;
          return false;
        }
      }
    }
  });
  obj1.value = function waitFor(closure_8, closure_9, closure_11, closure_12, closure_112, closure_14, closure_17, closure_113, closure_19, closure_192, closure_13, closure_20, closure_22, closure_23, closure_132, closure_35, closure_36, closure_37, closure_38, closure_21, closure_39, closure_40) {
    return callback(...arguments);
  };
  items1[1] = obj1;
  return callback2(TimeOut, items, items1);
}();
const result = arg1(dependencyMap[7]).fileFinishedImporting("../discord_common/js/packages/time-utils/TimeUtils.tsx");

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
  if (null == rounded) {
    let obj = {};
    obj.unit = obj.NONE;
    obj.time = 0;
    return obj;
  } else {
    const tmp2 = getTimeUnit(rounded, (arg0) => arg1.includes(arg0));
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
