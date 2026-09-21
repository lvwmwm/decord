// Module ID: 821
// Function ID: 822
// Name: safeJoinConsoleArgs
// Dependencies: [690, 696, 734]
// Exports: createConsoleTemplateAttributes, formatConsoleArgs, hasConsoleSubstitutions, safeJoinConsoleArgs

// Module 821 (safeJoinConsoleArgs)
import normalize from "normalize" /* 734 */;

const require = globalThis.__r;

require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const createConsoleTemplateAttributes = function createConsoleTemplateAttributes(args, substr) {
  const obj = {};
  const array = new Array(substr.length);
  obj["sentry.message.template"] = "" + args + " " + array.fill("{}").join(" ");
  const item = substr.forEach((item, index) => {
    obj["sentry.message.parameter." + index] = item;
  });
  return obj;
};
export const formatConsoleArgs = function formatConsoleArgs(args, normalizeDepth, normalizeMaxBreadth) {
  if ("util" in require("module_690").GLOBAL_OBJ) {
    if (typeof tmp(690).GLOBAL_OBJ.util.format === "function") {
      const util = tmp(690).GLOBAL_OBJ.util;
      const format = util.format;
      const items = [];
      HermesBuiltin.arraySpread(args, 0);
      let applyResult = HermesBuiltin.apply(items, util);
    }
    return applyResult;
  }
  _require = normalizeDepth;
  dependencyMap = normalizeMaxBreadth;
  const mapped = args.map((item) => {
    if (obj.isPrimitive(item)) {
      const _String = String;
      let StringResult = String(item);
    } else {
      const _JSON = JSON;
      const normalizer = normalize;
      StringResult = JSON.stringify(normalizer.normalize(item, closure_0, closure_1));
    }
    return StringResult;
  });
  applyResult = mapped.join(" ");
};
export const hasConsoleSubstitutions = function hasConsoleSubstitutions(args) {
  return /%[sdifocO]/.test(args);
};
export const safeJoinConsoleArgs = function safeJoinConsoleArgs(arr, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  const mapped = arr.map((item) => {
    if (obj.isPrimitive(item)) {
      const _String = String;
      let StringResult = String(item);
    } else {
      const _JSON = JSON;
      const normalizer = normalize;
      StringResult = JSON.stringify(normalizer.normalize(item, closure_0, closure_1));
    }
    return StringResult;
  });
  return mapped.join(" ");
};
