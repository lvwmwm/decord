// Module ID: 13009
// Function ID: 13010
// Dependencies: [13010, 13014, 13016, 13018, 13019, 13020, 13021, 13022, 13023, 13026, 13031, 13004]
// Exports: addChildSpanToSpan, getActiveSpan, getRootSpan, getSpanDescendants, removeChildSpanFromSpan, showSpanDropWarning, spanToTraceContext, spanToTraceHeader, spanToTransactionTraceContext, updateMetricSummaryOnActiveSpan, updateSpanName

// Module 13009
import _mod13004 from "module_13004" /* 13004 */;
import _mod13010 from "module_13010" /* 13010 */;
import generatePropagationContext from "generatePropagationContext" /* 13014 */;
import _mod13016 from "module_13016" /* 13016 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13018 */;
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 13019 */;
import _slicedToArray from "_slicedToArray" /* 13020 */;
import _mod13021 from "module_13021" /* 13021 */;
import _mod13022 from "module_13022" /* 13022 */;
import _mod13023 from "module_13023" /* 13023 */;
import _mod13026 from "module_13026" /* 13026 */;
import _mod13031 from "module_13031" /* 13031 */;

let set;

function spanTimeInputToSeconds(getTime) {
  let sum;
  if (typeof getTime === "number") {
    let result = getTime;
    if (getTime > 9999999999) {
      result = getTime / 1000;
    }
    sum = result;
  } else {
    const _Array = Array;
    if (Array.isArray(getTime)) {
      sum = getTime[0] + getTime[1] / 1000000000;
    } else {
      const _Date = Date;
      if (getTime instanceof Date) {
        const time = getTime.getTime();
        let result1 = time;
        if (time > 9999999999) {
          result1 = time / 1000;
        }
        sum = result1;
      } else {
        const obj = _browserPerformanceTimeOriginMode;
        sum = obj.timestampInSeconds();
      }
    }
  }
  return sum;
}
function spanToJSON(getSpanJSON) {
  let endTime;
  let name;
  let parentSpanId;
  let spanId;
  let startTime;
  let status;
  let tmp5Result;
  let tmp9;
  let traceId;
  function spanIsSentrySpan(getSpanJSON) {
    return typeof getSpanJSON.getSpanJSON === "function";
  }
  function spanIsOpenTelemetrySdkTraceBaseSpan(attributes) {
    return attributes.attributes && attributes.startTime && attributes.name && attributes.endTime && attributes.status;
  }
  if (spanIsSentrySpan(getSpanJSON)) {
    return getSpanJSON.getSpanJSON();
  } else {
    try {
      ({ spanId, traceId } = getSpanJSON.spanContext());
      getSpanJSON.spanContext();
      if (spanIsOpenTelemetrySdkTraceBaseSpan(getSpanJSON)) {
        const attributes = getSpanJSON.attributes;
        ({ startTime, name, endTime, parentSpanId, status } = getSpanJSON);
        const obj2 = { span_id: spanId, trace_id: traceId, data: attributes, description: name, parent_span_id: parentSpanId, start_timestamp: spanTimeInputToSeconds(startTime), timestamp: tmp9, status: getStatusMessage(status), op: attributes[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP], origin: attributes[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN], _metrics_summary: tmp5Result.getMetricSummaryJsonForSpan(getSpanJSON) };
        const dropUndefinedKeys = _mod13010.dropUndefinedKeys;
        _mod13010;
        tmp9 = spanTimeInputToSeconds(endTime);
        tmp5Result = _slicedToArray;
        return dropUndefinedKeys(obj2);
      } else {
        return { span_id: spanId, trace_id: traceId };
      }
    } catch (err) {
      return {};
    }
  }
}
function spanIsSampled(spanContext) {
  return 1 === spanContext.spanContext().traceFlags;
}
function getStatusMessage(code) {
  const tmp = code;
  if (tmp) {
    const tmp2 = require;
    if (code.code !== _mod13021.SPAN_STATUS_UNSET) {
      let str = "ok";
      if (code.code !== tmp2(13021).SPAN_STATUS_OK) {
        str = code.message || "unknown_error";
      }
      return str;
    }
  }
}
let c2 = false;
const _sentryChildSpans = "_sentryChildSpans";
const _sentryRootSpan = "_sentryRootSpan";

