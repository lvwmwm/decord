// Module ID: 928
// Function ID: 10098
// Name: safeJoinConsoleArgs
// Dependencies: []
// Exports: createConsoleTemplateAttributes, formatConsoleArgs, hasConsoleSubstitutions

// Module 928 (safeJoinConsoleArgs)
function safeJoinConsoleArgs(arr, arg1, arg2) {
  const require = arg1;
  const dependencyMap = arg2;
  const mapped = arr.map((arg0) => {
    if (obj.isPrimitive(arg0)) {
      const _String = String;
      let StringResult = String(arg0);
    } else {
      const _JSON = JSON;
      StringResult = JSON.stringify(arg1(arg2[3]).normalize(arg0, arg1, arg2));
      const obj2 = arg1(arg2[3]);
    }
    return StringResult;
  });
  return mapped.join(" ");
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createConsoleTemplateAttributes = function createConsoleTemplateAttributes(first, substr) {
  const obj = {};
  const require = obj;
  const array = new Array(substr.length);
  obj.sentry.message.template = "" + first + " " + array.fill("{}").join(" ");
  const item = substr.forEach((arg0, arg1) => {
    obj["sentry.message.parameter." + arg1] = arg0;
  });
  return obj;
};
export const formatConsoleArgs = function formatConsoleArgs(arr) {
  if ("util" in require(dependencyMap[1]).GLOBAL_OBJ) {
    if ("function" === typeof require(dependencyMap[1]).GLOBAL_OBJ.util.format) {
      const util = require(dependencyMap[1]).GLOBAL_OBJ.util;
      const format = util.format;
      let applyResult = format.apply(util, callback(arr));
    }
    return applyResult;
  }
  applyResult = safeJoinConsoleArgs(arr, arg1, arg2);
};
export const hasConsoleSubstitutions = function hasConsoleSubstitutions(arg0) {
  return /%[sdifocO]/.test(arg0);
};
export { safeJoinConsoleArgs };
