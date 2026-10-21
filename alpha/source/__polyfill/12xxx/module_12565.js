// Module ID: 12565
// Function ID: 12566
// Dependencies: [12477, 12480, 12479, 12485]
// Exports: addConsoleInstrumentationHandler

// Module 12565
import _mod12477 from "module_12477" /* 12477 */;
import _mod12480 from "module_12480" /* 12480 */;

let tmp;
const _mod12479 = tmp(12479);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod12480.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12479.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12479.originalConsoleMethods[level] = arg0;
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
  const obj = _mod12477;
  obj.addHandler("console", arg0);
  const obj2 = _mod12477;
  obj2.maybeInstrument("console", instrumentConsole);
};
