// Module ID: 12399
// Function ID: 12400
// Dependencies: [12311, 12314, 12313, 12319]
// Exports: addConsoleInstrumentationHandler

// Module 12399
import _mod12311 from "module_12311" /* 12311 */;
import _mod12314 from "module_12314" /* 12314 */;

let tmp;
const _mod12313 = tmp(12313);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod12314.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12313.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12313.originalConsoleMethods[level] = arg0;
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
  const obj = _mod12311;
  obj.addHandler("console", arg0);
  const obj2 = _mod12311;
  obj2.maybeInstrument("console", instrumentConsole);
};
