// Module ID: 11253
// Function ID: 11254
// Dependencies: [11165, 11168, 11167, 11173]
// Exports: addConsoleInstrumentationHandler

// Module 11253
import _mod11165 from "module_11165" /* 11165 */;
import _mod11168 from "module_11168" /* 11168 */;

let tmp;
const _mod11167 = tmp(11167);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod11168.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod11167.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod11167.originalConsoleMethods[level] = arg0;
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
  const obj = _mod11165;
  obj.addHandler("console", arg0);
  const obj2 = _mod11165;
  obj2.maybeInstrument("console", instrumentConsole);
};
