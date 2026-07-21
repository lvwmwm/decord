// Module ID: 927
// Function ID: 10094
// Name: consoleLoggingIntegration
// Dependencies: []

// Module 927 (consoleLoggingIntegration)
const _module = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = _module({}, require(dependencyMap[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.log.console");
const _module1 = require(dependencyMap[8]);

export const consoleLoggingIntegration = _module1.defineIntegration(function _consoleLoggingIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let CONSOLE_LEVELS = {}.levels;
    if (!CONSOLE_LEVELS) {
      CONSOLE_LEVELS = require(dependencyMap[2]).CONSOLE_LEVELS;
    }
    const require = CONSOLE_LEVELS;
    const obj = {
      name: "ConsoleLogs",
      setup(getOptions) {
          const CONSOLE_LEVELS = getOptions;
          const options = getOptions.getOptions();
          const normalizeDepth = options.normalizeDepth;
          let num = 3;
          if (undefined !== normalizeDepth) {
            num = normalizeDepth;
          }
          const normalizeMaxBreadth = options.normalizeMaxBreadth;
          let num2 = 1000;
          if (undefined !== normalizeMaxBreadth) {
            num2 = normalizeMaxBreadth;
          }
          if (options.enableLogs) {
            const result = tmp2(tmp3[4]).addConsoleInstrumentationHandler((arg0) => {
              let args;
              let level;
              ({ args, level } = arg0);
              let obj = arg0(num[5]);
              if (obj.getClient() === arg0) {
                if (arg0.includes(level)) {
                  const first = args[0];
                  const substr = args.slice(1);
                  if ("assert" !== level) {
                    let tmp12 = args.length > 1;
                    if (tmp12) {
                      tmp12 = "string" === typeof args[0];
                    }
                    if (tmp12) {
                      tmp12 = !arg0(num[6]).hasConsoleSubstitutions(args[0]);
                      const obj5 = arg0(num[6]);
                    }
                    if (tmp12) {
                      let consoleTemplateAttributes = arg0(num[6]).createConsoleTemplateAttributes(first, substr);
                      const obj7 = arg0(num[6]);
                    } else {
                      consoleTemplateAttributes = {};
                    }
                    const merged = Object.assign({}, num2, consoleTemplateAttributes);
                    obj = {};
                    let str7 = "info";
                    if ("log" !== level) {
                      str7 = level;
                    }
                    obj.level = str7;
                    const obj8 = arg0(num[7]);
                    const tmp16 = num2;
                    obj.message = arg0(num[6]).formatConsoleArgs(args, num, num2);
                    let num9;
                    if ("log" === level) {
                      num9 = 10;
                    }
                    obj.severityNumber = num9;
                    obj.attributes = merged;
                    obj8._INTERNAL_captureLog(obj);
                    const obj10 = arg0(num[6]);
                  } else if (!first) {
                    let str2 = "Assertion failed";
                    if (substr.length > 0) {
                      const _HermesInternal = HermesInternal;
                      str2 = "Assertion failed: " + arg0(num[6]).formatConsoleArgs(substr, num, num2);
                      const obj2 = arg0(num[6]);
                    }
                    obj = { level: "error", message: str2, attributes: num2 };
                    arg0(num[7])._INTERNAL_captureLog(obj);
                    const obj3 = arg0(num[7]);
                  }
                }
              }
            });
            const tmp2Result = tmp2(tmp3[4]);
          } else if (tmp2(tmp3[3]).DEBUG_BUILD) {
            const debug = CONSOLE_LEVELS(num[2]).debug;
            debug.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
          }
        }
    };
    return obj;
  }
});
