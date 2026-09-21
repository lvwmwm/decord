// Module ID: 797
// Function ID: 798
// Dependencies: [756, 693, 788, 717, 789, 777, 690, 701]

// Module 797
import _mod690 from "module_690" /* 690 */;
import _mod701 from "module_701" /* 701 */;
import _mod717 from "module_717" /* 717 */;
import severityLevelFromString from "severityLevelFromString" /* 789 */;
import setupIntegration from "setupIntegration" /* 756 */;

function addConsoleBreadcrumb(level, args) {
  const obj = { category: "console", data: { arguments: args, logger: "console" }, level: severityLevelFromString.severityLevelFromString(level), message: null };
  if ("util" in _mod690.GLOBAL_OBJ) {
    if (typeof tmp(690).GLOBAL_OBJ.util.format === "function") {
      const util = tmp(690).GLOBAL_OBJ.util;
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
          if (!("util" in tmp(690).GLOBAL_OBJ)) {
            let safeJoinResult = tmp(701).safeJoin(substr, " ");
            const _HermesInternal = HermesInternal;
            const combined = "Assertion failed: " + safeJoinResult;
            const tmpResult = tmp(701);
          }
          const util2 = tmp(690).GLOBAL_OBJ.util;
          const format2 = util2.format;
          const items1 = [];
          HermesBuiltin.arraySpread(substr, 0);
          safeJoinResult = HermesBuiltin.apply(items1, util2);
        }
      }
    }
    const obj3 = { input: args, level };
    tmp(777).addBreadcrumb(obj, obj3);
  }
  applyResult = _mod701.safeJoin(args, " ");
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
    CONSOLE_LEVELS = set(693).CONSOLE_LEVELS;
  }
  set = new Set(CONSOLE_LEVELS);
  return {
    name: "Console",
    setup(arg0) {
      closure_0 = arg0;
      const result = set(dependencyMap[2]).addConsoleInstrumentationHandler((level) => {
        level = level.level;
        let hasItem = _mod717.getClient() === closure_0;
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
