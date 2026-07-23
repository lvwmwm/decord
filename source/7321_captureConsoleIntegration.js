// Module ID: 7321
// Function ID: 59044
// Name: captureConsoleIntegration
// Dependencies: [7236, 7237, 7322, 7263, 7292, 7323, 7247, 7245, 7284]

// Module 7321 (captureConsoleIntegration)
import setupIntegration from "setupIntegration";


export const captureConsoleIntegration = setupIntegration.defineIntegration(function _captureConsoleIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    let CONSOLE_LEVELS = first.levels;
    if (!CONSOLE_LEVELS) {
      CONSOLE_LEVELS = CONSOLE_LEVELS(handled[0]).CONSOLE_LEVELS;
    }
    handled = first.handled;
    let obj = {
      name: "CaptureConsole",
      setup(arg0) {
          let closure_0 = arg0;
          if ("console" in CONSOLE_LEVELS(handled[1]).GLOBAL_OBJ) {
            let result = CONSOLE_LEVELS(handled[2]).addConsoleInstrumentationHandler((level) => {
              level = level.level;
              let hasItem = CONSOLE_LEVELS(handled[3]).getClient() === closure_0;
              if (hasItem) {
                hasItem = closure_0.includes(level);
              }
              if (hasItem) {
                (function consoleHandler(args, level, outer1_1) {
                  let closure_0 = args;
                  let closure_1 = level;
                  let closure_2 = outer1_1;
                  let obj = { level: CONSOLE_LEVELS(handled[5]).severityLevelFromString(level), extra: { arguments: args } };
                  let obj2 = CONSOLE_LEVELS(handled[5]);
                  CONSOLE_LEVELS(handled[3]).withScope((addEventProcessor) => {
                    addEventProcessor.addEventProcessor(() => { ... });
                    if ("assert" !== closure_1) {
                      const found = args.find(() => { ... });
                      if (found) {
                        let tmp16Result = tmp16(tmp17[8]);
                        tmp16Result.captureException(found, obj);
                      } else {
                        tmp16Result = tmp16(tmp17[7]);
                        const safeJoinResult = tmp16Result.safeJoin(args, " ");
                        tmp16(tmp17[8]).captureMessage(safeJoinResult, obj);
                        const tmp16Result1 = tmp16(tmp17[8]);
                      }
                    } else if (!args[0]) {
                      obj = CONSOLE_LEVELS(handled[7]);
                      const _HermesInternal = HermesInternal;
                      const combined = "Assertion failed: " + obj.safeJoin(args.slice(1), " ") || "console.assert";
                      addEventProcessor.setExtra("arguments", args.slice(1));
                      const tmp5 = obj.safeJoin(args.slice(1), " ") || "console.assert";
                      CONSOLE_LEVELS(handled[8]).captureMessage(combined, obj);
                      const obj2 = CONSOLE_LEVELS(handled[8]);
                    }
                  });
                })(level.args, level, outer1_1);
              }
            });
            let obj = CONSOLE_LEVELS(handled[2]);
          }
        }
    };
    return obj;
  }
  first = {};
});
