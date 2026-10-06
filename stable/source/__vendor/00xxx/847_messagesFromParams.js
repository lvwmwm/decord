// Module ID: 847
// Function ID: 848
// Name: messagesFromParams
// Dependencies: [848, 835, 837, 717, 746]
// Exports: handleResponseError, messagesFromParams, setMessagesAttribute, shouldInstrument

// Module 847 (messagesFromParams)
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 717 */;
import _mod746 from "module_746" /* 746 */;
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE" /* 835 */;
import _mod837 from "module_837" /* 837 */;
import ANTHROPIC_AI_INSTRUMENTED_METHODS2 from "ANTHROPIC_AI_INSTRUMENTED_METHODS" /* 848 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const handleResponseError = function handleResponseError(setStatus, error) {
  if (error.error) {
    setStatus = setStatus.setStatus;
    const obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: error.error.type || "internal_error" };
    setStatus(obj);
    const obj2 = { mechanism: { handled: false, type: "auto.ai.anthropic.anthropic_error" } };
    const tmp2Result = _mod746;
    tmp2Result.captureException(error.error, obj2);
  }
};
export const messagesFromParams = function messagesFromParams(first1) {
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
};
export const setMessagesAttribute = function setMessagesAttribute(setAttributes, messagesFromParamsResult) {
  let length;
  if (Array.isArray(messagesFromParamsResult)) {
    length = messagesFromParamsResult.length;
  }
  if (0 !== length) {
    const obj = {};
    setAttributes = setAttributes.setAttributes;
    const GEN_AI_REQUEST_MESSAGES_ATTRIBUTE = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE;
    const obj2 = _mod837;
    obj[GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = obj2.getTruncatedJsonString(messagesFromParamsResult);
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = length;
    setAttributes(obj);
  }
};
export const shouldInstrument = function shouldInstrument(arg0) {
  const ANTHROPIC_AI_INSTRUMENTED_METHODS = ANTHROPIC_AI_INSTRUMENTED_METHODS2.ANTHROPIC_AI_INSTRUMENTED_METHODS;
  return ANTHROPIC_AI_INSTRUMENTED_METHODS.includes(arg0);
};
