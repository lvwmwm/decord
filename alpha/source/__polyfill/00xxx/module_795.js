// Module ID: 795
// Function ID: 796
// Dependencies: [726, 697, 700, 698]
// Exports: addConsoleInstrumentationHandler

// Module 795
import _mod697 from "module_697" /* 697 */;
import _mod726 from "module_726" /* 726 */;

let tmp;
const CONSOLE_LEVELS2 = tmp(700);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod697.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = CONSOLE_LEVELS2.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          CONSOLE_LEVELS2.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            const obj = { args: items, level };
            const obj2 = level(closure_2_1[0]);
            obj2.triggerHandlers("console", obj);
            const obj3 = level(closure_2_1[2]).originalConsoleMethods[level];
            const tmp = level;
            const tmp2 = closure_2_1;
            if (obj3 != null) {
              obj3.apply(tmp(tmp2[1]).GLOBAL_OBJ.console, items);
            }
          };
        });
      }
    });
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  const obj = _mod726;
  obj.addHandler("console", arg0);
  const obj2 = _mod726;
  obj2.maybeInstrument("console", instrumentConsole);
};
