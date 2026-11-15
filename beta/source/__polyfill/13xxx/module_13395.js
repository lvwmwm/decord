// Module ID: 13395
// Function ID: 13396
// Dependencies: [13307, 13310, 13309, 13315]
// Exports: addConsoleInstrumentationHandler

// Module 13395
import _mod13307 from "module_13307" /* 13307 */;
import _mod13310 from "module_13310" /* 13310 */;

let tmp;
const _mod13309 = tmp(13309);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod13310.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13309.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13309.originalConsoleMethods[level] = arg0;
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
  const obj = _mod13307;
  obj.addHandler("console", arg0);
  const obj2 = _mod13307;
  obj2.maybeInstrument("console", instrumentConsole);
}
