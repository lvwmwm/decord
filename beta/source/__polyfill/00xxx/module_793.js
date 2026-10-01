// Module ID: 793
// Function ID: 794
// Dependencies: [752, 689, 784, 713, 785, 773, 686, 697]

// Module 793
import _mod686 from "module_686" /* 686 */;
import _mod697 from "module_697" /* 697 */;
import _mod713 from "module_713" /* 713 */;
import _mod773 from "module_773" /* 773 */;
import severityLevelFromString from "severityLevelFromString" /* 785 */;
import module_752 from "module_752" /* 752 */;

function addConsoleBreadcrumb(level, args) {
  let obj2;
  const obj = { category: "console", data: { arguments: args, logger: "console" }, level: obj2.severityLevelFromString(level), message: null };
  obj2 = severityLevelFromString;
  if ("util" in _mod686.GLOBAL_OBJ) {
    let applyResult;
    if (typeof _mod686.GLOBAL_OBJ.util.format === "function") {
      const util = tmp2(686).GLOBAL_OBJ.util;
      const format = util.format;
      const items = [];
      HermesBuiltin.arraySpread(items, args, 0);
      applyResult = HermesBuiltin.apply(format, items, util);
    }
    obj.message = applyResult;
    if ("assert" === level) {
      if (false === args[0]) {
        const substr = args.slice(1);
        let str4 = "Assertion failed";
        if (substr.length > 0) {
          if ("util" in _mod686.GLOBAL_OBJ) {
            let applyResult1;
            if (typeof _mod686.GLOBAL_OBJ.util.format === "function") {
              const util2 = tmp2(686).GLOBAL_OBJ.util;
              const format2 = util2.format;
              const items1 = [];
              HermesBuiltin.arraySpread(items1, substr, 0);
              applyResult1 = HermesBuiltin.apply(format2, items1, util2);
            }
            const _HermesInternal = HermesInternal;
            str4 = "Assertion failed: " + applyResult1;
          }
          const tmp2Result = _mod697;
          applyResult1 = tmp2Result.safeJoin(substr, " ");
        }
        obj.message = str4;
        obj.data.arguments = substr;
      }
    }
    const obj3 = { input: args, level };
    const tmp2Result3 = _mod773;
    tmp2Result3.addBreadcrumb(obj, obj3);
  }
  const tmp2Result4 = _mod697;
  applyResult = tmp2Result4.safeJoin(args, " ");
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { addConsoleBreadcrumb };
export const consoleIntegration = module_752.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _Set1;
  let CONSOLE_LEVELS = obj.levels;
  const _Set = Set;
  if (!CONSOLE_LEVELS) {
    CONSOLE_LEVELS = _Set1(689).CONSOLE_LEVELS;
  }
  _Set1 = new _Set(CONSOLE_LEVELS);
  return {
    name: "Console",
    setup(arg0) {
      let closure_0 = arg0;
      let obj = _Set1(dependencyMap[2]);
      const result = obj.addConsoleInstrumentationHandler((level) => {
        level = level.level;
        const args = level.args;
        const obj = _mod713;
        const hasItem = obj.getClient() === closure_0 && _Set1.has(level);
        if (hasItem) {
          addConsoleBreadcrumb(level, args);
        }
      });
    }
  };
});
