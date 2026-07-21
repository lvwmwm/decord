// Module ID: 7316
// Function ID: 58999
// Name: captureConsoleIntegration
// Dependencies: []

// Module 7316 (captureConsoleIntegration)
const _module = require(dependencyMap[4]);

export const captureConsoleIntegration = _module.defineIntegration(function _captureConsoleIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    let CONSOLE_LEVELS = first.levels;
    if (!CONSOLE_LEVELS) {
      CONSOLE_LEVELS = require(dependencyMap[0]).CONSOLE_LEVELS;
    }
    const require = CONSOLE_LEVELS;
    const dependencyMap = first.handled;
    const obj = {
      name: "CaptureConsole",
      setup(arg0) {
          const CONSOLE_LEVELS = arg0;
          if ("console" in CONSOLE_LEVELS(handled[1]).GLOBAL_OBJ) {
            const result = CONSOLE_LEVELS(handled[2]).addConsoleInstrumentationHandler((level) => {
              level = level.level;
              let hasItem = level(closure_1[3]).getClient() === level;
              if (hasItem) {
                hasItem = level.includes(level);
              }
              if (hasItem) {
                function consoleHandler(args, level, closure_1) {
                  const obj = { level: args(level[5]).severityLevelFromString(level), extra: { arguments: args } };
                  const obj2 = args(level[5]);
                  args(level[3]).withScope((addEventProcessor) => {
                    addEventProcessor.addEventProcessor(() => { ... });
                    if ("assert" !== arg1) {
                      const found = addEventProcessor.find(() => { ... });
                      if (found) {
                        let tmp16Result = tmp16(tmp17[8]);
                        tmp16Result.captureException(found, obj);
                      } else {
                        tmp16Result = tmp16(tmp17[7]);
                        const safeJoinResult = tmp16Result.safeJoin(addEventProcessor, " ");
                        tmp16(tmp17[8]).captureMessage(safeJoinResult, obj);
                        const tmp16Result1 = tmp16(tmp17[8]);
                      }
                    } else if (!addEventProcessor[0]) {
                      const obj = addEventProcessor(arg1[7]);
                      const _HermesInternal = HermesInternal;
                      const combined = "Assertion failed: " + obj.safeJoin(addEventProcessor.slice(1), " ") || "console.assert";
                      addEventProcessor.setExtra("arguments", addEventProcessor.slice(1));
                      const tmp5 = obj.safeJoin(addEventProcessor.slice(1), " ") || "console.assert";
                      addEventProcessor(arg1[8]).captureMessage(combined, obj);
                      const obj2 = addEventProcessor(arg1[8]);
                    }
                  });
                }(level.args, level, closure_1);
              }
            });
            const obj = CONSOLE_LEVELS(handled[2]);
          }
        }
    };
    return obj;
  }
  first = {};
});
