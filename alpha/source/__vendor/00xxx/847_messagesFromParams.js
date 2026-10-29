// Module ID: 847
// Function ID: 848
// Name: messagesFromParams
// Dependencies: [848, 837, 836, 716, 745]
// Exports: handleResponseError, messagesFromParams, setMessagesAttribute, shouldInstrument

// Module 847 (messagesFromParams)
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 716 */;
import _mod745 from "module_745" /* 745 */;
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE" /* 836 */;
import extractSystemInstructions from "extractSystemInstructions" /* 837 */;
import ANTHROPIC_AI_INSTRUMENTED_METHODS2 from "ANTHROPIC_AI_INSTRUMENTED_METHODS" /* 848 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function handleResponseError(setStatus, error) {
  if (error.error) {
    setStatus = setStatus.setStatus;
    const obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: error.error.type || "internal_error" };
    setStatus(obj);
    const obj2 = { mechanism: { handled: false, type: "auto.ai.anthropic.anthropic_error" } };
    const tmp2Result = _mod745;
    tmp2Result.captureException(error.error, obj2);
  }
}
export function messagesFromParams(first1) {
  let input;
  let items1;
  let messages;
  ({ messages, input } = first1);
  if (typeof first1.system === "string") {
    const items = [{ role: "system", content: first1.system }];
    items1 = items;
    const obj = { role: "system", content: first1.system };
  } else {
    items1 = [];
  }
  let tmp2 = input;
  if (!Array.isArray(input)) {
    let tmp4;
    if (null != input) {
      const items2 = [input];
      tmp4 = items2;
    }
    tmp2 = tmp4;
  }
  let tmp5 = messages;
  if (!Array.isArray(messages)) {
    let items4;
    if (null != messages) {
      const items3 = [messages];
      items4 = items3;
    } else {
      items4 = [];
    }
    tmp5 = items4;
  }
  const items5 = [...items1];
  if (tmp2 == null) {
    tmp2 = tmp5;
  }
  HermesBuiltin.arraySpread(items5, tmp2, tmp7);
  return items5;
}
export function setMessagesAttribute(setAttributes, messagesFromParamsResult) {
  let filteredMessages;
  let systemInstructions;
  if (!Array.isArray(messagesFromParamsResult)) {
    const obj = extractSystemInstructions;
    const result = obj.extractSystemInstructions(messagesFromParamsResult);
    ({ systemInstructions, filteredMessages } = result);
    if (systemInstructions) {
      const obj2 = {};
      obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE] = systemInstructions;
      setAttributes.setAttributes(obj2);
    }
    const _Array = Array;
    let num2 = 1;
    if (Array.isArray(filteredMessages)) {
      num2 = filteredMessages.length;
    }
    const obj3 = {};
    setAttributes = setAttributes.setAttributes;
    const GEN_AI_INPUT_MESSAGES_ATTRIBUTE = tmp2(836).GEN_AI_INPUT_MESSAGES_ATTRIBUTE;
    const tmp2Result = extractSystemInstructions;
    obj3[GEN_AI_INPUT_MESSAGES_ATTRIBUTE] = tmp2Result.getTruncatedJsonString(filteredMessages);
    obj3[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = num2;
    setAttributes(obj3);
  }
}
export function shouldInstrument(arg0) {
  const ANTHROPIC_AI_INSTRUMENTED_METHODS = ANTHROPIC_AI_INSTRUMENTED_METHODS2.ANTHROPIC_AI_INSTRUMENTED_METHODS;
  return ANTHROPIC_AI_INSTRUMENTED_METHODS.includes(arg0);
}
