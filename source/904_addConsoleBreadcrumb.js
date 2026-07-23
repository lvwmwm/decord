// Module ID: 904
// Function ID: 9943
// Name: addConsoleBreadcrumb
// Dependencies: [65, 863, 801, 895, 825, 896, 884, 798, 809]

// Module 904 (addConsoleBreadcrumb)
import _toConsumableArray from "_toConsumableArray";
import setupIntegration from "setupIntegration";

function addConsoleBreadcrumb(level, arguments) {
  obj = { category: "console", data: obj };
  obj = { arguments, logger: "console", level: require(896) /* severityLevelFromString */.severityLevelFromString(level), message: formatConsoleArgs(arguments) };
  if ("assert" === level) {
    if (false === arguments[0]) {
      const substr = arguments.slice(1);
      let str2 = "Assertion failed";
      if (substr.length > 0) {
        const _HermesInternal = HermesInternal;
        str2 = "Assertion failed: " + formatConsoleArgs(substr);
      }
      obj.message = str2;
      obj.data.arguments = substr;
    }
  }
  const obj3 = require(896) /* severityLevelFromString */;
  obj = { input: arguments, level };
  require(884) /* addBreadcrumb */.addBreadcrumb(obj, obj);
}
function formatConsoleArgs(arg0) {
  if ("util" in require(798).GLOBAL_OBJ) {
    if ("function" === typeof require(798).GLOBAL_OBJ.util.format) {
      const util = require(798).GLOBAL_OBJ.util;
      const format = util.format;
      let applyResult = format.apply(util, _toConsumableArray(arg0));
    }
    return applyResult;
  }
  applyResult = require(809) /* isMatchingPattern */.safeJoin(arg0, " ");
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { addConsoleBreadcrumb };
export const consoleIntegration = setupIntegration.defineIntegration(() => {
  let _Set = Set;
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let CONSOLE_LEVELS = {}.levels;
    if (!CONSOLE_LEVELS) {
      CONSOLE_LEVELS = _Set(801).CONSOLE_LEVELS;
    }
    const prototype = _Set.prototype;
    _Set = new _Set(CONSOLE_LEVELS);
    const obj = {
      name: "Console",
      setup(arg0) {
          let closure_0 = arg0;
          const result = _Set(outer1_1[3]).addConsoleInstrumentationHandler((level) => {
            level = level.level;
            let hasItem = _Set(outer2_1[4]).getClient() === set;
            if (hasItem) {
              hasItem = set.has(level);
            }
            if (hasItem) {
              outer2_3(level, level.args);
            }
          });
        }
    };
    return obj;
  }
});
