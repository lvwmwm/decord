// Module ID: 13360
// Function ID: 13361
// Dependencies: [13272, 13275, 13274, 13280]
// Exports: addConsoleInstrumentationHandler

// Module 13360
import _mod13272 from "module_13272" /* 13272 */;
import _mod13275 from "module_13275" /* 13275 */;

let tmp;
const _mod13274 = tmp(13274);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod13275.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13274.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13274.originalConsoleMethods[level] = arg0;
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
  const obj = _mod13272;
  obj.addHandler("console", arg0);
  const obj2 = _mod13272;
  obj2.maybeInstrument("console", instrumentConsole);
}
