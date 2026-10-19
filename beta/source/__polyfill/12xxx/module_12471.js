// Module ID: 12471
// Function ID: 12472
// Dependencies: [12386, 12387, 12472, 12413, 12442, 12473, 12397, 12395, 12434]

// Module 12471
import _mod12413 from "module_12413" /* 12413 */;
import _mod12473 from "module_12473" /* 12473 */;
import module_12442 from "module_12442" /* 12442 */;


export const captureConsoleIntegration = module_12442.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let handled;
  let CONSOLE_LEVELS = obj.levels;
  if (!CONSOLE_LEVELS) {
    let tmp = CONSOLE_LEVELS;
    let tmp2 = handled;
    CONSOLE_LEVELS = CONSOLE_LEVELS(handled[0]).CONSOLE_LEVELS;
  }
  handled = obj.handled;
  let obj2 = {
    name: "CaptureConsole",
    setup(arg0) {
      let closure_0 = arg0;
      const tmp2 = handled;
      const tmp = CONSOLE_LEVELS;
      if ("console" in CONSOLE_LEVELS(handled[1]).GLOBAL_OBJ) {
        let tmpResult = tmp(tmp2[2]);
        let result = tmpResult.addConsoleInstrumentationHandler((arg0) => {
          let args;
          let level;
          let obj3;
          let tmpResult;
          ({ args, level } = arg0);
          let obj = _mod12413;
          let hasItem = obj.getClient() === closure_0;
          if (hasItem) {
            let tmp4 = CONSOLE_LEVELS;
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            let closure_2 = handled;
            let obj2 = { level: tmpResult.severityLevelFromString(level), extra: obj3 };
            obj3 = { arguments: args };
            tmpResult = _mod12473;
            const tmpResult2 = _mod12413;
            tmpResult2.withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                const obj = args(level[6]);
                obj2 = { handled, type: "console" };
                const result = obj.addExceptionMechanism(arg0, obj2);
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                const tmp12 = args;
                if (found) {
                  const tmp14Result = closure_2_0(closure_2_1[8]);
                  tmp14Result.captureException(found, obj2);
                } else {
                  const tmp14Result2 = closure_2_0(closure_2_1[7]);
                  const safeJoinResult = tmp14Result2.safeJoin(tmp12, " ");
                  const obj4 = closure_2_0(closure_2_1[8]);
                  obj4.captureMessage(safeJoinResult, obj2);
                }
              } else if (!args[0]) {
                let obj = closure_2_0(closure_2_1[7]);
                const _HermesInternal = HermesInternal;
                const tmp4 = obj.safeJoin(args.slice(1), " ") || "console.assert";
                const combined = "Assertion failed: " + tmp4;
                addEventProcessor.setExtra("arguments", args.slice(1));
                obj2 = closure_2_0(closure_2_1[8]);
                obj2.captureMessage(combined, obj2);
              }
            });
          }
        });
      }
    }
  };
  return obj2;
});
