// Module ID: 13016
// Function ID: 13017
// Dependencies: [12928, 12931, 12930, 12936]
// Exports: addConsoleInstrumentationHandler

// Module 13016
import _mod12928 from "module_12928" /* 12928 */;
import _mod12930 from "module_12930" /* 12930 */;
import _mod12931 from "module_12931" /* 12931 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12931.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12930.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12931).GLOBAL_OBJ.console) {
        tmp(12936).fill(tmp(12931).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12930.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12928).triggerHandlers("console", { args: items, level });
            const obj3 = level(12930).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12931).GLOBAL_OBJ.console, items);
            }
          };
        });
        const tmpResult = tmp(12936);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  _mod12928.addHandler("console", arg0);
  _mod12928.maybeInstrument("console", instrumentConsole);
};
