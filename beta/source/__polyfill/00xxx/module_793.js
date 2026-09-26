// Module ID: 793
// Function ID: 794
// Dependencies: [752, 689, 784, 713, 785, 773, 686, 697]

// Module 793
import _mod686 from "module_686" /* 686 */;
import _mod697 from "module_697" /* 697 */;
import _mod713 from "module_713" /* 713 */;
import severityLevelFromString from "severityLevelFromString" /* 785 */;
import setupIntegration from "setupIntegration" /* 752 */;

function addConsoleBreadcrumb(level, args) {
  const obj = { category: "console", data: { arguments: args, logger: "console" }, level: severityLevelFromString.severityLevelFromString(level), message: null };
  if ("util" in _mod686.GLOBAL_OBJ) {
    if (typeof tmp(686).GLOBAL_OBJ.util.format === "function") {
      const util = tmp(686).GLOBAL_OBJ.util;
      const format = util.format;
      const items = [];
      HermesBuiltin.arraySpread(args, 0);
      let applyResult = HermesBuiltin.apply(items, util);
    }
    obj.message = applyResult;
    if ("assert" === level) {
      if (false === args[0]) {
        const substr = args.slice(1);
        if (substr.length <= 0) {
          obj.message = "Assertion failed";
          obj.data.arguments = substr;
        } else {
          if (!("util" in tmp(686).GLOBAL_OBJ)) {
            let safeJoinResult = tmp(697).safeJoin(substr, " ");
            const _HermesInternal = HermesInternal;
            const combined = "Assertion failed: " + safeJoinResult;
            const tmpResult = tmp(697);
          }
          const util2 = tmp(686).GLOBAL_OBJ.util;
          const format2 = util2.format;
          const items1 = [];
          HermesBuiltin.arraySpread(substr, 0);
          safeJoinResult = HermesBuiltin.apply(items1, util2);
        }
      }
    }
    const obj3 = { input: args, level };
    tmp(773).addBreadcrumb(obj, obj3);
  }
  applyResult = _mod697.safeJoin(args, " ");
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { addConsoleBreadcrumb };
export const consoleIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let set;
  let CONSOLE_LEVELS = obj.levels;
  if (!CONSOLE_LEVELS) {
    CONSOLE_LEVELS = set(689).CONSOLE_LEVELS;
  }
  set = new Set(CONSOLE_LEVELS);
  return {
    name: "Console",
    setup(arg0) {
      closure_0 = arg0;
      const result = set(dependencyMap[2]).addConsoleInstrumentationHandler((level) => {
        level = level.level;
        let hasItem = _mod713.getClient() === closure_0;
        if (hasItem) {
          hasItem = set.has(level);
        }
        if (hasItem) {
          addConsoleBreadcrumb(level, level.args);
        }
      });
    }
  };
});
