// Module ID: 1025
// Function ID: 1026
// Dependencies: [686, 685]
// Exports: createChildSpanJSON, getBundleStartTimestampMs, getLatestChildSpanEndTimestamp, getTimeOriginMilliseconds, isNearToNow, setSpanDurationAsMeasurement, setSpanDurationAsMeasurementOnSpan, setSpanMeasurement

// Module 1025
import RN_GLOBAL_OBJ2 from "RN_GLOBAL_OBJ" /* 685 */;
import _mod686 from "module_686" /* 686 */;

require = arg1;
const dependencyMap = arg6;
function createSpanJSON(span_id) {
  const merged = Object.assign({ status: "ok" }, span_id);
  if (span_id.span_id) {
    span_id = span_id.span_id;
  } else {
    const tmpResult = tmp(686);
    span_id = tmp(686).uuid4().substring(16);
    const str = tmp(686).uuid4();
  }
  const obj2 = { span_id, trace_id: null, data: null };
  if (span_id.trace_id) {
    let trace_id = span_id.trace_id;
  } else {
    trace_id = tmp(686).uuid4();
    const tmpResult3 = tmp(686);
  }
  obj2.trace_id = trace_id;
  const obj = _mod686;
  const tmpResult4 = _mod686;
  obj2.data = tmpResult4.dropUndefinedKeys(Object.assign({ [_mod686.SEMANTIC_ATTRIBUTE_SENTRY_OP]: span_id.op, [_mod686.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: span_id.origin }, span_id.data ? span_id.data : {}));
  return obj.dropUndefinedKeys(Object.assign(merged, obj2));
}
let closure_2 = Date.now();

export const defaultTransactionSource = "component";
export const customTransactionSource = "custom";
export const MARGIN_OF_ERROR_SECONDS = 0.05;
export function getTimeOriginMilliseconds() {
  return closure_2;
}
export const isNearToNow = function isNearToNow(timestamp2) {
  let tmp = timestamp2;
  if (tmp) {
    const _Math = Math;
    tmp = Math.abs(_mod686.timestampInSeconds() - timestamp2) <= 0.05;
  }
  return tmp;
};
export const setSpanDurationAsMeasurement = function setSpanDurationAsMeasurement(time_to_full_display, arg1) {
  ({ timestamp, start_timestamp } = _mod686.spanToJSON(arg1));
  let tmp4 = timestamp;
  if (timestamp) {
    tmp4 = start_timestamp;
  }
  if (tmp4) {
    _mod686.setMeasurement(time_to_full_display, 1000 * (timestamp - start_timestamp), "millisecond");
    const tmpResult = _mod686;
  }
};
export const setSpanDurationAsMeasurementOnSpan = function setSpanDurationAsMeasurementOnSpan(time_to_initial_display, span, activeSpan) {
  ({ timestamp, start_timestamp } = _mod686.spanToJSON(span));
  let tmp4 = timestamp;
  if (timestamp) {
    tmp4 = start_timestamp;
  }
  if (tmp4) {
    const obj2 = {};
    const result = 1000 * (timestamp - start_timestamp);
    obj2[tmp(686).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = result;
    obj2[tmp(686).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "millisecond";
    activeSpan.addEvent(time_to_initial_display, obj2);
  }
};
export const setSpanMeasurement = function setSpanMeasurement(addEvent, STALL_COUNT, value, unit) {
  addEvent.addEvent(STALL_COUNT, { [closure_1_0(closure_1_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: value, [closure_1_0(closure_1_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: unit });
};
export const getLatestChildSpanEndTimestamp = function getLatestChildSpanEndTimestamp(activeSpan) {
  const spanDescendants = _mod686.getSpanDescendants(activeSpan);
  const mapped = spanDescendants.map((item) => _mod686.spanToJSON(item).timestamp);
  const found = mapped.filter((item) => item);
  let applyResult;
  if (found.length) {
    const _Math = Math;
    const items = [];
    HermesBuiltin.arraySpread(found, 0);
    const _Math2 = Math;
    applyResult = HermesBuiltin.apply(items, Math);
  }
  return applyResult;
};
export const getBundleStartTimestampMs = function getBundleStartTimestampMs() {
  const __BUNDLE_START_TIME__ = RN_GLOBAL_OBJ2.RN_GLOBAL_OBJ.__BUNDLE_START_TIME__;
  if (__BUNDLE_START_TIME__) {
    let sum = __BUNDLE_START_TIME__;
    if (tmp(685).RN_GLOBAL_OBJ.nativePerformanceNow) {
      const _Date = Date;
      const timestamp = Date.now();
      const RN_GLOBAL_OBJ = tmp(685).RN_GLOBAL_OBJ;
      sum = timestamp - RN_GLOBAL_OBJ.nativePerformanceNow() + __BUNDLE_START_TIME__;
    }
    return sum;
  } else {
    const debug = tmp(686).debug;
    debug.warn("Missing the bundle start time on the global object.");
  }
};
export { createSpanJSON };
export const createChildSpanJSON = function createChildSpanJSON(op, arg1) {
  const obj = { op: op.op, trace_id: op.trace_id, parent_span_id: op.span_id, origin: null };
  let str = op.origin;
  if (!str) {
    str = "manual";
  }
  obj.origin = str;
  return createSpanJSON(Object.assign(obj, arg1));
};
