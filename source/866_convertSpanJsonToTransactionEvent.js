// Module ID: 866
// Function ID: 9657
// Name: convertSpanJsonToTransactionEvent
// Dependencies: [77, 816]
// Exports: convertSpanJsonToTransactionEvent, convertTransactionEventToSpanJson

// Module 866 (convertSpanJsonToTransactionEvent)
import _defineProperty from "_defineProperty";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const convertSpanJsonToTransactionEvent = function convertSpanJsonToTransactionEvent(beforeSendSpanResult) {
  let data;
  let profile_id;
  let obj = { type: "transaction", timestamp: beforeSendSpanResult.timestamp, start_timestamp: beforeSendSpanResult.start_timestamp, transaction: beforeSendSpanResult.description };
  obj = {};
  obj = { trace_id: beforeSendSpanResult.trace_id, span_id: beforeSendSpanResult.span_id, parent_span_id: beforeSendSpanResult.parent_span_id, op: beforeSendSpanResult.op, status: beforeSendSpanResult.status, origin: beforeSendSpanResult.origin };
  ({ data, profile_id } = beforeSendSpanResult);
  if (profile_id) {
    profile_id = _defineProperty({}, require(816).SEMANTIC_ATTRIBUTE_PROFILE_ID, beforeSendSpanResult.profile_id);
  }
  let exclusive_time = beforeSendSpanResult.exclusive_time;
  if (exclusive_time) {
    exclusive_time = _defineProperty({}, require(816).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME, beforeSendSpanResult.exclusive_time);
  }
  obj.data = Object.assign({}, data, profile_id, exclusive_time);
  obj.trace = obj;
  obj.contexts = obj;
  obj.measurements = beforeSendSpanResult.measurements;
  return obj;
};
export const convertTransactionEventToSpanJson = function convertTransactionEventToSpanJson(contexts) {
  let data;
  let op;
  let origin;
  let parent_span_id;
  let span_id;
  let status;
  let trace_id;
  contexts = contexts.contexts;
  let trace;
  if (null != contexts) {
    trace = contexts.trace;
  }
  if (null == trace) {
    trace = {};
  }
  ({ trace_id, span_id, data } = trace);
  let obj = {};
  obj = data;
  ({ parent_span_id, status, origin, op } = trace);
  if (null == data) {
    obj = {};
  }
  obj.data = obj;
  obj.description = contexts.transaction;
  obj.op = op;
  obj.parent_span_id = parent_span_id;
  let str = "";
  let str2 = "";
  if (null != span_id) {
    str2 = span_id;
  }
  obj.span_id = str2;
  const start_timestamp = contexts.start_timestamp;
  let num = 0;
  if (null != start_timestamp) {
    num = start_timestamp;
  }
  obj.start_timestamp = num;
  obj.status = status;
  obj.timestamp = contexts.timestamp;
  if (null != trace_id) {
    str = trace_id;
  }
  obj.trace_id = str;
  obj.origin = origin;
  let tmp;
  if (null != data) {
    tmp = data[require(undefined, 816).SEMANTIC_ATTRIBUTE_PROFILE_ID];
  }
  obj.profile_id = tmp;
  let tmp4;
  if (null != data) {
    tmp4 = data[require(undefined, 816).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME];
  }
  obj.exclusive_time = tmp4;
  obj.measurements = contexts.measurements;
  obj.is_segment = true;
  return obj;
};
