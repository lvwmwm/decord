// Module ID: 12939
// Function ID: 12940
// Dependencies: [12851, 12854, 12853, 12859]
// Exports: addConsoleInstrumentationHandler

// Module 12939
import _mod12851 from "module_12851" /* 12851 */;
import _mod12854 from "module_12854" /* 12854 */;

let tmp;
const _mod12853 = tmp(12853);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod12854.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12853.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12853.originalConsoleMethods[level] = arg0;
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
  const obj = _mod12851;
  obj.addHandler("console", arg0);
  const obj2 = _mod12851;
  obj2.maybeInstrument("console", instrumentConsole);
}
