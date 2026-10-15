// Module ID: 12361
// Function ID: 12362
// Dependencies: [12273, 12276, 12275, 12281]
// Exports: addConsoleInstrumentationHandler

// Module 12361
import _mod12273 from "module_12273" /* 12273 */;
import _mod12276 from "module_12276" /* 12276 */;

let tmp;
const _mod12275 = tmp(12275);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod12276.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12275.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12275.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            const obj = { args: items, level };
            const obj2 = level(closure_2_1[0]);
            obj2.triggerHandlers("console", obj);
            const obj3 = level(closure_2_1[2]).originalConsoleMethods[level];
            const tmp = level;
            const tmp2 = closure_2_1;
            if (obj3) {
              obj3.apply(tmp(tmp2[1]).GLOBAL_OBJ.console, items);
            }
          };
        });
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  const obj = _mod12273;
  obj.addHandler("console", arg0);
  const obj2 = _mod12273;
  obj2.maybeInstrument("console", instrumentConsole);
};
