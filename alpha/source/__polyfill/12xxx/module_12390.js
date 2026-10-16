// Module ID: 12390
// Function ID: 12391
// Dependencies: [12302, 12305, 12304, 12310]
// Exports: addConsoleInstrumentationHandler

// Module 12390
import _mod12302 from "module_12302" /* 12302 */;
import _mod12305 from "module_12305" /* 12305 */;

let tmp;
const _mod12304 = tmp(12304);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod12305.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12304.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12304.originalConsoleMethods[level] = arg0;
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
  const obj = _mod12302;
  obj.addHandler("console", arg0);
  const obj2 = _mod12302;
  obj2.maybeInstrument("console", instrumentConsole);
};
