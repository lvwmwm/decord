// Module ID: 894
// Function ID: 9846
// Name: captureConsoleIntegration
// Dependencies: [801, 798, 895, 825, 863, 896, 807, 809, 845]

// Module 894 (captureConsoleIntegration)
import setupIntegration from "setupIntegration";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const captureConsoleIntegration = setupIntegration.defineIntegration(function _captureConsoleIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    let CONSOLE_LEVELS = first.levels;
    if (!CONSOLE_LEVELS) {
      CONSOLE_LEVELS = CONSOLE_LEVELS(801).CONSOLE_LEVELS;
    }
    const handled = first.handled;
    let dependencyMap = null == handled || handled;
    let obj = {
      name: "CaptureConsole",
      setup(arg0) {
          let closure_0 = arg0;
          if ("console" in CONSOLE_LEVELS(798).GLOBAL_OBJ) {
            let result = CONSOLE_LEVELS(895).addConsoleInstrumentationHandler((level) => {
              level = level.level;
              let hasItem = CONSOLE_LEVELS(table[3]).getClient() === closure_0;
              if (hasItem) {
                hasItem = closure_0.includes(level);
              }
              if (hasItem) {
                (function consoleHandler(args, level, outer1_1) {
                  let closure_0 = args;
                  const dependencyMap = level;
                  let closure_2 = outer1_1;
                  let obj = CONSOLE_LEVELS(896);
                  let closure_3 = obj.severityLevelFromString(level);
                  const error = new Error();
                  obj = { level: CONSOLE_LEVELS(896).severityLevelFromString(level), extra: { arguments: args } };
                  const obj3 = CONSOLE_LEVELS(896);
                  CONSOLE_LEVELS(825).withScope((addEventProcessor) => {
                    addEventProcessor.addEventProcessor(() => { ... });
                    if ("assert" !== level) {
                      const found = args.find(() => { ... });
                      if (found) {
                        let tmp16Result = tmp16(tmp17[8]);
                        tmp16Result.captureException(found, obj);
                      } else {
                        tmp16Result = tmp16(tmp17[7]);
                        obj = {};
                        obj.captureContext = obj;
                        obj.syntheticException = error;
                        addEventProcessor.captureMessage(tmp16Result.safeJoin(args, " "), closure_3, obj);
                      }
                    } else if (!args[0]) {
                      obj = CONSOLE_LEVELS(level[7]);
                      const _HermesInternal = HermesInternal;
                      const combined = "Assertion failed: " + obj.safeJoin(args.slice(1), " ") || "console.assert";
                      addEventProcessor.setExtra("arguments", args.slice(1));
                      obj = {};
                      obj.captureContext = obj;
                      obj.syntheticException = error;
                      addEventProcessor.captureMessage(combined, closure_3, obj);
                      const tmp5 = obj.safeJoin(args.slice(1), " ") || "console.assert";
                    }
                  });
                })(level.args, level, outer1_1);
              }
            });
            let obj = CONSOLE_LEVELS(895);
          }
        }
    };
    return obj;
  }
  first = {};
});
