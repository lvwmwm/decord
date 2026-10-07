// Module ID: 821
// Function ID: 822
// Name: cleanupPendingSpansForTransport
// Dependencies: [32, 814, 816, 822, 716]
// Exports: cleanupPendingSpansForTransport, completeSpanWithResults, storeSpanForRequest

// Module 821 (cleanupPendingSpansForTransport)
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 716 */;
import _mod814 from "module_814" /* 814 */;
import extractPromptResultAttributes from "extractPromptResultAttributes" /* 822 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let map;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const cleanupPendingSpansForTransport = function cleanupPendingSpansForTransport(arg0) {
  const value = weakMap.get(arg0);
  if (value) {
    const tmp2 = value[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp7 = _slicedToArray(tmp4, 2)[1];
      let span = tmp7.span;
      let obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "cancelled" };
      let setStatus = span.setStatus;
      let setStatusResult = setStatus(obj);
      let span2 = tmp7.span;
      let endResult = span2.end();
      continue;
    }
    value.clear();
  }
};
export const completeSpanWithResults = function completeSpanWithResults(arg0, id, result, self) {
  let method;
  let span;
  let value = weakMap.get(arg0);
  const obj = weakMap;
  if (!value) {
    const _Map = Map;
    self = this;
    const self2 = this;
    map = new Map();
    result = obj.set(arg0, map);
    value = map;
  }
  const value2 = value.get(id);
  if (value2) {
    ({ span, method } = value2);
    if ("initialize" === method) {
      const obj4 = _mod814;
      const result1 = obj4.extractSessionDataFromInitializeResponse(result);
      const obj2 = {};
      const obj6 = _mod814;
      const merged = Object.assign(obj6.buildServerAttributesFromInfo(result1.serverInfo));
      const tmp10 = require;
      if (result1.protocolVersion) {
        obj2[tmp10(816).MCP_PROTOCOL_VERSION_ATTRIBUTE] = result1.protocolVersion;
      }
      span.setAttributes(obj2);
    } else if ("tools/call" === method) {
      const obj3 = extractPromptResultAttributes;
      span.setAttributes(obj3.extractToolResultAttributes(result, self.recordOutputs));
    } else if ("prompts/get" === method) {
      const obj7 = extractPromptResultAttributes;
      span.setAttributes(obj7.extractPromptResultAttributes(result, self.recordOutputs));
    }
    span.end();
    value.delete(id);
  }
};
export const storeSpanForRequest = function storeSpanForRequest(self, id, startInactiveSpanResult, method) {
  let value = weakMap.get(self);
  const obj = weakMap;
  if (!value) {
    const _Map = Map;
    self = this;
    const self2 = this;
    map = new Map();
    const result = obj.set(self, map);
    value = map;
  }
  const obj2 = { span: startInactiveSpanResult, method, startTime: Date.now() };
  const result1 = value.set(id, obj2);
};
