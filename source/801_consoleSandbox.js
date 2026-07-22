// Module ID: 801
// Function ID: 9002
// Name: consoleSandbox
// Dependencies: []

// Module 801 (consoleSandbox)
function consoleSandbox(arg0) {
  if ("console" in arg1(closure_1[0]).GLOBAL_OBJ) {
    const arg1 = arg1(closure_1[0]).GLOBAL_OBJ.console;
    closure_1 = {};
    const _Object = Object;
    const keys = Object.keys(obj);
    const item = keys.forEach((arg0) => {
      closure_1[arg0] = console[arg0];
      console[arg0] = closure_2[arg0];
    });
    const item1 = keys.forEach((arg0) => {
      console[arg0] = closure_1[arg0];
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
  const arg1 = arg0;
  const length = arguments.length;
  let num = 0;
  if (length > 1) {
    num = length - 1;
  }
  const array = new Array(num);
  const arg6 = array;
  for (let num2 = 1; num2 < length; num2 = num2 + 1) {
    array[num2 - 1] = arguments[num2];
  }
  let DEBUG_BUILD = arg1(arg6[1]).DEBUG_BUILD;
  if (DEBUG_BUILD) {
    DEBUG_BUILD = isEnabled();
  }
  if (DEBUG_BUILD) {
    consoleSandbox(() => {
      const _console = arg0(array[0]).GLOBAL_OBJ.console;
      const items = ["Sentry Logger [" + arg0 + "]:"];
      _console[closure_0].apply(_console, items.concat(array));
    });
  }
}
function _getLoggerSettings() {
  if (arg1(arg6[1]).DEBUG_BUILD) {
    let globalSingleton = arg1(arg6[2]).getGlobalSingleton("loggerSettings", () => ({ enabled: false }));
    const obj2 = arg1(arg6[2]);
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
    const items = [null];
    _maybeLog.apply(undefined, items.concat(array));
  },
  warn() {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    const items = [null];
    _maybeLog.apply(undefined, items.concat(array));
  },
  error() {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    const items = [false];
    _maybeLog.apply(undefined, items.concat(array));
  }
};
arg5.CONSOLE_LEVELS = ["\u00D7", "annuleren", "teken", "vermenigvuldigen", "x", "Array", "UB2gG2"];
arg5.consoleSandbox = consoleSandbox;
arg5.debug = obj;
arg5.originalConsoleMethods = obj;
