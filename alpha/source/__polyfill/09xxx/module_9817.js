// Module ID: 9817
// Function ID: 9818
// Dependencies: [9729, 9732, 9731, 9737]
// Exports: addConsoleInstrumentationHandler

// Module 9817
import _mod9729 from "module_9729" /* 9729 */;
import _mod9732 from "module_9732" /* 9732 */;

let tmp;
const _mod9731 = tmp(9731);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod9732.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod9731.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod9731.originalConsoleMethods[level] = arg0;
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
  const obj = _mod9729;
  obj.addHandler("console", arg0);
  const obj2 = _mod9729;
  obj2.maybeInstrument("console", instrumentConsole);
}
