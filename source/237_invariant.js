// Module ID: 237
// Function ID: 3254
// Name: invariant
// Dependencies: [44]

// Module 237 (invariant)
const global = arg0;
const require = arg1;
const dependencyMap = arg6;
let closure_3 = { log: "log", info: "info", warn: "warn", error: "error", fatal: "error" };
let c4 = null;
const obj = {
  logIfNoNativeHook(arg0) {
    const length = arguments.length;
    let num = 0;
    if (length > 1) {
      num = length - 1;
    }
    const array = new Array(num);
    for (let num2 = 1; num2 < length; num2 = num2 + 1) {
      array[num2 - 1] = arguments[num2];
    }
    if (undefined === global.nativeLoggingHook) {
      const logToConsole = obj.logToConsole;
      const items = [arg0];
      logToConsole.apply(obj, items.concat(array));
    } else {
      let tmp2 = _null;
      if (_null) {
        tmp2 = "warn" === arg0;
      }
      if (tmp2) {
        _null.apply(undefined, array);
      }
    }
  },
  logToConsole(arg0) {
    let num = 0;
    const tmp2 = require(44) /* invariant */;
    tmp2(table[arg0], `${`Level "${arg0}`}" not one of ${Object.keys(table).toString()}`);
    const length = arguments.length;
    if (length > 1) {
      num = length - 1;
    }
    const array = new Array(num);
    for (let num2 = 1; num2 < length; num2 = num2 + 1) {
      array[num2 - 1] = arguments[num2];
    }
    console[table[arg0]].apply(console, array);
  },
  setWarningHandler(arg0) {
    let closure_4 = arg0;
  }
};
arg5.default = obj;
