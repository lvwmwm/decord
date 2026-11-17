// Module ID: 9896
// Function ID: 9897
// Dependencies: [9808, 9811, 9810, 9816]
// Exports: addConsoleInstrumentationHandler

// Module 9896
import _mod9808 from "module_9808" /* 9808 */;
import _mod9811 from "module_9811" /* 9811 */;

let tmp;
const _mod9810 = tmp(9810);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod9811.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod9810.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod9810.originalConsoleMethods[level] = arg0;
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
  const obj = _mod9808;
  obj.addHandler("console", arg0);
  const obj2 = _mod9808;
  obj2.maybeInstrument("console", instrumentConsole);
}
