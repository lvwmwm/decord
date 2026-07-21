// Module ID: 13227
// Function ID: 100368
// Name: logger
// Dependencies: []

// Module 13227 (logger)
arg5.assertHasLoggerPlugin = undefined;
arg5.default = undefined;
arg5.hasLoggerPlugin = undefined;
arg5.default = function logger(arg0) {
  return (arg0) => {
    const features = {
      log() {
        const length = arguments.length;
        const arr = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          arr[num] = arguments[num];
        }
        let first = arr;
        if (1 === arr.length) {
          first = arr[0];
        }
        const obj = { level: "debug", message: first };
        arg0.send("log", obj, false);
      },
      logImportant() {
        const length = arguments.length;
        const arr = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          arr[num] = arguments[num];
        }
        let first = arr;
        if (1 === arr.length) {
          first = arr[0];
        }
        const obj = { level: "debug", message: first };
        arg0.send("log", obj, true);
      },
      debug(message) {
        return message.send("log", { level: "debug", message }, arguments.length > 1 && undefined !== arguments[1] && arguments[1]);
      },
      warn(message) {
        return message.send("log", { level: "warn", message }, true);
      },
      error(message, stack) {
        return message.send("log", { level: "error", message, stack }, true);
      }
    };
    return { features };
  };
};
function hasLoggerPlugin(log) {
  let tmp = log;
  if (log) {
    tmp = "log" in log;
  }
  if (tmp) {
    tmp = "function" === typeof log.log;
  }
  if (tmp) {
    tmp = "logImportant" in log;
  }
  if (tmp) {
    tmp = "function" === typeof log.logImportant;
  }
  if (tmp) {
    tmp = "debug" in log;
  }
  if (tmp) {
    tmp = "function" === typeof log.debug;
  }
  if (tmp) {
    tmp = "warn" in log;
  }
  if (tmp) {
    tmp = "function" === typeof log.warn;
  }
  if (tmp) {
    tmp = "error" in log;
  }
  if (tmp) {
    tmp = "function" === typeof log.error;
  }
  return tmp;
}
arg5.hasLoggerPlugin = hasLoggerPlugin;
arg5.assertHasLoggerPlugin = function assertHasLoggerPlugin(log) {
  if (!hasLoggerPlugin(log)) {
    const _Error = Error;
    const error = new Error("This Reactotron client has not had the logger plugin applied to it. Make sure that you add `use(logger())` before adding this plugin.");
    throw error;
  }
};