export const TRACE_FLAG_NONE = 0;
export const TRACE_FLAG_SAMPLED = 1;
export function addChildSpanToSpan(arg0, arg1) {
  let tmp2 = arg0[_sentryRootSpan];
  const tmp = _sentryRootSpan;
  if (!tmp2) {
    tmp2 = arg0;
  }
  const obj = _mod13010;
  const result = obj.addNonEnumerableProperty(arg1, tmp, tmp2);
  if (arg0[_sentryChildSpans]) {
    const obj2 = arg0[_sentryChildSpans];
    obj2.add(arg1);
  } else {
    const _Set = Set;
    const items = [arg1];
    const self = this;
    const self2 = this;
    const addNonEnumerableProperty = tmp3(13010).addNonEnumerableProperty;
    _mod13010;
    set = new Set(items);
    const result1 = addNonEnumerableProperty(arg0, tmp6, set);
  }
}
export function getActiveSpan() {
  let activeSpan;
  const obj = _mod13022;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13023;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const _getSpanForScope = _mod13026._getSpanForScope;
    _mod13026;
    const tmpResult2 = _mod13031;
    activeSpan = _getSpanForScope(tmpResult2.getCurrentScope());
  }
  return activeSpan;
}
export function getRootSpan(arg0) {
  return arg0[_sentryRootSpan] || arg0;
}
export function getSpanDescendants(arg0) {
  set = new Set();
  function addSpanChildren(arg0) {
    const obj = set;
    if (!set.has(arg0)) {
      if (spanIsSampled(arg0)) {
        obj.add(arg0);
        if (arg0[_sentryChildSpans]) {
          const _Array = Array;
          let items = Array.from(arg0[tmp3]);
        } else {
          items = [];
        }
        for (const item10019 of items) {
          let tmp8 = addSpanChildren(item10019);
          continue;
        }
      }
    }
  }
  addSpanChildren(arg0);
  return Array.from(set);
}
export { getStatusMessage };
export function removeChildSpanFromSpan(arg0, arg1) {
  if (arg0[_sentryChildSpans]) {
    const obj = arg0[tmp];
    obj.delete(arg1);
  }
}
export function showSpanDropWarning() {
  const tmp = c2;
  if (!tmp) {
    const obj = _mod13004;
    obj.consoleSandbox(() => {
      console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.");
    });
    c2 = true;
  }
}
export { spanIsSampled };
export { spanTimeInputToSeconds };
export { spanToJSON };
export function spanToTraceContext(spanContext) {
  let isRemote;
  let spanId;
  let span_id;
  const spanContextResult = spanContext.spanContext();
  ({ spanId, isRemote } = spanContextResult);
  let parent_span_id = span_id;
  const trace_id = spanContextResult.traceId;
  if (!isRemote) {
    parent_span_id = spanToJSON(spanContext).parent_span_id;
  }
  if (isRemote) {
    const obj = generatePropagationContext;
    span_id = obj.generateSpanId();
  }
  const obj2 = _mod13010;
  return obj2.dropUndefinedKeys({ parent_span_id, span_id, trace_id });
}
export function spanToTraceHeader(spanContext) {
  let spanId;
  let traceId;
  ({ traceId, spanId } = spanContext.spanContext());
  spanContext.spanContext();
  const traceFlags = spanContext.spanContext().traceFlags;
  const obj = _mod13016;
  return obj.generateSentryTraceHeader(traceId, spanId, 1 === traceFlags);
}
export function spanToTransactionTraceContext(spanContext) {
  let data;
  let op;
  let origin;
  let parent_span_id;
  let spanId;
  let status;
  let traceId;
  ({ spanId, traceId } = spanContext.spanContext());
  spanContext.spanContext();
  ({ data, op, parent_span_id, status, origin } = spanToJSON(spanContext));
  spanToJSON(spanContext);
  const obj = _mod13010;
  return obj.dropUndefinedKeys({ parent_span_id, span_id, trace_id, data, op, status, origin });
}
export function updateMetricSummaryOnActiveSpan(metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, tags, bucketKey) {
  let activeSpan;
  const obj = _mod13022;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod13023;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const _getSpanForScope = _mod13026._getSpanForScope;
    _mod13026;
    const tmpResult3 = _mod13031;
    activeSpan = _getSpanForScope(tmpResult3.getCurrentScope());
  }
  if (activeSpan) {
    const tmpResult4 = _slicedToArray;
    const result = tmpResult4.updateMetricSummaryOnSpan(activeSpan, metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, tags, bucketKey);
  }
}
export function updateSpanName(updateName, arg1) {
  updateName.updateName(arg1);
  const obj = { [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom", [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: arg1 };
  updateName.setAttributes(obj);
}
