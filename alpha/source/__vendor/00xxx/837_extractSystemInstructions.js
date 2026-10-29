// Module ID: 837
// Function ID: 838
// Name: extractSystemInstructions
// Dependencies: [836, 838]
// Exports: buildMethodPath, extractSystemInstructions, getFinalOperationName, getSpanOperation, getTruncatedJsonString, setTokenUsageAttributes

// Module 837 (extractSystemInstructions)
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE" /* 836 */;
import DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT from "DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT" /* 838 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function buildMethodPath(arg0, arg1) {
  let combined = arg1;
  if (arg0) {
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + "." + arg1;
  }
  return combined;
}
export function extractSystemInstructions(arr) {
  let items;
  let items1;
  if (Array.isArray(arr)) {
    const findIndexResult = arr.findIndex((role) => role && typeof role === "object" && "role" in role && "system" === role.role);
    if (-1 === findIndexResult) {
      return { systemInstructions: "Array", filteredMessages: arr };
    } else {
      let content;
      let obj5;
      if (typeof arr[findIndexResult].content === "string") {
        content = tmp7.content;
      } else if (undefined !== arr[findIndexResult].content) {
        const _JSON = JSON;
        content = JSON.stringify(tmp7.content);
      }
      if (content) {
        const _JSON2 = JSON;
        const obj3 = { systemInstructions: JSON.stringify(items), filteredMessages: items1 };
        items = [{ type: "text", content }];
        items1 = [];
        const obj4 = { type: "text", content };
        const arraySpreadResult = HermesBuiltin.arraySpread(items1, arr.slice(0, findIndexResult), 0);
        HermesBuiltin.arraySpread(items1, arr.slice(findIndexResult + 1), arraySpreadResult);
        obj5 = obj3;
      } else {
        obj5 = { systemInstructions: "Array", filteredMessages: arr };
      }
      return obj5;
    }
  } else {
    return { systemInstructions: "Array", filteredMessages: arr };
  }
}
export function getFinalOperationName(arr) {
  let str = "chat";
  let str2 = "chat";
  if (!arr.includes("messages")) {
    let str4 = "text_completion";
    if (!arr.includes("completions")) {
      let str6 = "generate_content";
      if (!arr.includes("generateContent")) {
        let str7 = "models";
        if (!arr.includes("models")) {
          if (!arr.includes(`chat`)) {
            const parts = arr.split(".");
            str = parts.pop() || "unknown";
            parts.pop() || "unknown";
          }
          str7 = str;
        }
        str6 = str7;
      }
      str4 = str6;
    }
    str2 = str4;
  }
  return str2;
}
export function getSpanOperation(arr) {
  let str = "chat";
  let str2 = "chat";
  if (!arr.includes("messages")) {
    let str4 = "text_completion";
    if (!arr.includes("completions")) {
      let str6 = "generate_content";
      if (!arr.includes("generateContent")) {
        let str7 = "models";
        if (!arr.includes("models")) {
          if (!arr.includes(`chat`)) {
            const parts = arr.split(".");
            str = parts.pop() || "unknown";
            parts.pop() || "unknown";
          }
          str7 = str;
        }
        str6 = str7;
      }
      str4 = str6;
    }
    str2 = str4;
  }
  return "gen_ai." + str2;
}
export function getTruncatedJsonString(filteredMessages) {
  if (typeof filteredMessages === "string") {
    const obj2 = DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT;
    return obj2.truncateGenAiStringInput(filteredMessages);
  } else {
    const _Array = Array;
    if (Array.isArray(filteredMessages)) {
      const _JSON2 = JSON;
      const obj = DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT;
      return JSON.stringify(obj.truncateGenAiMessages(filteredMessages));
    } else {
      const _JSON = JSON;
      return JSON.stringify(filteredMessages);
    }
  }
}
export function setTokenUsageAttributes(setAttributes, arg1, arg2, arg3, arg4) {
  let num = arg1;
  if (undefined !== arg1) {
    const obj = {};
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = num;
    setAttributes.setAttributes(obj);
  }
  let num2 = arg2;
  if (undefined !== arg2) {
    const obj2 = {};
    obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = num2;
    setAttributes.setAttributes(obj2);
  }
  let num3 = arg3;
  let num4 = arg4;
  if (num == null) {
    num = 0;
  }
  if (num2 == null) {
    num2 = 0;
  }
  const sum = num + num2;
  if (num3 == null) {
    num3 = 0;
  }
  const sum1 = sum + num3;
  if (num4 == null) {
    num4 = 0;
  }
  const sum2 = sum1 + num4;
  setAttributes.setAttributes({ [closure_1_0(closure_1_1[0]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE]: sum2 });
}
