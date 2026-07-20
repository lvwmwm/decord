// Module ID: 4
// Function ID: 109
// Name: log
// Dependencies: []
// Exports: defaultLogFn, setLogFn, setNativeLogFn

// Module 4 (log)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
function log() {

}
function nativeLog() {

}
const tmp2 = () => {
  class Logger {
    constructor() {
      str = arg0;
      self = this;
      Logger = this;
      if (arg0 === undefined) {
        str = "default";
      }
      tmp = closure_3(self, Logger);
      self.logDangerously = (arg0, arg1) => {
        const substr = [...arguments].slice();
        callback2("log", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != closure_6) {
            const items = [self.name, "log", arg0];
            HermesBuiltin.arraySpread(substr, 3);
            HermesBuiltin.apply(items, undefined);
          }
        }
      };
      self.log = (arg0, arg1) => {
        const substr = [...arguments].slice();
        const items = [arg0, ...substr];
        self(self[3]).checkLogForPII.apply(items);
        callback2("log", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != closure_6) {
            const items1 = [self.name, "log", arg0];
            HermesBuiltin.arraySpread(substr, 3);
            HermesBuiltin.apply(items1, undefined);
          }
        }
      };
      self.verboseDangerously = (arg0, arg1) => {
        const substr = [...arguments].slice();
        callback2("debug", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != closure_6) {
            const items = [self.name, "debug", arg0];
            HermesBuiltin.arraySpread(substr, 3);
            HermesBuiltin.apply(items, undefined);
          }
        }
      };
      self.verbose = (arg0, arg1) => {
        const substr = [...arguments].slice();
        const items = [arg0, ...substr];
        self(self[3]).checkLogForPII.apply(items);
        callback2("debug", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != closure_6) {
            const items1 = [self.name, "debug", arg0];
            HermesBuiltin.arraySpread(substr, 3);
            HermesBuiltin.apply(items1, undefined);
          }
        }
      };
      self.info = (arg0, arg1) => {
        const substr = [...arguments].slice();
        const items = [arg0, ...substr];
        self(self[3]).checkLogForPII.apply(items);
        callback2("info", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != closure_6) {
            const items1 = [self.name, "info", arg0];
            HermesBuiltin.arraySpread(substr, 3);
            HermesBuiltin.apply(items1, undefined);
          }
        }
      };
      self.warn = (arg0, arg1) => {
        const substr = [...arguments].slice();
        const items = [arg0, ...substr];
        self(self[3]).checkLogForPII.apply(items);
        callback2("warn", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != closure_6) {
            const items1 = [self.name, "warn", arg0];
            HermesBuiltin.arraySpread(substr, 3);
            HermesBuiltin.apply(items1, undefined);
          }
        }
      };
      self.error = (arg0, arg1) => {
        const substr = [...arguments].slice();
        const items = [arg0, ...substr];
        self(self[3]).checkLogForPII.apply(items);
        callback2("error", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != closure_6) {
            const items1 = [self.name, "error", arg0];
            HermesBuiltin.arraySpread(substr, 3);
            HermesBuiltin.apply(items1, undefined);
          }
        }
      };
      self.trace = (arg0, arg1) => {
        const substr = [...arguments].slice();
        callback2("trace", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != closure_6) {
            const items = [self.name, "trace", arg0];
            HermesBuiltin.arraySpread(substr, 3);
            HermesBuiltin.apply(items, undefined);
          }
        }
      };
      self.time = (arg0, arg1) => {
        const timestamp = Date.now();
        self.log(arg0, Date.now() - timestamp);
        return arg1();
      };
      self.timeAsync = () => {
        let closure_0 = callback(async (arg0, arg1) => {
          const timestamp = Date.now();
          closure_1.log(arg0, `${Date.now() - tmp}ms`);
          return yield arg1();
        });
        return function() {
          return callback(...arguments);
        };
      }();
      self.fileOnly = (arg0, arg1) => {
        const substr = [...arguments].slice();
        callback2("file-only", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != closure_6) {
            const items = [self.name, "file-only", arg0];
            HermesBuiltin.arraySpread(substr, 3);
            HermesBuiltin.apply(items, undefined);
          }
        }
      };
      self.name = str;
      self.nativeLoggerEnabled = false;
      return;
    }
  }
  const arg1 = Logger;
  const items = [
    {
      key: "enableNativeLogger",
      value(nativeLoggerEnabled) {
        this.nativeLoggerEnabled = nativeLoggerEnabled;
      }
    }
  ];
  return callback(Logger, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("../discord_common/js/packages/logger/Logger.tsx");

export function setLogFn(arg0) {
  const log = arg0;
}
export function setNativeLogFn(arg0) {
  const nativeLog = arg0;
}
export const defaultLogFn = function defaultLogFn(arg0, arg1, arg2, arg3) {
  const substr = [...arguments].slice();
};
export const Logger = tmp2;
