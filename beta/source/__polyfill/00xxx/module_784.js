// Module ID: 784
// Function ID: 785
// Dependencies: [715, 686, 689, 687]
// Exports: addConsoleInstrumentationHandler

// Module 784
import _mod686 from "module_686" /* 686 */;
import _mod715 from "module_715" /* 715 */;

let tmp;
const CONSOLE_LEVELS2 = tmp(689);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod686.GLOBAL_OBJ) {
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
  const obj = _mod715;
  obj.addHandler("console", arg0);
  const obj2 = _mod715;
  obj2.maybeInstrument("console", instrumentConsole);
};
