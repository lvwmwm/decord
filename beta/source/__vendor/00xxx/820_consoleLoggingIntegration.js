// Module ID: 820
// Function ID: 821
// Name: consoleLoggingIntegration
// Dependencies: [708, 693, 692, 788, 717, 821, 749, 756]

// Module 820 (consoleLoggingIntegration)
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 708 */;
import setupIntegration from "setupIntegration" /* 756 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = { [SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.log.console" };

export const consoleLoggingIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let CONSOLE_LEVELS = obj.levels;
  if (!CONSOLE_LEVELS) {
    CONSOLE_LEVELS = CONSOLE_LEVELS(693).CONSOLE_LEVELS;
  }
  return {
    name: "ConsoleLogs",
    setup(getOptions) {
      closure_0 = getOptions;
      options = getOptions.getOptions();
      const normalizeDepth = options.normalizeDepth;
      const normalizeMaxBreadth = options.normalizeMaxBreadth;
      if (options.enableLogs) {
        const result = tmp2(tmp3[3]).addConsoleInstrumentationHandler((arg0) => {
          ({ args, level } = arg0);
          if (obj.getClient() === closure_0) {
            if (CONSOLE_LEVELS.includes(level)) {
              const first = args[0];
              const substr = args.slice(1);
              if ("assert" !== level) {
                let tmp9 = args.length > 1 && typeof args[0] === "string";
                if (tmp9) {
                  tmp9 = !tmp(821).hasConsoleSubstitutions(args[0]);
                  const tmpResult = tmp(821);
                }
                const obj2 = {};
                const merged = Object.assign(attributes);
                if (tmp9) {
                  let consoleTemplateAttributes = tmp(821).createConsoleTemplateAttributes(first, substr);
                  const tmpResult6 = tmp(821);
                } else {
                  consoleTemplateAttributes = {};
                }
                const merged1 = Object.assign(consoleTemplateAttributes);
                let str5 = "info";
                if ("log" !== level) {
                  str5 = level;
                }
                const obj3 = { level: str5, message: null, severityNumber: null, attributes: null };
                const tmpResult7 = tmp(749);
                obj3.message = tmp(821).formatConsoleArgs(args, num, num2);
                let num3;
                if ("log" === level) {
                  num3 = 10;
                }
                obj3.severityNumber = num3;
                obj3.attributes = obj2;
                tmpResult7._INTERNAL_captureLog(obj3);
                const tmpResult8 = tmp(821);
              } else if (!first) {
                let str2 = "Assertion failed";
                if (substr.length > 0) {
                  const _HermesInternal = HermesInternal;
                  str2 = "Assertion failed: " + tmp(821).formatConsoleArgs(substr, num, num2);
                  const tmpResult9 = tmp(821);
                }
                const obj4 = { level: "error", message: str2, attributes };
                tmp(749)._INTERNAL_captureLog(obj4);
                const tmpResult10 = tmp(749);
              }
            }
          }
        });
        const tmp2Result = tmp2(tmp3[3]);
      } else if (tmp2(tmp3[2]).DEBUG_BUILD) {
        const debug = CONSOLE_LEVELS(dependencyMap[1]).debug;
        debug.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
      }
    }
  };
});
