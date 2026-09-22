// Module ID: 13015
// Function ID: 13016
// Dependencies: [12930, 12931, 13016, 12957, 12986, 13017, 12941, 12939, 12978]

// Module 13015
import _mod12957 from "module_12957" /* 12957 */;
import setupIntegration from "module_12986" /* 12986 */;


export const captureConsoleIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let handled;
  let CONSOLE_LEVELS = obj.levels;
  if (!CONSOLE_LEVELS) {
    CONSOLE_LEVELS = CONSOLE_LEVELS(handled[0]).CONSOLE_LEVELS;
  }
  handled = obj.handled;
  return {
    name: "CaptureConsole",
    setup(arg0) {
      closure_0 = arg0;
      if ("console" in CONSOLE_LEVELS(handled[1]).GLOBAL_OBJ) {
        let result = CONSOLE_LEVELS(handled[2]).addConsoleInstrumentationHandler((arg0) => {
          ({ args, level } = arg0);
          let hasItem = _mod12957.getClient() === args;
          if (hasItem) {
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            closure_2 = handled;
            let obj2 = { level: tmp(13017).severityLevelFromString(level), extra: null };
            const obj3 = { arguments: args };
            obj2.extra = obj3;
            const tmpResult = tmp(13017);
            tmp(12957).withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                const result = args(level[6]).addExceptionMechanism(arg0, { handled, type: "console" });
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                if (found) {
                  tmp14(12978).captureException(found, obj2);
                  const tmp14Result = tmp14(12978);
                } else {
                  const tmp14Result2 = tmp14(12939);
                  const safeJoinResult = tmp14(12939).safeJoin(tmp12, " ");
                  args(12978).captureMessage(safeJoinResult, obj2);
                  const obj4 = args(12978);
                }
                tmp12 = args;
              } else if (!args[0]) {
                const obj = args(12939);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + args(12939).safeJoin(arr.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", arr.slice(1));
                obj2 = args(12978);
                obj2.captureMessage(combined, obj2);
                const tmp4 = args(12939).safeJoin(arr.slice(1), " ") || "console.assert";
              }
            });
            const tmpResult2 = tmp(12957);
          }
        });
        let tmpResult = CONSOLE_LEVELS(handled[2]);
      }
    }
  };
});
