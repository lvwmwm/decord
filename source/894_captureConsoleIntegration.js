// Module ID: 894
// Function ID: 9841
// Name: captureConsoleIntegration
// Dependencies: []

// Module 894 (captureConsoleIntegration)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[4]);

export const captureConsoleIntegration = _module.defineIntegration(function _captureConsoleIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    let CONSOLE_LEVELS = first.levels;
    if (!CONSOLE_LEVELS) {
      CONSOLE_LEVELS = require(closure_1[0]).CONSOLE_LEVELS;
    }
    const require = CONSOLE_LEVELS;
    const handled = first.handled;
    closure_1 = null == handled || handled;
    const obj = {
      name: "CaptureConsole",
      setup(arg0) {
          const CONSOLE_LEVELS = arg0;
          if ("console" in CONSOLE_LEVELS(closure_1[1]).GLOBAL_OBJ) {
            const result = CONSOLE_LEVELS(closure_1[2]).addConsoleInstrumentationHandler((level) => {
              level = level.level;
              let hasItem = level(closure_1[3]).getClient() === level;
              if (hasItem) {
                hasItem = level.includes(level);
              }
              if (hasItem) {
                function consoleHandler(args, level, closure_1) {
                  let obj = args(level[5]);
                  let closure_3 = obj.severityLevelFromString(level);
                  const error = new Error();
                  obj = { level: args(level[5]).severityLevelFromString(level), extra: { arguments: args } };
                  const obj3 = args(level[5]);
                  args(level[3]).withScope((addEventProcessor) => {
                    addEventProcessor.addEventProcessor(() => { ... });
                    if ("assert" !== arg1) {
                      const found = addEventProcessor.find(() => { ... });
                      if (found) {
                        let tmp16Result = tmp16(tmp17[8]);
                        tmp16Result.captureException(found, obj);
                      } else {
                        tmp16Result = tmp16(tmp17[7]);
                        let obj = {};
                        obj.captureContext = obj;
                        obj.syntheticException = error;
                        addEventProcessor.captureMessage(tmp16Result.safeJoin(addEventProcessor, " "), closure_3, obj);
                      }
                    } else if (!addEventProcessor[0]) {
                      obj = addEventProcessor(arg1[7]);
                      const _HermesInternal = HermesInternal;
                      const combined = "Assertion failed: " + obj.safeJoin(addEventProcessor.slice(1), " ") || "console.assert";
                      addEventProcessor.setExtra("arguments", addEventProcessor.slice(1));
                      obj = {};
                      obj.captureContext = obj;
                      obj.syntheticException = error;
                      addEventProcessor.captureMessage(combined, closure_3, obj);
                      const tmp5 = obj.safeJoin(addEventProcessor.slice(1), " ") || "console.assert";
                    }
                  });
                }(level.args, level, closure_1);
              }
            });
            const obj = CONSOLE_LEVELS(closure_1[2]);
          }
        }
    };
    return obj;
  }
  first = {};
});
