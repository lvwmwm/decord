// Module ID: 1132
// Function ID: 12900
// Name: setSpanMeasurement
// Dependencies: []
// Exports: createChildSpanJSON, getBundleStartTimestampMs, getLatestChildSpanEndTimestamp, getTimeOriginMilliseconds, isNearToNow, setSpanDurationAsMeasurement, setSpanDurationAsMeasurementOnSpan

// Module 1132 (setSpanMeasurement)
function setSpanMeasurement(addEvent, STALL_COUNT, value, unit) {
  addEvent.addEvent(STALL_COUNT, callback2(callback2({}, STALL_COUNT(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, value), STALL_COUNT(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, unit));
}
function createSpanJSON(span_id) {
  let obj = arg1(dependencyMap[2]);
  obj = {};
  const merged = Object.assign({ status: "ok" }, span_id);
  if (span_id.span_id) {
    span_id = span_id.span_id;
  } else {
    const obj3 = arg1(dependencyMap[2]);
    span_id = arg1(dependencyMap[2]).uuid4().substring(16);
    const str = arg1(dependencyMap[2]).uuid4();
  }
  obj.span_id = span_id;
  if (span_id.trace_id) {
    let trace_id = span_id.trace_id;
  } else {
    trace_id = arg1(dependencyMap[2]).uuid4();
    const obj4 = arg1(dependencyMap[2]);
  }
  obj.trace_id = trace_id;
  const obj5 = arg1(dependencyMap[2]);
  obj.data = obj5.dropUndefinedKeys(Object.assign(callback2(callback2({}, arg1(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP, span_id.op), arg1(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, span_id.origin), span_id.data ? span_id.data : {}));
  return obj.dropUndefinedKeys(Object.assign(merged, obj));
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
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
    tmp2 = Math.abs(arg1(dependencyMap[2]).timestampInSeconds() - timestamp) <= 0.05;
    const obj = arg1(dependencyMap[2]);
  }
  return tmp2;
};
export const setSpanDurationAsMeasurement = function setSpanDurationAsMeasurement(time_to_full_display, closure_1) {
  let start_timestamp;
  let timestamp;
  const obj = closure_1(dependencyMap[2]);
  ({ timestamp, start_timestamp } = closure_1(dependencyMap[2]).spanToJSON(closure_1));
  let tmp2 = timestamp;
  if (timestamp) {
    tmp2 = start_timestamp;
  }
  if (tmp2) {
    closure_1(dependencyMap[2]).setMeasurement(time_to_full_display, 1000 * (timestamp - start_timestamp), "millisecond");
    const obj2 = closure_1(dependencyMap[2]);
  }
};
export const setSpanDurationAsMeasurementOnSpan = function setSpanDurationAsMeasurementOnSpan(time_to_initial_display, span, activeSpan) {
  let start_timestamp;
  let timestamp;
  const obj = span(dependencyMap[2]);
  ({ timestamp, start_timestamp } = span(dependencyMap[2]).spanToJSON(span));
  let tmp2 = timestamp;
  if (timestamp) {
    tmp2 = start_timestamp;
  }
  if (tmp2) {
    setSpanMeasurement(activeSpan, time_to_initial_display, 1000 * (timestamp - start_timestamp), "millisecond");
  }
};
export { setSpanMeasurement };
export const getLatestChildSpanEndTimestamp = function getLatestChildSpanEndTimestamp(activeSpan) {
  const spanDescendants = arg1(dependencyMap[2]).getSpanDescendants(activeSpan);
  const mapped = spanDescendants.map((arg0) => callback(closure_1[2]).spanToJSON(arg0).timestamp);
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
  const __BUNDLE_START_TIME__ = arg1(dependencyMap[3]).RN_GLOBAL_OBJ.__BUNDLE_START_TIME__;
  if (__BUNDLE_START_TIME__) {
    let sum = __BUNDLE_START_TIME__;
    if (tmp(tmp2[3]).RN_GLOBAL_OBJ.nativePerformanceNow) {
      const _Date = Date;
      const timestamp = Date.now();
      const RN_GLOBAL_OBJ = arg1(dependencyMap[3]).RN_GLOBAL_OBJ;
      sum = timestamp - RN_GLOBAL_OBJ.nativePerformanceNow() + __BUNDLE_START_TIME__;
    }
    return sum;
  } else {
    const debug = tmp(tmp2[2]).debug;
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
