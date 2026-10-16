// Module ID: 11296
// Function ID: 11297
// Dependencies: [11208, 11211, 11210, 11216]
// Exports: addConsoleInstrumentationHandler

// Module 11296
import _mod11208 from "module_11208" /* 11208 */;
import _mod11211 from "module_11211" /* 11211 */;

let tmp;
const _mod11210 = tmp(11210);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod11211.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod11210.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod11210.originalConsoleMethods[level] = arg0;
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
  const obj = _mod11208;
  obj.addHandler("console", arg0);
  const obj2 = _mod11208;
  obj2.maybeInstrument("console", instrumentConsole);
};
