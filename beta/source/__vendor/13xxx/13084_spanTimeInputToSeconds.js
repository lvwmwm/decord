// Module ID: 13084
// Function ID: 13085
// Name: spanTimeInputToSeconds
// Dependencies: [13085, 13089, 13091, 13093, 13094, 13095, 13096, 13097, 13098, 13101, 13106, 13079]
// Exports: addChildSpanToSpan, getActiveSpan, getRootSpan, getSpanDescendants, removeChildSpanFromSpan, showSpanDropWarning, spanToTraceContext, spanToTraceHeader, spanToTransactionTraceContext, updateMetricSummaryOnActiveSpan, updateSpanName

// Module 13084 (spanTimeInputToSeconds)
import _mod13079 from "module_13079" /* 13079 */;
import _mod13085 from "module_13085" /* 13085 */;
import generatePropagationContext from "generatePropagationContext" /* 13089 */;
import _mod13091 from "module_13091" /* 13091 */;
import _mod13093 from "module_13093" /* 13093 */;
import _mod13094 from "module_13094" /* 13094 */;
import _mod13095 from "module_13095" /* 13095 */;
import _mod13096 from "module_13096" /* 13096 */;
import _mod13097 from "module_13097" /* 13097 */;
import _mod13098 from "module_13098" /* 13098 */;

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
        sum = _mod13093.timestampInSeconds();
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
        obj3.op = attributes[_mod13094.SEMANTIC_ATTRIBUTE_SENTRY_OP];
        obj3.origin = attributes[_mod13094.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
        const obj2 = _mod13085;
        obj3._metrics_summary = _mod13095.getMetricSummaryJsonForSpan(getSpanJSON);
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
    if (code.code !== _mod13096.SPAN_STATUS_UNSET) {
      let str = "ok";
      if (code.code !== tmp(13096).SPAN_STATUS_OK) {
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
  const result = _mod13085.addNonEnumerableProperty(arg1, _sentryRootSpan, tmp2);
  if (arg0[_sentryChildSpans]) {
    arg0[tmp6].add(arg1);
  } else {
    const _Set = Set;
    const items = [arg1];
    const set = new Set(items);
    const result1 = _mod13085.addNonEnumerableProperty(arg0, tmp6, set);
    const tmp3Result = _mod13085;
  }
};
export const getActiveSpan = function getActiveSpan() {
  const mainCarrier = _mod13097.getMainCarrier();
  const asyncContextStrategy = _mod13098.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const tmpResult = tmp(13101);
    activeSpan = tmpResult._getSpanForScope(tmp(13106).getCurrentScope());
    const tmpResult2 = tmp(13106);
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
    _mod13079.consoleSandbox(() => {
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
  return _mod13085.dropUndefinedKeys({ parent_span_id, span_id, trace_id: trace_id.traceId });
};
export const spanToTraceHeader = function spanToTraceHeader(spanContext) {
  ({ traceId, spanId } = spanContext.spanContext());
  const spanContextResult = spanContext.spanContext();
  return _mod13091.generateSentryTraceHeader(traceId, spanId, 1 === spanContext.spanContext().traceFlags);
};
export const spanToTransactionTraceContext = function spanToTransactionTraceContext(spanContext) {
  ({ spanId, traceId } = spanContext.spanContext());
  const spanContextResult = spanContext.spanContext();
  ({ data, op, parent_span_id, status, origin } = spanToJSON(spanContext));
  const tmp2 = spanToJSON(spanContext);
  return _mod13085.dropUndefinedKeys({ parent_span_id, span_id, trace_id, data, op, status, origin });
};
export const updateMetricSummaryOnActiveSpan = function updateMetricSummaryOnActiveSpan(metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, tags, bucketKey) {
  const mainCarrier = _mod13097.getMainCarrier();
  const asyncContextStrategy = _mod13098.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const tmpResult = tmp(13101);
    activeSpan = tmpResult._getSpanForScope(tmp(13106).getCurrentScope());
    const tmpResult3 = tmp(13106);
  }
  if (activeSpan) {
    const tmpResult4 = tmp(13095);
    const result = tmpResult4.updateMetricSummaryOnSpan(activeSpan, metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, tags, bucketKey);
  }
};
export const updateSpanName = function updateSpanName(updateName, arg1) {
  updateName.updateName(arg1);
  updateName.setAttributes({ [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom", [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: arg1 });
};
