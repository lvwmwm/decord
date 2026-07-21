// Module ID: 946
// Function ID: 10258
// Name: handleResponseError
// Dependencies: []
// Exports: handleResponseError, messagesFromParams, setMessagesAttribute, shouldInstrument

// Module 946 (handleResponseError)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const handleResponseError = function handleResponseError(setStatus, error) {
  if (error.error) {
    let obj = { code: require(dependencyMap[5]).SPAN_STATUS_ERROR, message: error.error.type || "internal_error" };
    setStatus.setStatus(obj);
    obj = { mechanism: { id: -37057201859176220000000000000000000000000000000000000000000000000000000000000000000000000000, gameId: 219408260989583100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } };
    require(dependencyMap[6]).captureException(error.error, obj);
    const obj2 = require(dependencyMap[6]);
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
    return items3.concat(items1, closure_2(tmp4));
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
    const obj = require(dependencyMap[4]);
    setAttributes.setAttributes(callback(callback({}, require(dependencyMap[3]).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, require(dependencyMap[4]).getTruncatedJsonString(messagesFromParamsResult)), require(dependencyMap[3]).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, length));
    const tmp5 = callback({}, require(dependencyMap[3]).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, require(dependencyMap[4]).getTruncatedJsonString(messagesFromParamsResult));
  }
};
export const shouldInstrument = function shouldInstrument(arg0) {
  const ANTHROPIC_AI_INSTRUMENTED_METHODS = require(dependencyMap[2]).ANTHROPIC_AI_INSTRUMENTED_METHODS;
  return ANTHROPIC_AI_INSTRUMENTED_METHODS.includes(arg0);
};
