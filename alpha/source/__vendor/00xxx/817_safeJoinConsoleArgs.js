// Module ID: 817
// Function ID: 818
// Name: safeJoinConsoleArgs
// Dependencies: [685, 691, 729]
// Exports: createConsoleTemplateAttributes, formatConsoleArgs, hasConsoleSubstitutions, safeJoinConsoleArgs

// Module 817 (safeJoinConsoleArgs)
import _mod691 from "module_691" /* 691 */;

const require = globalThis.__r;
let _require, dependencyMap;

let tmp;
const normalize = tmp(729);
const f79359 = (item) => {
  let StringResult;
  const obj = _mod691;
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

export function createConsoleTemplateAttributes(args, substr) {
  let fillResult;
  const obj = { "sentry.message.template": "" + args + " " + fillResult.join(" ") };
  const array = new Array(substr.length);
  fillResult = array.fill("{}");
  const item = substr.forEach((item, index) => {
    obj["sentry.message.parameter." + index] = item;
  });
  return obj;
}
export function formatConsoleArgs(args, normalizeDepth, normalizeMaxBreadth) {
  if ("util" in require("module_685").GLOBAL_OBJ) {
    let applyResult;
    if (typeof require("module_685").GLOBAL_OBJ.util.format === "function") {
      const util = tmp2(685).GLOBAL_OBJ.util;
      const format = util.format;
      const items = [];
      HermesBuiltin.arraySpread(items, args, 0);
      applyResult = HermesBuiltin.apply(format, items, util);
    }
    return applyResult;
  }
  _require = normalizeDepth;
  dependencyMap = normalizeMaxBreadth;
  const mapped = args.map(f79359);
  applyResult = mapped.join(" ");
}
export function hasConsoleSubstitutions(args) {
  const obj = /%[sdifocO]/;
  return obj.test(args);
}
export function safeJoinConsoleArgs(arr, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  const mapped = arr.map(f79359);
  return mapped.join(" ");
}
