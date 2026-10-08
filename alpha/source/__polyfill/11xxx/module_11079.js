// Module ID: 11079
// Function ID: 11080
// Dependencies: [10991, 10994, 10993, 10999]
// Exports: addConsoleInstrumentationHandler

// Module 11079
import _mod10991 from "module_10991" /* 10991 */;
import _mod10994 from "module_10994" /* 10994 */;

let tmp;
const _mod10993 = tmp(10993);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod10994.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod10993.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod10993.originalConsoleMethods[level] = arg0;
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
  const obj = _mod10991;
  obj.addHandler("console", arg0);
  const obj2 = _mod10991;
  obj2.maybeInstrument("console", instrumentConsole);
};
