// Module ID: 9816
// Function ID: 9817
// Dependencies: [9728, 9731, 9730, 9736]
// Exports: addConsoleInstrumentationHandler

// Module 9816
import _mod9728 from "module_9728" /* 9728 */;
import _mod9731 from "module_9731" /* 9731 */;

let tmp;
const _mod9730 = tmp(9730);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod9731.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod9730.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod9730.originalConsoleMethods[level] = arg0;
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
  const obj = _mod9728;
  obj.addHandler("console", arg0);
  const obj2 = _mod9728;
  obj2.maybeInstrument("console", instrumentConsole);
}
