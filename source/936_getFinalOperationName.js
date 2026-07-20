// Module ID: 936
// Function ID: 10130
// Name: getFinalOperationName
// Dependencies: []
// Exports: buildMethodPath, getSpanOperation, getTruncatedJsonString, setTokenUsageAttributes

// Module 936 (getFinalOperationName)
function getFinalOperationName(arr) {
  let str = "messages";
  if (!arr.includes("messages")) {
    let str2 = "completions";
    if (!arr.includes("completions")) {
      let str3 = "models";
      if (!arr.includes("models")) {
        let str4 = "chat";
        if (!arr.includes("chat")) {
          const parts = arr.split(".");
          str4 = parts.pop() || "unknown";
          const tmp = parts.pop() || "unknown";
        }
        str3 = str4;
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const buildMethodPath = function buildMethodPath(arg0, arg1) {
  let combined = arg1;
  if (arg0) {
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + "." + arg1;
  }
  return combined;
};
export { getFinalOperationName };
export const getSpanOperation = function getSpanOperation(arr) {
  return "gen_ai." + getFinalOperationName(arr);
};
export const getTruncatedJsonString = function getTruncatedJsonString(arr) {
  if ("string" === typeof arr) {
    return require(dependencyMap[2]).truncateGenAiStringInput(arr);
  } else {
    const _Array = Array;
    if (Array.isArray(arr)) {
      const _JSON2 = JSON;
      return JSON.stringify(require(dependencyMap[2]).truncateGenAiMessages(arr));
    } else {
      const _JSON = JSON;
      return JSON.stringify(arr);
    }
  }
};
export const setTokenUsageAttributes = function setTokenUsageAttributes(setAttributes) {
  if (undefined !== arg1) {
    setAttributes.setAttributes(callback({}, require(dependencyMap[1]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, arg1));
  }
  if (undefined !== arg2) {
    setAttributes.setAttributes(callback({}, require(dependencyMap[1]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, arg2));
  }
  let num3 = 0;
  if (null != arg1) {
    num3 = arg1;
  }
  let num4 = 0;
  if (null != arg2) {
    num4 = arg2;
  }
  let num5 = 0;
  const sum = num3 + num4;
  if (null != arg3) {
    num5 = arg3;
  }
  let num6 = 0;
  const sum1 = sum + num5;
  if (null != arg4) {
    num6 = arg4;
  }
  const sum2 = sum1 + num6;
  setAttributes.setAttributes(callback({}, require(dependencyMap[1]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, sum2));
};
