// Module ID: 895
// Function ID: 9854
// Name: instrumentConsole
// Dependencies: [827, 798, 801, 799]

// Module 895 (instrumentConsole)
const require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in require(798).GLOBAL_OBJ) {
    const CONSOLE_LEVELS = require(801) /* consoleSandbox */.CONSOLE_LEVELS;
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
            if (null != obj3) {
              obj3.apply(outer3_0(outer3_1[1]).GLOBAL_OBJ.console, array);
            }
          };
        });
        const obj = outer1_0(outer1_1[3]);
      }
    });
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  require(827) /* addHandler */.addHandler("console", arg0);
  const obj = require(827) /* addHandler */;
  require(827) /* addHandler */.maybeInstrument("console", instrumentConsole);
};
