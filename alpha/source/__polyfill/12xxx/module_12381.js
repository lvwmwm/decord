// Module ID: 12381
// Function ID: 12382
// Dependencies: [12293, 12296, 12295, 12301]
// Exports: addConsoleInstrumentationHandler

// Module 12381
import _mod12293 from "module_12293" /* 12293 */;
import _mod12295 from "module_12295" /* 12295 */;
import _mod12296 from "module_12296" /* 12296 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12296.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12295.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12296).GLOBAL_OBJ.console) {
        tmp(12301).fill(tmp(12296).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12295.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12293).triggerHandlers("console", { args: items, level });
            const obj3 = level(12295).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12296).GLOBAL_OBJ.console, items);
            }
          };
        });
        const tmpResult = tmp(12301);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  _mod12293.addHandler("console", arg0);
  _mod12293.maybeInstrument("console", instrumentConsole);
};
