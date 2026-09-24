// Module ID: 13150
// Function ID: 13151
// Name: spanTimeInputToSeconds
// Dependencies: [13151, 13155, 13157, 13159, 13160, 13161, 13162, 13163, 13164, 13167, 13172, 13145]
// Exports: addChildSpanToSpan, getActiveSpan, getRootSpan, getSpanDescendants, removeChildSpanFromSpan, showSpanDropWarning, spanToTraceContext, spanToTraceHeader, spanToTransactionTraceContext, updateMetricSummaryOnActiveSpan, updateSpanName

// Module 13150 (spanTimeInputToSeconds)
import _mod13145 from "module_13145" /* 13145 */;
import _mod13151 from "module_13151" /* 13151 */;
import generatePropagationContext from "generatePropagationContext" /* 13155 */;
import _mod13157 from "module_13157" /* 13157 */;
import _mod13159 from "module_13159" /* 13159 */;
import _mod13160 from "module_13160" /* 13160 */;
import _mod13161 from "module_13161" /* 13161 */;
import _mod13162 from "module_13162" /* 13162 */;
import _mod13163 from "module_13163" /* 13163 */;
import _mod13164 from "module_13164" /* 13164 */;

require = arg1;
const dependencyMap = arg6;
function spanTimeInputToSeconds(getTime) {
  if (typeof getTime === "number") {
    let result = getTime;
    if (getTime > 9999999999) {
      result = getTime / 1000;
    }
    let sum = result;
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
        sum = _mod13159.timestampInSeconds();
      }
    }
  }
  return sum;
}
function spanToJSON(getSpanJSON) {
  if ((function spanIsSentrySpan(getSpanJSON) {
    return typeof getSpanJSON.getSpanJSON === "function";
  })(getSpanJSON)) {
    return getSpanJSON.getSpanJSON();
  } else {
    try {
      ({ spanId, traceId } = getSpanJSON.spanContext());
      if ((function spanIsOpenTelemetrySdkTraceBaseSpan(attributes) {
        return attributes.attributes && attributes.startTime && attributes.name && attributes.endTime && attributes.status;
      })(getSpanJSON)) {
        const attributes = getSpanJSON.attributes;
        ({ startTime, name, endTime, parentSpanId, status } = getSpanJSON);
        const obj3 = { span_id: spanId, trace_id: traceId, data: attributes, description: name, parent_span_id: parentSpanId, start_timestamp: spanTimeInputToSeconds(startTime), timestamp: null, status: null, op: null, origin: null, _metrics_summary: null };
        const tmp8 = spanTimeInputToSeconds(endTime);
        obj3.timestamp = tmp8;
        obj3.status = getStatusMessage(status);
        obj3.op = attributes[_mod13160.SEMANTIC_ATTRIBUTE_SENTRY_OP];
        obj3.origin = attributes[_mod13160.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
        const obj2 = _mod13151;
        obj3._metrics_summary = _mod13161.getMetricSummaryJsonForSpan(getSpanJSON);
        return obj2.dropUndefinedKeys(obj3);
      } else {
        const obj = { span_id: spanId, trace_id: traceId };
        return obj;
      }
      const spanContextResult = getSpanJSON.spanContext();
    } catch (err) {
      return {};
    }
  }
}
function spanIsSampled(spanContext) {
  return 1 === spanContext.spanContext().traceFlags;
}
function getStatusMessage(code) {
  if (code) {
    if (code.code !== _mod13162.SPAN_STATUS_UNSET) {
      let str = "ok";
      if (code.code !== tmp(13162).SPAN_STATUS_OK) {
        str = code.message || "unknown_error";
        const tmp3 = code.message || "unknown_error";
      }
      return str;
    }
    tmp = require;
  }
}
let c2 = false;
const _sentryChildSpans = "_sentryChildSpans";
const _sentryRootSpan = "_sentryRootSpan";

export const TRACE_FLAG_NONE = 0;
export const TRACE_FLAG_SAMPLED = 1;
export const addChildSpanToSpan = function addChildSpanToSpan(arg0, arg1) {
  let tmp2 = arg0[_sentryRootSpan];
  if (!tmp2) {
    tmp2 = arg0;
  }
  const result = _mod13151.addNonEnumerableProperty(arg1, _sentryRootSpan, tmp2);
  if (arg0[_sentryChildSpans]) {
    arg0[tmp6].add(arg1);
  } else {
    const _Set = Set;
    const items = [arg1];
    const set = new Set(items);
    const result1 = _mod13151.addNonEnumerableProperty(arg0, tmp6, set);
    const tmp3Result = _mod13151;
  }
};
export const getActiveSpan = function getActiveSpan() {
  const mainCarrier = _mod13163.getMainCarrier();
  const asyncContextStrategy = _mod13164.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const tmpResult = tmp(13167);
    activeSpan = tmpResult._getSpanForScope(tmp(13172).getCurrentScope());
    const tmpResult2 = tmp(13172);
  }
  return activeSpan;
};
export const getRootSpan = function getRootSpan(arg0) {
  return arg0[_sentryRootSpan] || arg0;
};
export const getSpanDescendants = function getSpanDescendants(arg0) {
  const set = new Set();
  function addSpanChildren(arg0) {
    if (!set.has(arg0)) {
      if (spanIsSampled(arg0)) {
        set.add(arg0);
        let tmp3 = _sentryChildSpans;
        if (arg0[_sentryChildSpans]) {
          const _Array = Array;
          let items = Array.from(arg0[tmp3]);
        } else {
          items = [];
        }
        tmp3 = items;
        items[Symbol.iterator]();
      }
    }
  }
  addSpanChildren(arg0);
  return Array.from(set);
};
export { getStatusMessage };
export const removeChildSpanFromSpan = function removeChildSpanFromSpan(arg0, arg1) {
  if (arg0[_sentryChildSpans]) {
    arg0[tmp].delete(arg1);
  }
};
export const showSpanDropWarning = function showSpanDropWarning() {
  if (!c2) {
    _mod13145.consoleSandbox(() => {
      console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.");
    });
    c2 = true;
  }
};
export { spanIsSampled };
export { spanTimeInputToSeconds };
export { spanToJSON };
export const spanToTraceContext = function spanToTraceContext(spanContext) {
  const trace_id = spanContext.spanContext();
  ({ spanId, isRemote } = trace_id);
  let parent_span_id = span_id;
  if (!isRemote) {
    parent_span_id = spanToJSON(spanContext).parent_span_id;
  }
  if (isRemote) {
    span_id = generatePropagationContext.generateSpanId();
  }
  return _mod13151.dropUndefinedKeys({ parent_span_id, span_id, trace_id: trace_id.traceId });
};
export const spanToTraceHeader = function spanToTraceHeader(spanContext) {
  ({ traceId, spanId } = spanContext.spanContext());
  const spanContextResult = spanContext.spanContext();
  return _mod13157.generateSentryTraceHeader(traceId, spanId, 1 === spanContext.spanContext().traceFlags);
};
export const spanToTransactionTraceContext = function spanToTransactionTraceContext(spanContext) {
  ({ spanId, traceId } = spanContext.spanContext());
  const spanContextResult = spanContext.spanContext();
  ({ data, op, parent_span_id, status, origin } = spanToJSON(spanContext));
  const tmp2 = spanToJSON(spanContext);
  return _mod13151.dropUndefinedKeys({ parent_span_id, span_id, trace_id, data, op, status, origin });
};
export const updateMetricSummaryOnActiveSpan = function updateMetricSummaryOnActiveSpan(metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, tags, bucketKey) {
  const mainCarrier = _mod13163.getMainCarrier();
  const asyncContextStrategy = _mod13164.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const tmpResult = tmp(13167);
    activeSpan = tmpResult._getSpanForScope(tmp(13172).getCurrentScope());
    const tmpResult3 = tmp(13172);
  }
  if (activeSpan) {
    const tmpResult4 = tmp(13161);
    const result = tmpResult4.updateMetricSummaryOnSpan(activeSpan, metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, tags, bucketKey);
  }
};
export const updateSpanName = function updateSpanName(updateName, arg1) {
  updateName.updateName(arg1);
  updateName.setAttributes({ [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom", [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: arg1 });
};
