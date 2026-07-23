// Module ID: 4
// Function ID: 109
// Name: log
// Dependencies: [5, 6, 7, 11, 2]
// Exports: defaultLogFn, setLogFn, setNativeLogFn

// Module 4 (log)
import asyncGeneratorStep from "asyncGeneratorStep";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
function log() {

}
function nativeLog() {

}
const tmp2 = (() => {
  class Logger {
    constructor() {
      str = arg0;
      self = this;
      self = this;
      if (arg0 === undefined) {
        str = "default";
      }
      tmp = outer1_3(self, self);
      self.logDangerously = (arg0, arg1) => {
        const substr = [...arguments].slice();
        outer2_5("log", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != outer2_6) {
            const items = [self.name, "log", arg0];
            HermesBuiltin.arraySpread(substr, 3);
            HermesBuiltin.apply(items, undefined);
          }
        }
      };
      self.log = (arg0, arg1) => {
        const substr = [...arguments].slice();
        const items = [arg0, ...substr];
        Logger(outer2_1[3]).checkLogForPII.apply(items);
        outer2_5("log", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != outer2_6) {
            const items1 = [self.name, "log", arg0];
            HermesBuiltin.arraySpread(substr, 3);
            HermesBuiltin.apply(items1, undefined);
          }
        }
      };
      self.verboseDangerously = (arg0, arg1) => {
        const substr = [...arguments].slice();
        outer2_5("debug", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != outer2_6) {
            const items = [self.name, "debug", arg0];
            HermesBuiltin.arraySpread(substr, 3);
            HermesBuiltin.apply(items, undefined);
          }
        }
      };
      self.verbose = (arg0, arg1) => {
        const substr = [...arguments].slice();
        const items = [arg0, ...substr];
        Logger(outer2_1[3]).checkLogForPII.apply(items);
        outer2_5("debug", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != outer2_6) {
            const items1 = [self.name, "debug", arg0];
            HermesBuiltin.arraySpread(substr, 3);
            HermesBuiltin.apply(items1, undefined);
          }
        }
      };
      self.info = (arg0, arg1) => {
        const substr = [...arguments].slice();
        const items = [arg0, ...substr];
        Logger(outer2_1[3]).checkLogForPII.apply(items);
        outer2_5("info", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != outer2_6) {
            const items1 = [self.name, "info", arg0];
            HermesBuiltin.arraySpread(substr, 3);
            HermesBuiltin.apply(items1, undefined);
          }
        }
      };
      self.warn = (arg0, arg1) => {
        const substr = [...arguments].slice();
        const items = [arg0, ...substr];
        Logger(outer2_1[3]).checkLogForPII.apply(items);
        outer2_5("warn", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != outer2_6) {
            const items1 = [self.name, "warn", arg0];
            HermesBuiltin.arraySpread(substr, 3);
            HermesBuiltin.apply(items1, undefined);
          }
        }
      };
      self.error = (arg0, arg1) => {
        const substr = [...arguments].slice();
        const items = [arg0, ...substr];
        Logger(outer2_1[3]).checkLogForPII.apply(items);
        outer2_5("error", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != outer2_6) {
            const items1 = [self.name, "error", arg0];
            HermesBuiltin.arraySpread(substr, 3);
            HermesBuiltin.apply(items1, undefined);
          }
        }
      };
      self.trace = (arg0, arg1) => {
        const substr = [...arguments].slice();
        outer2_5("trace", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != outer2_6) {
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
      self.timeAsync = (() => {
        let closure_0 = outer2_2(async (arg0, arg1) => {
          const timestamp = Date.now();
          outer2_1.log(arg0, `${Date.now() - tmp}ms`);
          return yield arg1();
        });
        return function() {
          return callback(...arguments);
        };
      })();
      self.fileOnly = (arg0, arg1) => {
        const substr = [...arguments].slice();
        outer2_5("file-only", arg0, ...substr);
        if (self.nativeLoggerEnabled) {
          if (null != outer2_6) {
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
  let items = [
    {
      key: "enableNativeLogger",
      value(nativeLoggerEnabled) {
        this.nativeLoggerEnabled = nativeLoggerEnabled;
      }
    }
  ];
  return callback(Logger, items);
})();
const result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/logger/Logger.tsx");

export function setLogFn(arg0) {
  let closure_5 = arg0;
}
export function setNativeLogFn(arg0) {
  let closure_6 = arg0;
}
export const defaultLogFn = function defaultLogFn(arg0, arg1, arg2, arg3) {
  const substr = [...arguments].slice();
};
export const Logger = tmp2;
