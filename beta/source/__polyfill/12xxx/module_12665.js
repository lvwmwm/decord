// Module ID: 12665
// Function ID: 12666
// Dependencies: [12577, 12580, 12579, 12585]
// Exports: addConsoleInstrumentationHandler

// Module 12665
import _mod12577 from "module_12577" /* 12577 */;
import _mod12580 from "module_12580" /* 12580 */;

let tmp;
const _mod12579 = tmp(12579);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod12580.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12579.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12579.originalConsoleMethods[level] = arg0;
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
  const obj = _mod12577;
  obj.addHandler("console", arg0);
  const obj2 = _mod12577;
  obj2.maybeInstrument("console", instrumentConsole);
};
