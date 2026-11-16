// Module ID: 13396
// Function ID: 13397
// Dependencies: [13308, 13311, 13310, 13316]
// Exports: addConsoleInstrumentationHandler

// Module 13396
import _mod13308 from "module_13308" /* 13308 */;
import _mod13311 from "module_13311" /* 13311 */;

let tmp;
const _mod13310 = tmp(13310);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod13311.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13310.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13310.originalConsoleMethods[level] = arg0;
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
  const obj = _mod13308;
  obj.addHandler("console", arg0);
  const obj2 = _mod13308;
  obj2.maybeInstrument("console", instrumentConsole);
}
