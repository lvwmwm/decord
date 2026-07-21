// Module ID: 895
// Function ID: 9853
// Name: instrumentConsole
// Dependencies: []

// Module 895 (instrumentConsole)
function instrumentConsole() {
  if ("console" in arg1(arg6[1]).GLOBAL_OBJ) {
    const CONSOLE_LEVELS = arg1(arg6[2]).CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((arg0) => {
      if (arg0 in arg0(closure_1[1]).GLOBAL_OBJ.console) {
        arg0(closure_1[3]).fill(arg0(closure_1[1]).GLOBAL_OBJ.console, arg0, (arg0) => {
          arg0(closure_1[2]).originalConsoleMethods[arg0] = arg0;
          return () => {
            const length = arguments.length;
            const array = new Array(length);
            for (let num = 0; num < length; num = num + 1) {
              array[num] = arguments[num];
            }
            callback(closure_1[0]).triggerHandlers("console", { args: array, level: callback });
            const obj3 = callback(closure_1[2]).originalConsoleMethods[closure_0];
            if (null != obj3) {
              obj3.apply(callback(closure_1[1]).GLOBAL_OBJ.console, array);
            }
          };
        });
        const obj = arg0(closure_1[3]);
      }
    });
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  arg1(arg6[0]).addHandler("console", arg0);
  const obj = arg1(arg6[0]);
  arg1(arg6[0]).maybeInstrument("console", instrumentConsole);
};
