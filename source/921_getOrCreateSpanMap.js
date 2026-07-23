// Module ID: 921
// Function ID: 10058
// Name: getOrCreateSpanMap
// Dependencies: [57, 914, 916, 922, 817]
// Exports: cleanupPendingSpansForTransport, completeSpanWithResults, storeSpanForRequest

// Module 921 (getOrCreateSpanMap)
import _slicedToArray from "_slicedToArray";

function getOrCreateSpanMap(self) {
  let value = weakMap.get(self);
  if (!value) {
    const _Map = Map;
    const map = new Map();
    const result = weakMap.set(self, map);
    value = map;
  }
  return value;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const cleanupPendingSpansForTransport = function cleanupPendingSpansForTransport(arg0) {
  const value = weakMap.get(arg0);
  if (value) {
    const tmp2 = value[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray;
      let tmp6 = _slicedToArray(tmp3, 2)[1];
      let span = tmp6.span;
      let obj = {};
      let tmp7 = require;
      let tmp8 = dependencyMap;
      obj.code = require(817) /* getSpanStatusFromHttpCode */.SPAN_STATUS_ERROR;
      obj.message = "cancelled";
      let setStatusResult = span.setStatus(obj);
      let span2 = tmp6.span;
      let endResult = span2.end();
      continue;
    }
    value.clear();
  }
};
export const completeSpanWithResults = function completeSpanWithResults(self, id, result, closure_0) {
  let method;
  let span;
  let deleteResult = closure_0;
  const obj = getOrCreateSpanMap(self);
  const value = obj.get(id);
  if (value) {
    ({ span, method } = value);
    if ("initialize" === method) {
      result = require(914) /* extractPartyInfo */.extractSessionDataFromInitializeResponse(result);
      const obj3 = require(914) /* extractPartyInfo */;
      const _Object = Object;
      const merged = Object.assign({}, require(914) /* extractPartyInfo */.buildServerAttributesFromInfo(result.serverInfo));
      if (result.protocolVersion) {
        merged[require(916).MCP_PROTOCOL_VERSION_ATTRIBUTE] = result.protocolVersion;
      }
      span.setAttributes(merged);
      span.end();
      deleteResult = obj.delete(id);
      const obj4 = require(914) /* extractPartyInfo */;
    } else if ("tools/call" !== method) {
      if ("prompts/get" === method) {
        span.setAttributes(require(922) /* extractPromptResultAttributes */.extractPromptResultAttributes(result, deleteResult.recordOutputs));
        const obj5 = require(922) /* extractPromptResultAttributes */;
      }
    }
    span.setAttributes(require(922) /* extractPromptResultAttributes */.extractToolResultAttributes(result, deleteResult.recordOutputs));
    const obj2 = require(922) /* extractPromptResultAttributes */;
  }
};
export const storeSpanForRequest = function storeSpanForRequest(self, id, startInactiveSpanResult, method) {
  let obj = getOrCreateSpanMap(self);
  obj = { span: startInactiveSpanResult, method, startTime: Date.now() };
  const result = obj.set(id, obj);
};
