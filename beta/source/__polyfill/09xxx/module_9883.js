// Module ID: 9883
// Function ID: 9884
// Dependencies: [9795, 9798, 9797, 9803]
// Exports: addConsoleInstrumentationHandler

// Module 9883
import _mod9795 from "module_9795" /* 9795 */;
import _mod9798 from "module_9798" /* 9798 */;

let tmp;
const _mod9797 = tmp(9797);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod9798.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod9797.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod9797.originalConsoleMethods[level] = arg0;
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
  const obj = _mod9795;
  obj.addHandler("console", arg0);
  const obj2 = _mod9795;
  obj2.maybeInstrument("console", instrumentConsole);
}
