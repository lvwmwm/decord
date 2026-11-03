// Module ID: 13276
// Function ID: 13277
// Dependencies: [13188, 13191, 13190, 13196]
// Exports: addConsoleInstrumentationHandler

// Module 13276
import _mod13188 from "module_13188" /* 13188 */;
import _mod13191 from "module_13191" /* 13191 */;

let tmp;
const _mod13190 = tmp(13190);
function instrumentConsole() {
  let tmp = require;
  let tmp2 = dependencyMap;
  if ("console" in _mod13191.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13190.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      let tmp = closure_0;
      let tmp2 = closure_1;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = tmp(tmp2[3]);
        tmpResult.fill(tmp(tmp2[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13190.originalConsoleMethods[level] = arg0;
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

export function addConsoleInstrumentationHandler(arg0) {
  const obj = _mod13188;
  obj.addHandler("console", arg0);
  const obj2 = _mod13188;
  obj2.maybeInstrument("console", instrumentConsole);
}
