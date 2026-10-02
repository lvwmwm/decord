// Module ID: 12397
// Function ID: 12398
// Dependencies: [12309, 12312, 12311, 12317]
// Exports: addConsoleInstrumentationHandler

// Module 12397
import _mod12309 from "module_12309" /* 12309 */;
import _mod12312 from "module_12312" /* 12312 */;

let tmp;
const _mod12311 = tmp(12311);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod12312.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12311.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12311.originalConsoleMethods[level] = arg0;
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
  const obj = _mod12309;
  obj.addHandler("console", arg0);
  const obj2 = _mod12309;
  obj2.maybeInstrument("console", instrumentConsole);
};
