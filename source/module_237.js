// Module ID: 237
// Function ID: 3254
// Dependencies: []

// Module 237
let closure_3 = { "Null": -1286537215, "Bool(true)": 1676436110, "Bool(true)": 21335377, BRAND_COLOR_PRIMARY: 4, animatedStyle: 4 };
let closure_4 = null;
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
    if (undefined === arg0.nativeLoggingHook) {
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
    const tmp2 = arg1(arg6[0]);
    tmp2(closure_3[arg0], `${`Level "${arg0}`}" not one of ${Object.keys(closure_3).toString()}`);
    const length = arguments.length;
    if (length > 1) {
      num = length - 1;
    }
    const array = new Array(num);
    for (let num2 = 1; num2 < length; num2 = num2 + 1) {
      array[num2 - 1] = arguments[num2];
    }
    console[closure_3[arg0]].apply(console, array);
  },
  setWarningHandler(arg0) {
    let closure_4 = arg0;
  }
};
arg5.default = obj;
