// Module ID: 11294
// Function ID: 11295
// Dependencies: [11206, 11209, 11208, 11214]
// Exports: addConsoleInstrumentationHandler

// Module 11294
import _mod11206 from "module_11206" /* 11206 */;
import _mod11209 from "module_11209" /* 11209 */;

let tmp;
const _mod11208 = tmp(11208);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod11209.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod11208.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod11208.originalConsoleMethods[level] = arg0;
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
  const obj = _mod11206;
  obj.addHandler("console", arg0);
  const obj2 = _mod11206;
  obj2.maybeInstrument("console", instrumentConsole);
};
