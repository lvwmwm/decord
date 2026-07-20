// Module ID: 20
// Function ID: 263
// Name: AppStartPerformance
// Dependencies: []

// Module 20 (AppStartPerformance)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let fn = globalThis.__getTotalRequireTime;
if (null == fn) {
  fn = () => 0;
}
let closure_4 = "undefined" !== typeof performance;
let tmp2 = () => {
  class AppStartPerformance {
    constructor() {
      tmp = AppStartPerformance(this, AppStartPerformance);
      this.isTracing_ = true;
      this.endTime_ = Date.now() + 15000;
      this.lastImportDuration = 0;
      obj = { index: 0, timestamp: Date.now(), logs: [], nativeLogs: [] };
      items = [];
      items[0] = obj;
      this.logGroups = items;
      this.logs = this.logGroups[0].logs;
      this.prefix = "";
      return;
    }
  }
  let closure_1 = AppStartPerformance;
  let obj = {
    key: "isTracing",
    get() {
      const self = this;
      let tmp = !closure_4;
      if (closure_4) {
        tmp = !self.isTracing_;
      }
      let tmp2 = !tmp;
      if (!tmp) {
        const _Date = Date;
        const tmp4 = Date.now() > self.endTime_;
        let flag = !tmp4;
        if (tmp4) {
          self.isTracing_ = false;
          flag = false;
        }
        tmp2 = flag;
      }
      return tmp2;
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "endTime",
    get() {
      return this.endTime_;
    },
    set(endTime_) {
      this.endTime_ = endTime_;
      this.isTracing_ = true;
    }
  };
  items[1] = obj;
  obj = {
    key: "resumeTracing",
    value() {
      const self = this;
      if (!this.isTracing) {
        const logGroups = self.logGroups;
        const obj = { index: self.logGroups.length };
        const _Date = Date;
        obj.timestamp = Date.now();
        obj.logs = [];
        obj.nativeLogs = [];
        logGroups.unshift(obj);
        self.logs = self.logGroups[0].logs;
      }
      self.endTime = Date.now() + 10000;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "mark",
    value(emoji, log, delta) {
      const self = this;
      if (this.isTracing) {
        const logs = self.logs;
        const obj = { emoji };
        const _HermesInternal = HermesInternal;
        obj.prefix = "" + self.prefix;
        obj.log = log;
        obj.delta = delta;
        const _Date = Date;
        obj.timestamp = Date.now();
        logs.push(obj);
        self.addImportLogDetail();
      }
    }
  };
  items[4] = {
    key: "markAndLog",
    value(log, emoji, log2, delta) {
      const self = this;
      log.log(log2);
      if (this.isTracing) {
        const logs = self.logs;
        const obj = { emoji, prefix: self.prefix, log: log2, delta };
        const _Date = Date;
        obj.timestamp = Date.now();
        logs.push(obj);
        self.addImportLogDetail();
      }
    }
  };
  items[5] = {
    key: "addImportLogDetail",
    value() {
      const self = this;
      const tmp = callback2();
      if (tmp - this.lastImportDuration > 25) {
        const _Math = Math;
        self.addDetail("JS Imports", `${Math.ceil(tmp)}ms`);
        self.lastImportDuration = tmp;
      }
    }
  };
  items[6] = {
    key: "markWithDelta",
    value(arg0, arg1) {
      const tmp = this.logs[this.logs.length - 1];
      let diff;
      if (null != tmp) {
        if (null != tmp.timestamp) {
          const _Date = Date;
          diff = Date.now() - tmp.timestamp;
        }
      }
      this.mark(arg0, arg1, diff);
    }
  };
  items[7] = {
    key: "markAt",
    value(emoji, log, timestamp) {
      const self = this;
      if (this.isTracing) {
        let num2 = 0;
        let num3 = 0;
        if (0 < self.logs.length) {
          while (true) {
            timestamp = self.logs[num2].timestamp;
            if (null == timestamp) {
              num2 = num2 + 1;
              num3 = num2;
              if (num2 >= self.logs.length) {
                break;
              }
            } else {
              num3 = num2;
              if (timestamp > timestamp) {
                break;
              }
            }
            break;
          }
        }
        const logs = self.logs;
        const obj = { emoji, log, timestamp };
        let prefix;
        if (null != self.logs[num3]) {
          prefix = tmp4.prefix;
        }
        let str = "";
        if (null != prefix) {
          str = prefix;
        }
        obj.prefix = str;
        logs.splice(num3, 0, obj);
      }
    }
  };
  items[8] = {
    key: "addDetail",
    value(arg0, arg1) {
      const self = this;
      if (this.isTracing) {
        const logs = self.logs;
        const obj = { emoji: self.logs[self.logs.length - 1].emoji, prefix: self.prefix };
        const _HermesInternal = HermesInternal;
        obj.log = "  \u21AA " + arg0 + " " + arg1;
        logs.push(obj);
      }
    }
  };
  items[9] = {
    key: "time",
    value(arg0, arg1, arg2) {
      let mark;
      let prefix;
      const self = this;
      if (this.isTracing) {
        const _HermesInternal = HermesInternal;
        ({ prefix, mark } = self);
        mark(arg0, "Start " + arg1);
        self.prefix = `${self.prefix}| `;
        const _Date = Date;
        const timestamp = Date.now();
        const _Date2 = Date;
        self.prefix = prefix;
        const _HermesInternal2 = HermesInternal;
        const diff = Date.now() - timestamp;
        self.mark(arg0, "Finish " + arg1, diff);
        return arg2();
      } else {
        return arg2();
      }
    }
  };
  const obj8 = { key: "timeAsync" };
  const callback = callback(async function(arg0, arg1, arg2) {
    const self = this;
    if (self.isTracing) {
      const _HermesInternal = HermesInternal;
      self.mark(arg0, "Start " + arg1);
      const _Date = Date;
      const timestamp = Date.now();
      const _Date2 = Date;
      const _HermesInternal2 = HermesInternal;
      const diff = Date.now() - timestamp;
      self.mark(arg0, "Finish " + arg1, diff);
      return yield arg2();
    } else {
      return arg2();
    }
  });
  obj8.value = function timeAsync(emoji, name, callback) {
    return callback(...arguments);
  };
  items[10] = obj8;
  items[11] = {
    key: "setServerTrace",
    value(serverTrace) {
      this.logGroups[0].serverTrace = serverTrace;
    }
  };
  return callback2(AppStartPerformance, items);
}();
tmp2 = new tmp2();
const result = arg1(dependencyMap[3]).fileFinishedImporting("../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx");

export default tmp2;
