// Module ID: 12599
// Function ID: 12600
// Dependencies: [12514, 12515, 12600, 12541, 12570, 12601, 12525, 12523, 12562]

// Module 12599
import _mod12541 from "module_12541" /* 12541 */;
import setupIntegration from "module_12570" /* 12570 */;


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
          let hasItem = _mod12541.getClient() === args;
          if (hasItem) {
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            closure_2 = handled;
            let obj2 = { level: tmp(12601).severityLevelFromString(level), extra: null };
            const obj3 = { arguments: args };
            obj2.extra = obj3;
            const tmpResult = tmp(12601);
            tmp(12541).withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                const result = args(level[6]).addExceptionMechanism(arg0, { handled, type: "console" });
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                if (found) {
                  tmp14(12562).captureException(found, obj2);
                  const tmp14Result = tmp14(12562);
                } else {
                  const tmp14Result2 = tmp14(12523);
                  const safeJoinResult = tmp14(12523).safeJoin(tmp12, " ");
                  args(12562).captureMessage(safeJoinResult, obj2);
                  const obj4 = args(12562);
                }
                tmp12 = args;
              } else if (!args[0]) {
                const obj = args(12523);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + args(12523).safeJoin(arr.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", arr.slice(1));
                obj2 = args(12562);
                obj2.captureMessage(combined, obj2);
                const tmp4 = args(12523).safeJoin(arr.slice(1), " ") || "console.assert";
              }
            });
            const tmpResult2 = tmp(12541);
          }
        });
        let tmpResult = CONSOLE_LEVELS(handled[2]);
      }
    }
  };
});
