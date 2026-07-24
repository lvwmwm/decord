// Module ID: 928
// Function ID: 10100
// Name: safeJoinConsoleArgs
// Dependencies: [65, 798, 804, 841]
// Exports: createConsoleTemplateAttributes, formatConsoleArgs, hasConsoleSubstitutions

// Module 928 (safeJoinConsoleArgs)
import _toConsumableArray from "_toConsumableArray";

function safeJoinConsoleArgs(arr, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  const mapped = arr.map((arg0) => {
    if (obj.isPrimitive(arg0)) {
      const _String = String;
      let StringResult = String(arg0);
    } else {
      const _JSON = JSON;
      StringResult = JSON.stringify(callback(841).normalize(arg0, callback, dependencyMap));
      const obj2 = callback(841);
    }
    return StringResult;
  });
  return mapped.join(" ");
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createConsoleTemplateAttributes = function createConsoleTemplateAttributes(first, substr) {
  const obj = {};
  const array = new Array(substr.length);
  obj["sentry.message.template"] = "" + first + " " + array.fill("{}").join(" ");
  const item = substr.forEach((arg0, arg1) => {
    obj["sentry.message.parameter." + arg1] = arg0;
  });
  return obj;
};
export const formatConsoleArgs = function formatConsoleArgs(arr) {
  if ("util" in require(798).GLOBAL_OBJ) {
    if ("function" === typeof require(798).GLOBAL_OBJ.util.format) {
      const util = require(798).GLOBAL_OBJ.util;
      const format = util.format;
      let applyResult = format.apply(util, _toConsumableArray(arr));
    }
    return applyResult;
  }
  applyResult = safeJoinConsoleArgs(arr, arg1, arg2);
};
export const hasConsoleSubstitutions = function hasConsoleSubstitutions(arg0) {
  return /%[sdifocO]/.test(arg0);
};
export { safeJoinConsoleArgs };
