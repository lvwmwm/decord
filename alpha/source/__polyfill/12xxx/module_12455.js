// Module ID: 12455
// Function ID: 12456
// Dependencies: [12367, 12370, 12369, 12375]
// Exports: addConsoleInstrumentationHandler

// Module 12455
import _mod12367 from "module_12367" /* 12367 */;
import _mod12370 from "module_12370" /* 12370 */;

let tmp;
const _mod12369 = tmp(12369);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod12370.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12369.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12369.originalConsoleMethods[level] = arg0;
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
  const obj = _mod12367;
  obj.addHandler("console", arg0);
  const obj2 = _mod12367;
  obj2.maybeInstrument("console", instrumentConsole);
};
