// Module ID: 12092
// Function ID: 12093
// Dependencies: [12004, 12007, 12006, 12012]
// Exports: addConsoleInstrumentationHandler

// Module 12092
import _mod12004 from "module_12004" /* 12004 */;
import _mod12007 from "module_12007" /* 12007 */;

let tmp;
const _mod12006 = tmp(12006);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod12007.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12006.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12006.originalConsoleMethods[level] = arg0;
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
  const obj = _mod12004;
  obj.addHandler("console", arg0);
  const obj2 = _mod12004;
  obj2.maybeInstrument("console", instrumentConsole);
};
