// Module ID: 13359
// Function ID: 13360
// Dependencies: [13271, 13274, 13273, 13279]
// Exports: addConsoleInstrumentationHandler

// Module 13359
import _mod13271 from "module_13271" /* 13271 */;
import _mod13274 from "module_13274" /* 13274 */;

let tmp;
const _mod13273 = tmp(13273);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod13274.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13273.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13273.originalConsoleMethods[level] = arg0;
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
  const obj = _mod13271;
  obj.addHandler("console", arg0);
  const obj2 = _mod13271;
  obj2.maybeInstrument("console", instrumentConsole);
}
