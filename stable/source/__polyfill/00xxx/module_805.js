// Module ID: 805
// Function ID: 806
// Dependencies: [764, 701, 796, 725, 797, 785, 698, 709]

// Module 805
import _mod698 from "module_698" /* 698 */;
import _mod709 from "module_709" /* 709 */;
import _mod725 from "module_725" /* 725 */;
import _mod785 from "module_785" /* 785 */;
import severityLevelFromString from "severityLevelFromString" /* 797 */;
import module_764 from "module_764" /* 764 */;

function addConsoleBreadcrumb(level, args) {
  let obj2;
  const obj = { category: "console", data: { arguments: args, logger: "console" }, level: obj2.severityLevelFromString(level), message: null };
  obj2 = severityLevelFromString;
  if ("util" in _mod698.GLOBAL_OBJ) {
    let applyResult;
    if (typeof _mod698.GLOBAL_OBJ.util.format === "function") {
      const util = tmp2(698).GLOBAL_OBJ.util;
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
          if ("util" in _mod698.GLOBAL_OBJ) {
            let applyResult1;
            if (typeof _mod698.GLOBAL_OBJ.util.format === "function") {
              const util2 = tmp2(698).GLOBAL_OBJ.util;
              const format2 = util2.format;
              const items1 = [];
              HermesBuiltin.arraySpread(items1, substr, 0);
              applyResult1 = HermesBuiltin.apply(format2, items1, util2);
            }
            const _HermesInternal = HermesInternal;
            str4 = "Assertion failed: " + applyResult1;
          }
          const tmp2Result = _mod709;
          applyResult1 = tmp2Result.safeJoin(substr, " ");
        }
        obj.message = str4;
        obj.data.arguments = substr;
      }
    }
    const obj3 = { input: args, level };
    const tmp2Result3 = _mod785;
    tmp2Result3.addBreadcrumb(obj, obj3);
  }
  const tmp2Result4 = _mod709;
  applyResult = tmp2Result4.safeJoin(args, " ");
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { addConsoleBreadcrumb };
export const consoleIntegration = module_764.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _Set1;
  let CONSOLE_LEVELS = obj.levels;
  const _Set = Set;
  if (!CONSOLE_LEVELS) {
    CONSOLE_LEVELS = _Set1(701).CONSOLE_LEVELS;
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
        const obj = _mod725;
        const hasItem = obj.getClient() === closure_0 && _Set1.has(level);
        if (hasItem) {
          addConsoleBreadcrumb(level, args);
        }
      });
    }
  };
});
