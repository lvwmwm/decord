// Module ID: 829
// Function ID: 830
// Name: safeJoinConsoleArgs
// Dependencies: [698, 704, 742]
// Exports: createConsoleTemplateAttributes, formatConsoleArgs, hasConsoleSubstitutions, safeJoinConsoleArgs

// Module 829 (safeJoinConsoleArgs)
import _mod704 from "module_704" /* 704 */;

const require = globalThis.__r;
let _require, dependencyMap;

let tmp;
const normalize = tmp(742);
const f80947 = (item) => {
  let StringResult;
  const obj = _mod704;
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
  if ("util" in require("module_698").GLOBAL_OBJ) {
    let applyResult;
    if (typeof require("module_698").GLOBAL_OBJ.util.format === "function") {
      const util = tmp2(698).GLOBAL_OBJ.util;
      const format = util.format;
      const items = [];
      HermesBuiltin.arraySpread(items, args, 0);
      applyResult = HermesBuiltin.apply(format, items, util);
    }
    return applyResult;
  }
  _require = normalizeDepth;
  dependencyMap = normalizeMaxBreadth;
  const mapped = args.map(f80947);
  applyResult = mapped.join(" ");
};
export const hasConsoleSubstitutions = function hasConsoleSubstitutions(args) {
  const obj = /%[sdifocO]/;
  return obj.test(args);
};
export const safeJoinConsoleArgs = function safeJoinConsoleArgs(arr, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  const mapped = arr.map(f80947);
  return mapped.join(" ");
};
