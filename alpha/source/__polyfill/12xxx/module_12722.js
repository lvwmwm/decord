// Module ID: 12722
// Function ID: 12723
// Dependencies: [12634, 12637, 12636, 12642]
// Exports: addConsoleInstrumentationHandler

// Module 12722
import _mod12634 from "module_12634" /* 12634 */;
import _mod12637 from "module_12637" /* 12637 */;

let tmp;
const _mod12636 = tmp(12636);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod12637.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12636.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12636.originalConsoleMethods[level] = arg0;
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
  const obj = _mod12634;
  obj.addHandler("console", arg0);
  const obj2 = _mod12634;
  obj2.maybeInstrument("console", instrumentConsole);
};
