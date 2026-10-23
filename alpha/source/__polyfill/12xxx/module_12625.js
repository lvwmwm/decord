// Module ID: 12625
// Function ID: 12626
// Dependencies: [12537, 12540, 12539, 12545]
// Exports: addConsoleInstrumentationHandler

// Module 12625
import _mod12537 from "module_12537" /* 12537 */;
import _mod12540 from "module_12540" /* 12540 */;

let tmp;
const _mod12539 = tmp(12539);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod12540.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12539.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12539.originalConsoleMethods[level] = arg0;
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

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  const obj = _mod12537;
  obj.addHandler("console", arg0);
  const obj2 = _mod12537;
  obj2.maybeInstrument("console", instrumentConsole);
};
