// Module ID: 12509
// Function ID: 12510
// Dependencies: [12421, 12424, 12423, 12429]
// Exports: addConsoleInstrumentationHandler

// Module 12509
import _mod12421 from "module_12421" /* 12421 */;
import _mod12424 from "module_12424" /* 12424 */;

let tmp;
const _mod12423 = tmp(12423);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod12424.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12423.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12423.originalConsoleMethods[level] = arg0;
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
  const obj = _mod12421;
  obj.addHandler("console", arg0);
  const obj2 = _mod12421;
  obj2.maybeInstrument("console", instrumentConsole);
};
