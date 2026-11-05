// Module ID: 13367
// Function ID: 13368
// Dependencies: [13279, 13282, 13281, 13287]
// Exports: addConsoleInstrumentationHandler

// Module 13367
import _mod13279 from "module_13279" /* 13279 */;
import _mod13282 from "module_13282" /* 13282 */;

let tmp;
const _mod13281 = tmp(13281);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod13282.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13281.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13281.originalConsoleMethods[level] = arg0;
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
  const obj = _mod13279;
  obj.addHandler("console", arg0);
  const obj2 = _mod13279;
  obj2.maybeInstrument("console", instrumentConsole);
}
