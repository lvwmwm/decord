// Module ID: 11172
// Function ID: 11173
// Dependencies: [11173, 11177, 11179, 11181, 11182, 11183, 11184, 11185, 11186, 11189, 11194, 11167]
// Exports: addChildSpanToSpan, getActiveSpan, getRootSpan, getSpanDescendants, removeChildSpanFromSpan, showSpanDropWarning, spanToTraceContext, spanToTraceHeader, spanToTransactionTraceContext, updateMetricSummaryOnActiveSpan, updateSpanName

// Module 11172
import _mod11167 from "module_11167" /* 11167 */;
import _mod11173 from "module_11173" /* 11173 */;
import generatePropagationContext from "generatePropagationContext" /* 11177 */;
import _mod11179 from "module_11179" /* 11179 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 11181 */;
import _mod11182 from "module_11182" /* 11182 */;
import _slicedToArray from "_slicedToArray" /* 11183 */;
import _mod11184 from "module_11184" /* 11184 */;
import _mod11185 from "module_11185" /* 11185 */;
import _mod11186 from "module_11186" /* 11186 */;
import _mod11189 from "module_11189" /* 11189 */;
import _mod11194 from "module_11194" /* 11194 */;

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
        const obj2 = { span_id: spanId, trace_id: traceId, data: attributes, description: name, parent_span_id: parentSpanId, start_timestamp: spanTimeInputToSeconds(startTime), timestamp: tmp9, status: getStatusMessage(status), op: attributes[_mod11182.SEMANTIC_ATTRIBUTE_SENTRY_OP], origin: attributes[_mod11182.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN], _metrics_summary: tmp5Result.getMetricSummaryJsonForSpan(getSpanJSON) };
        const dropUndefinedKeys = _mod11173.dropUndefinedKeys;
        _mod11173;
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
    if (code.code !== _mod11184.SPAN_STATUS_UNSET) {
      let str = "ok";
      if (code.code !== tmp2(11184).SPAN_STATUS_OK) {
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
export const addChildSpanToSpan = function addChildSpanToSpan(arg0, arg1) {
  let tmp2 = arg0[_sentryRootSpan];
  const tmp = _sentryRootSpan;
  if (!tmp2) {
    tmp2 = arg0;
  }
  const obj = _mod11173;
  const result = obj.addNonEnumerableProperty(arg1, tmp, tmp2);
  if (arg0[_sentryChildSpans]) {
    const obj2 = arg0[_sentryChildSpans];
    obj2.add(arg1);
  } else {
    const _Set = Set;
    const items = [arg1];
    const self = this;
    const self2 = this;
    const addNonEnumerableProperty = tmp3(11173).addNonEnumerableProperty;
    _mod11173;
    set = new Set(items);
    const result1 = addNonEnumerableProperty(arg0, tmp6, set);
  }
};
export const getActiveSpan = function getActiveSpan() {
  let activeSpan;
  const obj = _mod11185;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod11186;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const _getSpanForScope = _mod11189._getSpanForScope;
    _mod11189;
    const tmpResult2 = _mod11194;
    activeSpan = _getSpanForScope(tmpResult2.getCurrentScope());
  }
  return activeSpan;
};
export const getRootSpan = function getRootSpan(arg0) {
  return arg0[_sentryRootSpan] || arg0;
};
export const getSpanDescendants = function getSpanDescendants(arg0) {
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
};
export { getStatusMessage };
export const removeChildSpanFromSpan = function removeChildSpanFromSpan(arg0, arg1) {
  if (arg0[_sentryChildSpans]) {
    const obj = arg0[tmp];
    obj.delete(arg1);
  }
};
export const showSpanDropWarning = function showSpanDropWarning() {
  const tmp = c2;
  if (!tmp) {
    const obj = _mod11167;
    obj.consoleSandbox(() => {
      console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.");
    });
    c2 = true;
  }
};
export { spanIsSampled };
export { spanTimeInputToSeconds };
export { spanToJSON };
export const spanToTraceContext = function spanToTraceContext(spanContext) {
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
  const obj2 = _mod11173;
  return obj2.dropUndefinedKeys({ parent_span_id, span_id, trace_id });
};
export const spanToTraceHeader = function spanToTraceHeader(spanContext) {
  let spanId;
  let traceId;
  ({ traceId, spanId } = spanContext.spanContext());
  spanContext.spanContext();
  const traceFlags = spanContext.spanContext().traceFlags;
  const obj = _mod11179;
  return obj.generateSentryTraceHeader(traceId, spanId, 1 === traceFlags);
};
export const spanToTransactionTraceContext = function spanToTransactionTraceContext(spanContext) {
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
  const obj = _mod11173;
  return obj.dropUndefinedKeys({ parent_span_id, span_id, trace_id, data, op, status, origin });
};
export const updateMetricSummaryOnActiveSpan = function updateMetricSummaryOnActiveSpan(metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, tags, bucketKey) {
  let activeSpan;
  const obj = _mod11185;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod11186;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const _getSpanForScope = _mod11189._getSpanForScope;
    _mod11189;
    const tmpResult3 = _mod11194;
    activeSpan = _getSpanForScope(tmpResult3.getCurrentScope());
  }
  if (activeSpan) {
    const tmpResult4 = _slicedToArray;
    const result = tmpResult4.updateMetricSummaryOnSpan(activeSpan, metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, tags, bucketKey);
  }
};
export const updateSpanName = function updateSpanName(updateName, arg1) {
  updateName.updateName(arg1);
  const obj = { [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom", [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: arg1 };
  updateName.setAttributes(obj);
};
