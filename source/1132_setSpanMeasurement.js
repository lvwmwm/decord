// Module ID: 1132
// Function ID: 12905
// Name: setSpanMeasurement
// Dependencies: [65, 77, 794, 793]
// Exports: createChildSpanJSON, getBundleStartTimestampMs, getLatestChildSpanEndTimestamp, getTimeOriginMilliseconds, isNearToNow, setSpanDurationAsMeasurement, setSpanDurationAsMeasurementOnSpan

// Module 1132 (setSpanMeasurement)
import _toConsumableArray from "_toConsumableArray";
import _defineProperty from "_defineProperty";

const require = arg1;
function setSpanMeasurement(addEvent, STALL_COUNT, value, unit) {
  addEvent.addEvent(STALL_COUNT, callback2(callback2({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, value), require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, unit));
}
function createSpanJSON(span_id) {
  let obj = require(794) /* registerSpanErrorInstrumentation */;
  obj = {};
  const merged = Object.assign({ status: "ok" }, span_id);
  if (span_id.span_id) {
    span_id = span_id.span_id;
  } else {
    const obj3 = require(794) /* registerSpanErrorInstrumentation */;
    span_id = require(794) /* registerSpanErrorInstrumentation */.uuid4().substring(16);
    const str = require(794) /* registerSpanErrorInstrumentation */.uuid4();
  }
  obj.span_id = span_id;
  if (span_id.trace_id) {
    let trace_id = span_id.trace_id;
  } else {
    trace_id = require(794) /* registerSpanErrorInstrumentation */.uuid4();
    const obj4 = require(794) /* registerSpanErrorInstrumentation */;
  }
  obj.trace_id = trace_id;
  const obj5 = require(794) /* registerSpanErrorInstrumentation */;
  obj.data = obj5.dropUndefinedKeys(Object.assign(callback2(callback2({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_OP, span_id.op), require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, span_id.origin), span_id.data ? span_id.data : {}));
  return obj.dropUndefinedKeys(Object.assign(merged, obj));
}
let closure_4 = Date.now();

export const defaultTransactionSource = "component";
export const customTransactionSource = "custom";
export const MARGIN_OF_ERROR_SECONDS = 0.05;
export function getTimeOriginMilliseconds() {
  return closure_4;
}
export const isNearToNow = function isNearToNow(timestamp) {
  let tmp2 = !tmp;
  if (!!timestamp) {
    const _Math = Math;
    tmp2 = Math.abs(require(794) /* registerSpanErrorInstrumentation */.timestampInSeconds() - timestamp) <= 0.05;
    const obj = require(794) /* registerSpanErrorInstrumentation */;
  }
  return tmp2;
};
export const setSpanDurationAsMeasurement = function setSpanDurationAsMeasurement(time_to_full_display, _toConsumableArray) {
  let start_timestamp;
  let timestamp;
  const obj = require(794) /* registerSpanErrorInstrumentation */;
  ({ timestamp, start_timestamp } = require(794) /* registerSpanErrorInstrumentation */.spanToJSON(_toConsumableArray));
  let tmp2 = timestamp;
  if (timestamp) {
    tmp2 = start_timestamp;
  }
  if (tmp2) {
    require(794) /* registerSpanErrorInstrumentation */.setMeasurement(time_to_full_display, 1000 * (timestamp - start_timestamp), "millisecond");
    const obj2 = require(794) /* registerSpanErrorInstrumentation */;
  }
};
export const setSpanDurationAsMeasurementOnSpan = function setSpanDurationAsMeasurementOnSpan(time_to_initial_display, span, activeSpan) {
  let start_timestamp;
  let timestamp;
  const obj = require(794) /* registerSpanErrorInstrumentation */;
  ({ timestamp, start_timestamp } = require(794) /* registerSpanErrorInstrumentation */.spanToJSON(span));
  let tmp2 = timestamp;
  if (timestamp) {
    tmp2 = start_timestamp;
  }
  if (tmp2) {
    setSpanMeasurement(activeSpan, time_to_initial_display, 1000 * (timestamp - start_timestamp), "millisecond");
  }
};
export { setSpanMeasurement };
export const getLatestChildSpanEndTimestamp = function getLatestChildSpanEndTimestamp(outer1_0) {
  const spanDescendants = require(794) /* registerSpanErrorInstrumentation */.getSpanDescendants(outer1_0);
  const mapped = spanDescendants.map((arg0) => outer1_0(outer1_1[2]).spanToJSON(arg0).timestamp);
  const found = mapped.filter((arg0) => arg0);
  let applyResult;
  if (found.length) {
    const _Math = Math;
    const _Math2 = Math;
    applyResult = max.apply(Math, callback(found));
  }
  return applyResult;
};
export const getBundleStartTimestampMs = function getBundleStartTimestampMs() {
  const __BUNDLE_START_TIME__ = require(793) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.__BUNDLE_START_TIME__;
  if (__BUNDLE_START_TIME__) {
    let sum = __BUNDLE_START_TIME__;
    if (tmp(793).RN_GLOBAL_OBJ.nativePerformanceNow) {
      const _Date = Date;
      const timestamp = Date.now();
      const RN_GLOBAL_OBJ = require(793) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ;
      sum = timestamp - RN_GLOBAL_OBJ.nativePerformanceNow() + __BUNDLE_START_TIME__;
    }
    return sum;
  } else {
    const debug = tmp(794).debug;
    debug.warn("Missing the bundle start time on the global object.");
  }
};
export { createSpanJSON };
export const createChildSpanJSON = function createChildSpanJSON(spanJSON, arg1) {
  const obj = { op: spanJSON.op, trace_id: spanJSON.trace_id, parent_span_id: spanJSON.span_id };
  let str = spanJSON.origin;
  if (!str) {
    str = "manual";
  }
  obj.origin = str;
  return createSpanJSON(Object.assign(obj, arg1));
};
