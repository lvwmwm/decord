// Module ID: 783
// Function ID: 784
// Name: captureConsoleIntegration
// Dependencies: [689, 686, 784, 713, 752, 785, 695, 697, 734]

// Module 783 (captureConsoleIntegration)
import _mod713 from "module_713" /* 713 */;
import setupIntegration from "setupIntegration" /* 752 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const captureConsoleIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag;
  let CONSOLE_LEVELS = obj.levels;
  if (!CONSOLE_LEVELS) {
    CONSOLE_LEVELS = CONSOLE_LEVELS(flag[0]).CONSOLE_LEVELS;
  }
  flag = obj.handled;
  if (flag == null) {
    flag = true;
  }
  return {
    name: "CaptureConsole",
    setup(arg0) {
      closure_0 = arg0;
      if ("console" in CONSOLE_LEVELS(flag[1]).GLOBAL_OBJ) {
        let result = CONSOLE_LEVELS(flag[2]).addConsoleInstrumentationHandler((arg0) => {
          ({ args, level } = arg0);
          let hasItem = _mod713.getClient() === args;
          if (hasItem) {
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            closure_2 = flag;
            closure_3 = tmp(785).severityLevelFromString(level);
            const _Error = Error;
            const error = new Error();
            let obj2 = { level: null, extra: null };
            const tmpResult = tmp(785);
            obj2.level = tmp(785).severityLevelFromString(level);
            let obj3 = { arguments: args };
            obj2.extra = obj3;
            const tmpResult3 = tmp(785);
            tmp(713).withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                const result = args(level[6]).addExceptionMechanism(arg0, { handled, type: "auto.core.capture_console" });
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                if (found) {
                  tmp14(tmp15[8]).captureException(found, obj2);
                  const tmp14Result = tmp14(tmp15[8]);
                } else {
                  obj2 = { captureContext: null, syntheticException: null };
                  obj2.captureContext = obj2;
                  obj2.syntheticException = error;
                  addEventProcessor.captureMessage(tmp14(tmp15[7]).safeJoin(tmp12, " "), closure_3, obj2);
                  const tmp14Result2 = tmp14(tmp15[7]);
                }
                tmp12 = args;
              } else if (!args[0]) {
                const obj = args(flag[7]);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + args(flag[7]).safeJoin(arr.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", arr.slice(1));
                const obj3 = { captureContext: obj2, syntheticException: error };
                addEventProcessor.captureMessage(combined, closure_3, obj3);
                const tmp4 = args(flag[7]).safeJoin(arr.slice(1), " ") || "console.assert";
              }
            });
            const tmpResult4 = tmp(713);
          }
        });
        let tmpResult = CONSOLE_LEVELS(flag[2]);
      }
    }
  };
});
