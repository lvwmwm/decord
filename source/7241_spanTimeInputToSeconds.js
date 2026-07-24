// Module ID: 7241
// Function ID: 58319
// Name: spanTimeInputToSeconds
// Dependencies: [77, 7242, 7246, 7248, 7250, 7251, 7252, 7253, 7254, 7255, 7258, 7263, 7236]
// Exports: addChildSpanToSpan, getRootSpan, getSpanDescendants, removeChildSpanFromSpan, showSpanDropWarning, spanToTraceContext, spanToTraceHeader, spanToTransactionTraceContext, updateMetricSummaryOnActiveSpan, updateSpanName

// Module 7241 (spanTimeInputToSeconds)
import _defineProperty from "_defineProperty";

function spanTimeInputToSeconds(getTime) {
  if ("number" === typeof getTime) {
    let sum = ensureTimestampInSeconds(getTime);
  } else {
    const _Array = Array;
    if (Array.isArray(getTime)) {
      sum = getTime[0] + getTime[1] / 1000000000;
    } else {
      const _Date = Date;
      if (getTime instanceof Date) {
        sum = ensureTimestampInSeconds(getTime.getTime());
      } else {
        sum = require(7250) /* dateTimestampInSeconds */.timestampInSeconds();
        const obj = require(7250) /* dateTimestampInSeconds */;
      }
    }
  }
  return sum;
}
function ensureTimestampInSeconds(arg0) {
  let result = arg0;
  if (arg0 > 9999999999) {
    result = arg0 / 1000;
  }
  return result;
}
function spanToJSON(getSpanJSON) {
  let endTime;
  let name;
  let parentSpanId;
  let spanId;
  let startTime;
  let status;
  let traceId;
  let obj = getSpanJSON;
  if ("function" === typeof getSpanJSON.getSpanJSON) {
    return obj.getSpanJSON();
  } else {
    ({ spanId, traceId } = obj.spanContext());
    if (!tmp) {
      obj = { span_id: spanId, trace_id: traceId };
      return obj;
    } else {
      const attributes = obj.attributes;
      ({ startTime, name, endTime, parentSpanId, status } = obj);
      obj = { span_id: spanId, trace_id: traceId, data: attributes, description: name, parent_span_id: parentSpanId, start_timestamp: spanTimeInputToSeconds(startTime) };
      const tmp9 = spanTimeInputToSeconds(endTime);
      obj.timestamp = tmp9;
      obj.status = getStatusMessage(status);
      obj.op = attributes[require(undefined, 7251).SEMANTIC_ATTRIBUTE_SENTRY_OP];
      obj.origin = attributes[require(undefined, 7251).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
      const obj2 = require(7242) /* addNonEnumerableProperty */;
      const tmp10 = tmp9;
      obj._metrics_summary = require(7252) /* getMetricSummaryJsonForSpan */.getMetricSummaryJsonForSpan(obj);
      return obj2.dropUndefinedKeys(obj);
    }
    const spanContextResult = obj.spanContext();
    tmp = obj.attributes && obj.startTime && obj.name && obj.endTime && obj.status;
  }
}
function spanIsSampled(spanContext) {
  return 1 === spanContext.spanContext().traceFlags;
}
function getStatusMessage(code) {
  if (code) {
    if (code.code !== require(7253) /* getSpanStatusFromHttpCode */.SPAN_STATUS_UNSET) {
      let str = "ok";
      if (code.code !== require(7253) /* getSpanStatusFromHttpCode */.SPAN_STATUS_OK) {
        str = code.message || "unknown_error";
        const tmp5 = code.message || "unknown_error";
      }
      return str;
    }
  }
}
function getActiveSpan() {
  const mainCarrier = require(7254) /* getSentryCarrier */.getMainCarrier();
  const obj = require(7254) /* getSentryCarrier */;
  const asyncContextStrategy = require(7255) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const obj4 = require(7258) /* _getSpanForScope */;
    activeSpan = obj4._getSpanForScope(require(7263) /* getCurrentScope */.getCurrentScope());
    const obj5 = require(7263) /* getCurrentScope */;
  }
  return activeSpan;
}
let c3 = false;

