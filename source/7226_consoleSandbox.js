// Module ID: 7226
// Function ID: 58189
// Name: consoleSandbox
// Dependencies: []

// Module 7226 (consoleSandbox)
function consoleSandbox(arg0) {
  if ("console" in require(closure_1[0]).GLOBAL_OBJ) {
    const require = require(closure_1[0]).GLOBAL_OBJ.console;
    closure_1 = {};
    const _Object = Object;
    const keys = Object.keys(obj);
    const item = keys.forEach((arg0) => {
      closure_1[arg0] = console[arg0];
      console[arg0] = closure_3[arg0];
    });
    const item1 = keys.forEach((arg0) => {
      console[arg0] = closure_1[arg0];
    });
    return arg0();
  } else {
    return arg0();
  }
}
const items = [];
const obj = {};
const _module = require(dependencyMap[0]);

export const CONSOLE_LEVELS = items;
export { consoleSandbox };
export const logger = _module.getGlobalSingleton("logger", function makeLogger() {
  const callback = false;
  const obj = {
    enable() {
      let closure_0 = true;
    },
    disable() {
      let closure_0 = false;
    },
    isEnabled() {
      return closure_0;
    }
  };
  const dependencyMap = obj;
  const forEach = items.forEach;
  if (callback(dependencyMap[1]).DEBUG_BUILD) {
    const item = forEach((arg0) => {
      let closure_0 = arg0;
      obj[arg0] = () => {
        const length = arguments.length;
        const array = new Array(length);
        const arg0 = array;
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arguments[num];
        }
        if (arg0) {
          callback(() => {
            const _console = array(closure_1[0]).GLOBAL_OBJ.console;
            const items = ["Sentry Logger [" + array + "]:"];
            _console[closure_0].apply(_console, items.concat(array));
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
export const originalConsoleMethods = obj;
