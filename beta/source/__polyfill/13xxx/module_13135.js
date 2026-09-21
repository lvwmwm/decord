// Module ID: 13135
// Function ID: 13136
// Dependencies: [13050, 13051, 13136, 13077, 13106, 13137, 13061, 13059, 13098]

// Module 13135
import _mod13077 from "module_13077" /* 13077 */;
import setupIntegration from "module_13106" /* 13106 */;


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
          let hasItem = _mod13077.getClient() === args;
          if (hasItem) {
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            closure_2 = handled;
            let obj2 = { level: tmp(13137).severityLevelFromString(level), extra: null };
            const obj3 = { arguments: args };
            obj2.extra = obj3;
            const tmpResult = tmp(13137);
            tmp(13077).withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                const result = args(level[6]).addExceptionMechanism(arg0, { handled, type: "console" });
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                if (found) {
                  tmp14(13098).captureException(found, obj2);
                  const tmp14Result = tmp14(13098);
                } else {
                  const tmp14Result2 = tmp14(13059);
                  const safeJoinResult = tmp14(13059).safeJoin(tmp12, " ");
                  args(13098).captureMessage(safeJoinResult, obj2);
                  const obj4 = args(13098);
                }
                tmp12 = args;
              } else if (!args[0]) {
                const obj = args(13059);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + args(13059).safeJoin(arr.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", arr.slice(1));
                obj2 = args(13098);
                obj2.captureMessage(combined, obj2);
                const tmp4 = args(13059).safeJoin(arr.slice(1), " ") || "console.assert";
              }
            });
            const tmpResult2 = tmp(13077);
          }
        });
        let tmpResult = CONSOLE_LEVELS(handled[2]);
      }
    }
  };
});
