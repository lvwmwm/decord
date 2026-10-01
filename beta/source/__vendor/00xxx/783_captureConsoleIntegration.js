// Module ID: 783
// Function ID: 784
// Name: captureConsoleIntegration
// Dependencies: [689, 686, 784, 713, 752, 785, 695, 697, 734]

// Module 783 (captureConsoleIntegration)
import _mod713 from "module_713" /* 713 */;
import severityLevelFromString from "severityLevelFromString" /* 785 */;
import module_752 from "module_752" /* 752 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const captureConsoleIntegration = module_752.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag;
  let CONSOLE_LEVELS = obj.levels;
  if (!CONSOLE_LEVELS) {
    let tmp = CONSOLE_LEVELS;
    let tmp2 = flag;
    CONSOLE_LEVELS = CONSOLE_LEVELS(flag[0]).CONSOLE_LEVELS;
  }
  flag = obj.handled;
  if (flag == null) {
    flag = true;
  }
  let obj2 = {
    name: "CaptureConsole",
    setup(arg0) {
      let closure_0 = arg0;
      const tmp2 = flag;
      const tmp = CONSOLE_LEVELS;
      if ("console" in CONSOLE_LEVELS(flag[1]).GLOBAL_OBJ) {
        let tmpResult = tmp(tmp2[2]);
        let result = tmpResult.addConsoleInstrumentationHandler(function(arg0) {
          let args;
          let level;
          let obj3;
          let tmpResult3;
          ({ args, level } = arg0);
          let obj = _mod713;
          let hasItem = obj.getClient() === closure_0;
          if (hasItem) {
            let tmp4 = CONSOLE_LEVELS;
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            let closure_2 = flag;
            const tmpResult = severityLevelFromString;
            let closure_3 = tmpResult.severityLevelFromString(level);
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error();
            let obj2 = { level: tmpResult3.severityLevelFromString(level), extra: obj3 };
            obj3 = { arguments: args };
            tmpResult3 = severityLevelFromString;
            const tmpResult4 = _mod713;
            tmpResult4.withScope((addEventProcessor) => {
              let handled;
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                const obj = args(level[6]);
                obj2 = { handled, type: "auto.core.capture_console" };
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
                  obj2 = { captureContext: obj2, syntheticException: error };
                  const tmp14Result2 = closure_2_0(closure_2_1[7]);
                  addEventProcessor.captureMessage(tmp14Result2.safeJoin(tmp12, " "), closure_3, obj2);
                }
              } else if (!args[0]) {
                let obj = closure_2_0(closure_2_1[7]);
                const _HermesInternal = HermesInternal;
                const tmp4 = obj.safeJoin(args.slice(1), " ") || "console.assert";
                const combined = "Assertion failed: " + tmp4;
                addEventProcessor.setExtra("arguments", args.slice(1));
                const obj3 = { captureContext: obj2, syntheticException: error };
                addEventProcessor.captureMessage(combined, closure_3, obj3);
              }
            });
          }
        });
      }
    }
  };
  return obj2;
});
