// Module ID: 904
// Function ID: 9938
// Name: addConsoleBreadcrumb
// Dependencies: []

// Module 904 (addConsoleBreadcrumb)
function addConsoleBreadcrumb(level, arguments) {
  let obj = { category: "console", data: obj };
  obj = { arguments, logger: "console", level: require(dependencyMap[5]).severityLevelFromString(level), message: formatConsoleArgs(arguments) };
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
  const obj3 = require(dependencyMap[5]);
  obj = { input: arguments, level };
  require(dependencyMap[6]).addBreadcrumb(obj, obj);
}
function formatConsoleArgs(arg0) {
  if ("util" in require(dependencyMap[7]).GLOBAL_OBJ) {
    if ("function" === typeof require(dependencyMap[7]).GLOBAL_OBJ.util.format) {
      const util = require(dependencyMap[7]).GLOBAL_OBJ.util;
      const format = util.format;
      let applyResult = format.apply(util, callback(arg0));
    }
    return applyResult;
  }
  applyResult = require(dependencyMap[8]).safeJoin(arg0, " ");
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[1]);

export { addConsoleBreadcrumb };
export const consoleIntegration = _module.defineIntegration(() => {
  let _Set = Set;
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let CONSOLE_LEVELS = {}.levels;
    if (!CONSOLE_LEVELS) {
      CONSOLE_LEVELS = require(dependencyMap[2]).CONSOLE_LEVELS;
    }
    const prototype = _Set.prototype;
    _Set = new _Set(CONSOLE_LEVELS);
    const require = _Set;
    const obj = {
      name: "Console",
      setup(arg0) {
          const _Set = arg0;
          const result = _Set(closure_1[3]).addConsoleInstrumentationHandler((level) => {
            level = level.level;
            let hasItem = level(closure_1[4]).getClient() === level;
            if (hasItem) {
              hasItem = level.has(level);
            }
            if (hasItem) {
              callback(level, level.args);
            }
          });
        }
    };
    return obj;
  }
});
