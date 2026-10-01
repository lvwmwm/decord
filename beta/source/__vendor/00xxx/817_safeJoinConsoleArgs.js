// Module ID: 817
// Function ID: 818
// Name: safeJoinConsoleArgs
// Dependencies: [686, 692, 730]
// Exports: createConsoleTemplateAttributes, formatConsoleArgs, hasConsoleSubstitutions, safeJoinConsoleArgs

// Module 817 (safeJoinConsoleArgs)
import _mod692 from "module_692" /* 692 */;

const require = globalThis.__r;
let _require, dependencyMap;

let tmp;
const normalize = tmp(730);
const f72079 = (item) => {
  let StringResult;
  const obj = _mod692;
  if (obj.isPrimitive(item)) {
    const _String = String;
    StringResult = String(item);
  } else {
    const _JSON = JSON;
    const normalizer = normalize;
    StringResult = stringify(normalizer.normalize(item, normalizeDepth, normalizeMaxBreadth));
  }
  return StringResult;
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createConsoleTemplateAttributes = function createConsoleTemplateAttributes(args, substr) {
  let fillResult;
  const obj = { "sentry.message.template": "" + args + " " + fillResult.join(" ") };
  const array = new Array(substr.length);
  fillResult = array.fill("{}");
  const item = substr.forEach((item, index) => {
    obj["sentry.message.parameter." + index] = item;
  });
  return obj;
};
export const formatConsoleArgs = function formatConsoleArgs(args, normalizeDepth, normalizeMaxBreadth) {
  if ("util" in require("module_686").GLOBAL_OBJ) {
    let applyResult;
    if (typeof require("module_686").GLOBAL_OBJ.util.format === "function") {
      const util = tmp2(686).GLOBAL_OBJ.util;
      const format = util.format;
      const items = [];
      HermesBuiltin.arraySpread(items, args, 0);
      applyResult = HermesBuiltin.apply(format, items, util);
    }
    return applyResult;
  }
  _require = normalizeDepth;
  dependencyMap = normalizeMaxBreadth;
  const mapped = args.map(f72079);
  applyResult = mapped.join(" ");
};
export const hasConsoleSubstitutions = function hasConsoleSubstitutions(args) {
  const obj = /%[sdifocO]/;
  return obj.test(args);
};
export const safeJoinConsoleArgs = function safeJoinConsoleArgs(arr, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  const mapped = arr.map(f72079);
  return mapped.join(" ");
};