export const TRACE_FLAG_NONE = 0;
export const TRACE_FLAG_SAMPLED = 1;
export const addChildSpanToSpan = function addChildSpanToSpan(_sentryRootSpan) {
  const result = require(7242) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg1, "_sentryRootSpan", _sentryRootSpan._sentryRootSpan || _sentryRootSpan);
  if (_sentryRootSpan._sentryChildSpans) {
    const _sentryChildSpans = _sentryRootSpan._sentryChildSpans;
    _sentryChildSpans.add(arg1);
  } else {
    const _Set = Set;
    const items = [arg1];
    const set = new Set(items);
    const result1 = require(7242) /* addNonEnumerableProperty */.addNonEnumerableProperty(_sentryRootSpan, "_sentryChildSpans", set);
    const obj2 = require(7242) /* addNonEnumerableProperty */;
  }
};
export { getActiveSpan };
export const getRootSpan = function getRootSpan(_sentryRootSpan) {
  return _sentryRootSpan._sentryRootSpan || _sentryRootSpan;
};
export const getSpanDescendants = function getSpanDescendants(arg0) {
  const set = new Set();
  function addSpanChildren(arg0) {
    let tmp = arg0;
    if (!set.has(arg0)) {
      if (outer1_7(tmp)) {
        set.add(tmp);
        if (tmp._sentryChildSpans) {
          const _Array = Array;
          let items = Array.from(tmp._sentryChildSpans);
        } else {
          items = [];
        }
        tmp = items;
        items[Symbol.iterator]();
      }
    }
  }
  addSpanChildren(arg0);
  return Array.from(set);
};
export { getStatusMessage };
export const removeChildSpanFromSpan = function removeChildSpanFromSpan(_sentryChildSpans) {
  if (_sentryChildSpans._sentryChildSpans) {
    _sentryChildSpans = _sentryChildSpans._sentryChildSpans;
    _sentryChildSpans.delete(arg1);
  }
};
export const showSpanDropWarning = function showSpanDropWarning() {
  if (!c3) {
    require(7236) /* consoleSandbox */.consoleSandbox(() => {
      console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.");
    });
    c3 = true;
    const obj = require(7236) /* consoleSandbox */;
  }
};
export { spanIsSampled };
export { spanTimeInputToSeconds };
export { spanToJSON };
export const spanToTraceContext = function spanToTraceContext(spanContext) {
  let isRemote;
  let spanId;
  const spanContextResult = spanContext.spanContext();
  ({ spanId, isRemote } = spanContextResult);
  let parent_span_id = spanId;
  if (!isRemote) {
    parent_span_id = spanToJSON(spanContext).parent_span_id;
  }
  if (isRemote) {
    let obj = require(7246) /* generateTraceId */;
    spanId = obj.generateSpanId();
  }
  obj = { parent_span_id, span_id: spanId, trace_id: spanContextResult.traceId };
  return require(7242) /* addNonEnumerableProperty */.dropUndefinedKeys(obj);
};
export const spanToTraceHeader = function spanToTraceHeader(spanContext) {
  let spanId;
  let traceId;
  ({ traceId, spanId } = spanContext.spanContext());
  const spanContextResult = spanContext.spanContext();
  const tmp2 = spanIsSampled(spanContext);
  return require(7248) /* extractTraceparentData */.generateSentryTraceHeader(traceId, spanId, tmp2);
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
  const spanContextResult = spanContext.spanContext();
  ({ data, op, parent_span_id, status, origin } = spanToJSON(spanContext));
  const tmp2 = spanToJSON(spanContext);
  return require(7242) /* addNonEnumerableProperty */.dropUndefinedKeys({ parent_span_id, span_id, trace_id, data, op, status, origin });
};
export const updateMetricSummaryOnActiveSpan = function updateMetricSummaryOnActiveSpan(metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, tags, bucketKey) {
  const tmp = getActiveSpan();
  if (tmp) {
    const obj = require(7252) /* getMetricSummaryJsonForSpan */;
    const result = obj.updateMetricSummaryOnSpan(tmp, metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, tags, bucketKey);
  }
};
export const updateSpanName = function updateSpanName(updateName) {
  updateName.updateName(arg1);
  updateName.setAttributes(_defineProperty(_defineProperty({}, require(7251).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom"), require(7251).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME, arg1));
};
