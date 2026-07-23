// Module ID: 946
// Function ID: 10259
// Name: handleResponseError
// Dependencies: [65, 77, 947, 934, 936, 817, 845]
// Exports: handleResponseError, messagesFromParams, setMessagesAttribute, shouldInstrument

// Module 946 (handleResponseError)
import _toConsumableArray from "_toConsumableArray";
import _defineProperty from "_defineProperty";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const handleResponseError = function handleResponseError(setStatus, error) {
  if (error.error) {
    let obj = { code: require(817) /* getSpanStatusFromHttpCode */.SPAN_STATUS_ERROR, message: error.error.type || "internal_error" };
    setStatus.setStatus(obj);
    obj = { mechanism: { handled: false, type: "auto.ai.anthropic.anthropic_error" } };
    require(845) /* captureCheckIn */.captureException(error.error, obj);
    const obj2 = require(845) /* captureCheckIn */;
  }
};
export const messagesFromParams = function messagesFromParams(system) {
  let input;
  let messages;
  ({ messages, input } = system);
  if ("string" === typeof system.system) {
    const obj = { role: "system", content: system.system };
    const items = [obj];
    let items1 = items;
  } else {
    items1 = [];
  }
  let tmp = input;
  if (!Array.isArray(input)) {
    let tmp3;
    if (null != input) {
      const items2 = [input];
      tmp3 = items2;
    }
    tmp = tmp3;
  }
  let tmp4 = messages;
  if (Array.isArray(messages)) {
    const items3 = [];
    if (null != tmp) {
      tmp4 = tmp;
    }
    return items3.concat(items1, _toConsumableArray(tmp4));
  } else if (null != messages) {
    const items4 = [messages];
    let items5 = items4;
  } else {
    items5 = [];
  }
};
export const setMessagesAttribute = function setMessagesAttribute(setAttributes, messagesFromParamsResult) {
  let length;
  if (Array.isArray(messagesFromParamsResult)) {
    length = messagesFromParamsResult.length;
  }
  if (0 !== length) {
    const obj = require(936) /* getFinalOperationName */;
    setAttributes.setAttributes(_defineProperty(_defineProperty({}, require(934).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, require(936) /* getFinalOperationName */.getTruncatedJsonString(messagesFromParamsResult)), require(934).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, length));
    const tmp5 = _defineProperty({}, require(934).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, require(936) /* getFinalOperationName */.getTruncatedJsonString(messagesFromParamsResult));
  }
};
export const shouldInstrument = function shouldInstrument(arg0) {
  const ANTHROPIC_AI_INSTRUMENTED_METHODS = require(947).ANTHROPIC_AI_INSTRUMENTED_METHODS;
  return ANTHROPIC_AI_INSTRUMENTED_METHODS.includes(arg0);
};
