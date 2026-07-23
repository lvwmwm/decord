// Module ID: 927
// Function ID: 10095
// Name: consoleLoggingIntegration
// Dependencies: [77, 816, 801, 800, 895, 825, 928, 856, 863]

// Module 927 (consoleLoggingIntegration)
import _defineProperty from "_defineProperty";
import setupIntegration from "setupIntegration";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = _defineProperty({}, require("module_816").SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.log.console");

export const consoleLoggingIntegration = setupIntegration.defineIntegration(function _consoleLoggingIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    let CONSOLE_LEVELS = {}.levels;
    if (!CONSOLE_LEVELS) {
      CONSOLE_LEVELS = CONSOLE_LEVELS(801).CONSOLE_LEVELS;
    }
    let obj = {
      name: "ConsoleLogs",
      setup(getOptions) {
          let closure_0 = getOptions;
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
              let obj = CONSOLE_LEVELS(outer2_1[5]);
              if (obj.getClient() === getOptions) {
                if (getOptions.includes(level)) {
                  const first = args[0];
                  const substr = args.slice(1);
                  if ("assert" !== level) {
                    let tmp12 = args.length > 1;
                    if (tmp12) {
                      tmp12 = "string" === typeof args[0];
                    }
                    if (tmp12) {
                      tmp12 = !CONSOLE_LEVELS(outer2_1[6]).hasConsoleSubstitutions(args[0]);
                      const obj5 = CONSOLE_LEVELS(outer2_1[6]);
                    }
                    if (tmp12) {
                      let consoleTemplateAttributes = CONSOLE_LEVELS(outer2_1[6]).createConsoleTemplateAttributes(first, substr);
                      const obj7 = CONSOLE_LEVELS(outer2_1[6]);
                    } else {
                      consoleTemplateAttributes = {};
                    }
                    const merged = Object.assign({}, outer2_2, consoleTemplateAttributes);
                    obj = {};
                    let str7 = "info";
                    if ("log" !== level) {
                      str7 = level;
                    }
                    obj.level = str7;
                    const obj8 = CONSOLE_LEVELS(outer2_1[7]);
                    const tmp16 = outer2_2;
                    obj.message = CONSOLE_LEVELS(outer2_1[6]).formatConsoleArgs(args, num, num2);
                    let num9;
                    if ("log" === level) {
                      num9 = 10;
                    }
                    obj.severityNumber = num9;
                    obj.attributes = merged;
                    obj8._INTERNAL_captureLog(obj);
                    const obj10 = CONSOLE_LEVELS(outer2_1[6]);
                  } else if (!first) {
                    let str2 = "Assertion failed";
                    if (substr.length > 0) {
                      const _HermesInternal = HermesInternal;
                      str2 = "Assertion failed: " + CONSOLE_LEVELS(outer2_1[6]).formatConsoleArgs(substr, num, num2);
                      const obj2 = CONSOLE_LEVELS(outer2_1[6]);
                    }
                    obj = { level: "error", message: str2, attributes: outer2_2 };
                    CONSOLE_LEVELS(outer2_1[7])._INTERNAL_captureLog(obj);
                    const obj3 = CONSOLE_LEVELS(outer2_1[7]);
                  }
                }
              }
            });
            const tmp2Result = tmp2(tmp3[4]);
          } else if (tmp2(tmp3[3]).DEBUG_BUILD) {
            const debug = CONSOLE_LEVELS(outer1_1[2]).debug;
            debug.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
          }
        }
    };
    return obj;
  }
});
