// Module ID: 7322
// Function ID: 59052
// Name: instrumentConsole
// Dependencies: [7234, 7237, 7236, 7242]

// Module 7322 (instrumentConsole)
const require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in require(7237) /* getGlobalSingleton */.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = require(7236) /* consoleSandbox */.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((arg0) => {
      let closure_0 = arg0;
      if (arg0 in outer1_0(outer1_1[1]).GLOBAL_OBJ.console) {
        outer1_0(outer1_1[3]).fill(outer1_0(outer1_1[1]).GLOBAL_OBJ.console, arg0, (arg0) => {
          outer2_0(outer2_1[2]).originalConsoleMethods[closure_0] = arg0;
          return () => {
            const length = arguments.length;
            const array = new Array(length);
            for (let num = 0; num < length; num = num + 1) {
              array[num] = arguments[num];
            }
            outer3_0(outer3_1[0]).triggerHandlers("console", { args: array, level: outer1_0 });
            const obj3 = outer3_0(outer3_1[2]).originalConsoleMethods[outer1_0];
            if (obj3) {
              obj3.apply(outer3_0(outer3_1[1]).GLOBAL_OBJ.console, array);
            }
          };
        });
        const obj = outer1_0(outer1_1[3]);
      }
    });
  }
}
arg5.addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  require(7234) /* addHandler */.addHandler("console", arg0);
  const obj = require(7234) /* addHandler */;
  require(7234) /* addHandler */.maybeInstrument("console", instrumentConsole);
};
