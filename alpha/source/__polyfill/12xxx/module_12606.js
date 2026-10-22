// Module ID: 12606
// Function ID: 12607
// Dependencies: [12518, 12521, 12520, 12526]
// Exports: addConsoleInstrumentationHandler

// Module 12606
import _mod12518 from "module_12518" /* 12518 */;
import _mod12521 from "module_12521" /* 12521 */;

let tmp;
const _mod12520 = tmp(12520);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod12521.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12520.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12520.originalConsoleMethods[level] = arg0;
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
  const obj = _mod12518;
  obj.addHandler("console", arg0);
  const obj2 = _mod12518;
  obj2.maybeInstrument("console", instrumentConsole);
};
