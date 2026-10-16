// Module ID: 12304
// Function ID: 12305
// Dependencies: [12305, 12303]

// Module 12304
import GLOBAL_OBJ from "module_12305" /* 12305 */;

const require = globalThis.__r;
let _require, c0, dependencyMap;

function consoleSandbox(fn) {
  let closure_1;
  let console;
  const f112605 = (item) => {
    console[item] = closure_1[item];
  };
  const tmp = console;
  if ("console" in console(12305).GLOBAL_OBJ) {
    console = tmp(12305).GLOBAL_OBJ.console;
    dependencyMap = {};
    const _Object = Object;
    const keys = Object.keys(obj);
    const item = keys.forEach((item) => {
      closure_1[item] = console[item];
      console[item] = obj[item];
    });
    try {
      const tmp6 = fn();
      const item1 = keys.forEach(f112605);
      return tmp6;
    } catch (tmp8) {
      const item2 = keys.forEach(f112605);
      throw tmp8;
    }
  } else {
    return fn();
  }
}
let items = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const originalConsoleMethods = {};

export const CONSOLE_LEVELS = items;
export { consoleSandbox };
export const logger = GLOBAL_OBJ.getGlobalSingleton("logger", function makeLogger() {
  _require = false;
  let obj = {
    enable() {
      c0 = true;
    },
    disable() {
      c0 = false;
    },
    isEnabled() {
      return c0;
    }
  };
  let tmp = items;
  const forEach = items.forEach;
  if (require("module_12303").DEBUG_BUILD) {
    const item = forEach((arg0) => {
      let closure_0 = arg0;
      obj[arg0] = () => {
        const args = [...arguments];
        const tmp = args;
        if (tmp) {
          consoleSandbox(() => {
            const _console = GLOBAL_OBJ.GLOBAL_OBJ.console;
            obj = _console[args];
            items = ["Sentry Logger [" + args + "]:", ...closure_0];
            obj.apply(items);
          });
        }
      };
    });
  } else {
    const item1 = forEach((arg0) => {
      obj[arg0] = () => {

      };
    });
  }
  return obj;
});
export { originalConsoleMethods };
