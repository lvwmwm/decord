// Module ID: 788
// Function ID: 789
// Name: instrumentConsole
// Dependencies: [719, 690, 693, 691]
// Exports: addConsoleInstrumentationHandler

// Module 788 (instrumentConsole)
import _mod690 from "module_690" /* 690 */;
import consoleSandbox from "consoleSandbox" /* 693 */;
import _mod719 from "module_719" /* 719 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod690.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = consoleSandbox.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(690).GLOBAL_OBJ.console) {
        tmp(691).fill(tmp(690).GLOBAL_OBJ.console, item, (arg0) => {
          consoleSandbox.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(719).triggerHandlers("console", { args: items, level });
            const obj3 = level(693).originalConsoleMethods[level];
            if (obj3 != null) {
              obj3.apply(level(690).GLOBAL_OBJ.console, items);
            }
          };
        });
        const tmpResult = tmp(691);
      }
    });
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  _mod719.addHandler("console", arg0);
  _mod719.maybeInstrument("console", instrumentConsole);
};
