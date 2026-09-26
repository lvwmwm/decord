// Module ID: 13165
// Function ID: 13166
// Dependencies: [13077, 13080, 13079, 13085]
// Exports: addConsoleInstrumentationHandler

// Module 13165
import _mod13077 from "module_13077" /* 13077 */;
import _mod13079 from "module_13079" /* 13079 */;
import _mod13080 from "module_13080" /* 13080 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13080.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13079.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13080).GLOBAL_OBJ.console) {
        tmp(13085).fill(tmp(13080).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13079.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(13077).triggerHandlers("console", { args: items, level });
            const obj3 = level(13079).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13080).GLOBAL_OBJ.console, items);
            }
          };
        });
        const tmpResult = tmp(13085);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  _mod13077.addHandler("console", arg0);
  _mod13077.maybeInstrument("console", instrumentConsole);
};
