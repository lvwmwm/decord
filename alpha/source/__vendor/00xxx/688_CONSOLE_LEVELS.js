// Module ID: 688
// Function ID: 689
// Name: CONSOLE_LEVELS
// Dependencies: [685, 687, 689]

// Module 688 (CONSOLE_LEVELS)
import _mod685 from "module_685" /* 685 */;
import _mod687 from "module_687" /* 687 */;

const require = globalThis.__r;
let _require, dependencyMap;

let tmp;
const _mod689 = tmp(689);
const f78842 = () => ({ enabled: false });
function consoleSandbox(fn) {
  let closure_1;
  let console;
  const f78840 = (item) => {
    console[item] = closure_1[item];
  };
  const tmp = console;
  if ("console" in console(685).GLOBAL_OBJ) {
    console = tmp(685).GLOBAL_OBJ.console;
    dependencyMap = {};
    const _Object = Object;
    const keys = Object.keys(obj);
    const item = keys.forEach((item) => {
      closure_1[item] = console[item];
      console[item] = obj[item];
    });
    try {
      const tmp6 = fn();
      const item1 = keys.forEach(f78840);
      return tmp6;
    } catch (tmp8) {
      const item2 = keys.forEach(f78840);
      throw tmp8;
    }
  } else {
    return fn();
  }
}
function _maybeLog(arg0) {
  let args;
  let closure_0;
  _require = arg0;
  dependencyMap = [...arguments].slice();
  let enabled = require("module_687").DEBUG_BUILD;
  if (enabled) {
    let globalSingleton;
    if (require("module_687").DEBUG_BUILD) {
      const tmpResult = require("module_689");
      globalSingleton = tmpResult.getGlobalSingleton("loggerSettings", f78842);
    } else {
      globalSingleton = { enabled: false };
    }
    enabled = globalSingleton.enabled;
  }
  if (enabled) {
    consoleSandbox(() => {
      const _console = _mod685.GLOBAL_OBJ.console;
      const obj = _console[closure_0];
      const items = ["Sentry Logger [" + closure_0 + "]:", ...closure_1];
      obj.apply(items);
    });
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const originalConsoleMethods = {};
const obj2 = {
  enable() {
    let globalSingleton;
    if (_mod687.DEBUG_BUILD) {
      const tmpResult = _mod689;
      globalSingleton = tmpResult.getGlobalSingleton("loggerSettings", f78842);
    } else {
      globalSingleton = { enabled: false };
    }
    globalSingleton.enabled = true;
  },
  disable() {
    let globalSingleton;
    if (_mod687.DEBUG_BUILD) {
      const tmpResult = _mod689;
      globalSingleton = tmpResult.getGlobalSingleton("loggerSettings", f78842);
    } else {
      globalSingleton = { enabled: false };
    }
    globalSingleton.enabled = false;
  },
  isEnabled() {
    let globalSingleton;
    if (_mod687.DEBUG_BUILD) {
      const tmpResult = _mod689;
      globalSingleton = tmpResult.getGlobalSingleton("loggerSettings", f78842);
    } else {
      globalSingleton = { enabled: false };
    }
    return globalSingleton.enabled;
  },
  log() {
    _maybeLog(...HermesBuiltin.copyRestArgs());
  },
  warn() {
    _maybeLog(...HermesBuiltin.copyRestArgs());
  },
  error() {
    _maybeLog(...HermesBuiltin.copyRestArgs());
  }
};

export const CONSOLE_LEVELS = ["debug", "info", "warn", "error", "log", "assert", "trace"];
export { consoleSandbox };
export const debug = obj2;
export { originalConsoleMethods };
