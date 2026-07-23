// Module ID: 801
// Function ID: 9003
// Name: consoleSandbox
// Dependencies: [798, 800, 802]

// Module 801 (consoleSandbox)
const require = arg1;
let dependencyMap = arg6;
function consoleSandbox(arg0) {
  if ("console" in console(798).GLOBAL_OBJ) {
    console = console(798).GLOBAL_OBJ.console;
    const dependencyMap = {};
    const _Object = Object;
    const keys = Object.keys(obj);
    const item = keys.forEach((arg0) => {
      closure_1[arg0] = console[arg0];
      console[arg0] = outer1_2[arg0];
    });
    const item1 = keys.forEach((arg0) => {
      console[arg0] = table[arg0];
    });
    return arg0();
  } else {
    return arg0();
  }
}
function isEnabled() {
  return _getLoggerSettings().enabled;
}
function _maybeLog(arg0) {
  const _require = arg0;
  const length = arguments.length;
  let num = 0;
  if (length > 1) {
    num = length - 1;
  }
  const array = new Array(num);
  for (let num2 = 1; num2 < length; num2 = num2 + 1) {
    array[num2 - 1] = arguments[num2];
  }
  let DEBUG_BUILD = _require(array[1]).DEBUG_BUILD;
  if (DEBUG_BUILD) {
    DEBUG_BUILD = isEnabled();
  }
  if (DEBUG_BUILD) {
    consoleSandbox(() => {
      const _console = callback(array[0]).GLOBAL_OBJ.console;
      const items = ["Sentry Logger [" + callback + "]:"];
      _console[callback].apply(_console, items.concat(array));
    });
  }
}
function _getLoggerSettings() {
  if (require(800).DEBUG_BUILD) {
    let globalSingleton = require(802) /* getSentryCarrier */.getGlobalSingleton("loggerSettings", () => ({ enabled: false }));
    const obj2 = require(802) /* getSentryCarrier */;
  } else {
    globalSingleton = { enabled: false };
  }
  return globalSingleton;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let obj = {};
obj = {
  enable() {
    _getLoggerSettings().enabled = true;
  },
  disable() {
    _getLoggerSettings().enabled = false;
  },
  isEnabled,
  log() {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    const items = ["log"];
    _maybeLog.apply(undefined, items.concat(array));
  },
  warn() {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    const items = ["warn"];
    _maybeLog.apply(undefined, items.concat(array));
  },
  error() {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    const items = ["error"];
    _maybeLog.apply(undefined, items.concat(array));
  }
};
arg5.CONSOLE_LEVELS = ["debug", "info", "warn", "error", "log", "assert", "trace"];
arg5.consoleSandbox = consoleSandbox;
arg5.debug = obj;
arg5.originalConsoleMethods = obj;
