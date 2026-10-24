// Module ID: 12658
// Function ID: 12659
// Dependencies: [12573, 12574, 12659, 12600, 12629, 12660, 12584, 12582, 12621]

// Module 12658
import _mod12600 from "module_12600" /* 12600 */;
import _mod12660 from "module_12660" /* 12660 */;
import module_12629 from "module_12629" /* 12629 */;


export const captureConsoleIntegration = module_12629.defineIntegration(() => {
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
          let obj = _mod12600;
          let hasItem = obj.getClient() === closure_0;
          if (hasItem) {
            let tmp4 = CONSOLE_LEVELS;
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            let closure_2 = handled;
            let obj2 = { level: tmpResult.severityLevelFromString(level), extra: obj3 };
            obj3 = { arguments: args };
            tmpResult = _mod12660;
            const tmpResult2 = _mod12600;
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
