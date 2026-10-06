// Module ID: 12666
// Function ID: 12667
// Dependencies: [12578, 12581, 12580, 12586]
// Exports: addConsoleInstrumentationHandler

// Module 12666
import _mod12578 from "module_12578" /* 12578 */;
import _mod12581 from "module_12581" /* 12581 */;

let tmp;
const _mod12580 = tmp(12580);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod12581.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12580.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12580.originalConsoleMethods[level] = arg0;
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
  const obj = _mod12578;
  obj.addHandler("console", arg0);
  const obj2 = _mod12578;
  obj2.maybeInstrument("console", instrumentConsole);
};
