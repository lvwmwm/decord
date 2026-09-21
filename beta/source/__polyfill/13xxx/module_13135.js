// Module ID: 13135
// Function ID: 13136
// Dependencies: [13047, 13050, 13049, 13055]
// Exports: addConsoleInstrumentationHandler

// Module 13135
import _mod13047 from "module_13047" /* 13047 */;
import _mod13049 from "module_13049" /* 13049 */;
import _mod13050 from "module_13050" /* 13050 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13050.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13049.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13050).GLOBAL_OBJ.console) {
        tmp(13055).fill(tmp(13050).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13049.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(13047).triggerHandlers("console", { args: items, level });
            const obj3 = level(13049).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13050).GLOBAL_OBJ.console, items);
            }
          };
        });
        const tmpResult = tmp(13055);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  _mod13047.addHandler("console", arg0);
  _mod13047.maybeInstrument("console", instrumentConsole);
};
