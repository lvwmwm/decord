// Module ID: 13171
// Function ID: 13172
// Dependencies: [13083, 13086, 13085, 13091]
// Exports: addConsoleInstrumentationHandler

// Module 13171
import _mod13083 from "module_13083" /* 13083 */;
import _mod13085 from "module_13085" /* 13085 */;
import _mod13086 from "module_13086" /* 13086 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13086.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13085.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13086).GLOBAL_OBJ.console) {
        tmp(13091).fill(tmp(13086).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13085.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(13083).triggerHandlers("console", { args: items, level });
            const obj3 = level(13085).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13086).GLOBAL_OBJ.console, items);
            }
          };
        });
        const tmpResult = tmp(13091);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  _mod13083.addHandler("console", arg0);
  _mod13083.maybeInstrument("console", instrumentConsole);
};
