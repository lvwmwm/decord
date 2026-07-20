// Module ID: 921
// Function ID: 10053
// Name: getOrCreateSpanMap
// Dependencies: []
// Exports: cleanupPendingSpansForTransport, completeSpanWithResults, storeSpanForRequest

// Module 921 (getOrCreateSpanMap)
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
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const cleanupPendingSpansForTransport = function cleanupPendingSpansForTransport(arg0) {
  const value = weakMap.get(arg0);
  if (value) {
    const tmp2 = value[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = callback;
      let tmp6 = callback(tmp3, 2)[1];
      let span = tmp6.span;
      let obj = {};
      let tmp7 = require;
      let tmp8 = dependencyMap;
      obj.code = require(dependencyMap[4]).SPAN_STATUS_ERROR;
      obj.message = "cancelled";
      let setStatusResult = span.setStatus(obj);
      let span2 = tmp6.span;
      let endResult = span2.end();
      // continue
    }
    value.clear();
  }
};
export const completeSpanWithResults = function completeSpanWithResults(self, id, result, self2) {
  let method;
  let span;
  let deleteResult = self2;
  const obj = getOrCreateSpanMap(self);
  const value = obj.get(id);
  if (value) {
    ({ span, method } = value);
    if ("initialize" === method) {
      result = require(dependencyMap[1]).extractSessionDataFromInitializeResponse(result);
      const obj3 = require(dependencyMap[1]);
      const _Object = Object;
      const merged = Object.assign({}, require(dependencyMap[1]).buildServerAttributesFromInfo(result.serverInfo));
      if (result.protocolVersion) {
        merged[require(dependencyMap[2]).MCP_PROTOCOL_VERSION_ATTRIBUTE] = result.protocolVersion;
      }
      span.setAttributes(merged);
      span.end();
      deleteResult = obj.delete(id);
      const obj4 = require(dependencyMap[1]);
    } else if ("tools/call" !== method) {
      if ("prompts/get" === method) {
        span.setAttributes(require(dependencyMap[3]).extractPromptResultAttributes(result, deleteResult.recordOutputs));
        const obj5 = require(dependencyMap[3]);
      }
    }
    span.setAttributes(require(dependencyMap[3]).extractToolResultAttributes(result, deleteResult.recordOutputs));
    const obj2 = require(dependencyMap[3]);
  }
};
export const storeSpanForRequest = function storeSpanForRequest(self, id, startInactiveSpanResult, method) {
  let obj = getOrCreateSpanMap(self);
  obj = { span: startInactiveSpanResult, method, startTime: Date.now() };
  const result = obj.set(id, obj);
};
