// Module ID: 13140
// Function ID: 13141
// Dependencies: [13052, 13055, 13054, 13060]
// Exports: addConsoleInstrumentationHandler

// Module 13140
import _mod13052 from "module_13052" /* 13052 */;
import _mod13055 from "module_13055" /* 13055 */;

let tmp;
const _mod13054 = tmp(13054);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod13055.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13054.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13054.originalConsoleMethods[level] = arg0;
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

export function addConsoleInstrumentationHandler(arg0) {
  const obj = _mod13052;
  obj.addHandler("console", arg0);
  const obj2 = _mod13052;
  obj2.maybeInstrument("console", instrumentConsole);
}
