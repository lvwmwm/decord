// Module ID: 7540
// Function ID: 7541
// Name: instrumentConsole
// Dependencies: [7452, 7455, 7454, 7460]

// Module 7540 (instrumentConsole)
const require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in require(7455) /* getGlobalSingleton */.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = require(7454) /* consoleSandbox */.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((arg0) => {
      const callback = arg0;
      if (arg0 in callback(table[1]).GLOBAL_OBJ.console) {
        tmp(tmp2[3]).fill(tmp(tmp2[1]).GLOBAL_OBJ.console, arg0, (arg0) => {
          callback(outer1_1[2]).originalConsoleMethods[callback] = arg0;
          return () => {
            const items = [...arguments];
            outer1_0(outer1_1[0]).triggerHandlers("console", { args: items, level: closure_0 });
            const obj3 = outer1_0(outer1_1[2]).originalConsoleMethods[closure_0];
            if (obj3) {
              obj3.apply(outer1_0(outer1_1[1]).GLOBAL_OBJ.console, items);
            }
          };
        });
        const tmpResult = tmp(tmp2[3]);
      }
    });
  }
}
arg5.addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  require(7452) /* addHandler */.addHandler("console", arg0);
  const obj = require(7452) /* addHandler */;
  require(7452) /* addHandler */.maybeInstrument("console", instrumentConsole);
};
