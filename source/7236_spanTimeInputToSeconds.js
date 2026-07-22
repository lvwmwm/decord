// Module ID: 7236
// Function ID: 58256
// Name: spanTimeInputToSeconds
// Dependencies: []
// Exports: addChildSpanToSpan, getRootSpan, getSpanDescendants, removeChildSpanFromSpan, showSpanDropWarning, spanToTraceContext, spanToTraceHeader, spanToTransactionTraceContext, updateMetricSummaryOnActiveSpan, updateSpanName

// Module 7236 (spanTimeInputToSeconds)
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
        sum = require(dependencyMap[4]).timestampInSeconds();
        const obj = require(dependencyMap[4]);
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
      obj.op = attributes[closure_0(undefined, closure_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_OP];
      obj.origin = attributes[closure_0(undefined, closure_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
      const obj2 = require(dependencyMap[1]);
      const tmp10 = tmp9;
      obj._metrics_summary = require(dependencyMap[6]).getMetricSummaryJsonForSpan(obj);
      return obj2.dropUndefinedKeys(obj);
    }
    const spanContextResult = obj.spanContext();
    const tmp = obj.attributes && obj.startTime && obj.name && obj.endTime && obj.status;
  }
}
function spanIsSampled(spanContext) {
  return 1 === spanContext.spanContext().traceFlags;
}
function getStatusMessage(code) {
  if (code) {
    if (code.code !== require(dependencyMap[7]).SPAN_STATUS_UNSET) {
      let str = "ok";
      if (code.code !== require(dependencyMap[7]).SPAN_STATUS_OK) {
        str = code.message || "unknown_error";
        const tmp5 = code.message || "unknown_error";
      }
      return str;
    }
  }
}
function getActiveSpan() {
  const mainCarrier = require(dependencyMap[8]).getMainCarrier();
  const obj = require(dependencyMap[8]);
  const asyncContextStrategy = require(dependencyMap[9]).getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const obj4 = require(dependencyMap[10]);
    activeSpan = obj4._getSpanForScope(require(dependencyMap[11]).getCurrentScope());
    const obj5 = require(dependencyMap[11]);
  }
  return activeSpan;
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = false;

export const TRACE_FLAG_NONE = 0;
export const TRACE_FLAG_SAMPLED = 1;
export const addChildSpanToSpan = function addChildSpanToSpan(_sentryRootSpan) {
  const result = require(dependencyMap[1]).addNonEnumerableProperty(arg1, "_sentryRootSpan", _sentryRootSpan._sentryRootSpan || _sentryRootSpan);
  if (_sentryRootSpan._sentryChildSpans) {
    const _sentryChildSpans = _sentryRootSpan._sentryChildSpans;
    _sentryChildSpans.add(arg1);
  } else {
    const _Set = Set;
    const items = [arg1];
    const set = new Set(items);
    const result1 = require(dependencyMap[1]).addNonEnumerableProperty(_sentryRootSpan, "_sentryChildSpans", set);
    const obj2 = require(dependencyMap[1]);
  }
};
export { getActiveSpan };
export const getRootSpan = function getRootSpan(_sentryRootSpan) {
  return _sentryRootSpan._sentryRootSpan || _sentryRootSpan;
};
export const getSpanDescendants = function getSpanDescendants(arg0) {
  const set = new Set();
  const require = set;
  function addSpanChildren(arg0) {
    let tmp = arg0;
    if (!set.has(arg0)) {
      if (callback(tmp)) {
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
  const dependencyMap = addSpanChildren;
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
  if (!closure_3) {
    require(dependencyMap[12]).consoleSandbox(() => {
      console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.");
    });
    closure_3 = true;
    const obj = require(dependencyMap[12]);
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
    let obj = require(dependencyMap[2]);
    spanId = obj.generateSpanId();
  }
  obj = { parent_span_id, span_id: spanId, trace_id: spanContextResult.traceId };
  return require(dependencyMap[1]).dropUndefinedKeys(obj);
};
export const spanToTraceHeader = function spanToTraceHeader(spanContext) {
  let spanId;
  let traceId;
  ({ traceId, spanId } = spanContext.spanContext());
  const spanContextResult = spanContext.spanContext();
  const tmp2 = spanIsSampled(spanContext);
  return require(dependencyMap[3]).generateSentryTraceHeader(traceId, spanId, tmp2);
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
  return require(dependencyMap[1]).dropUndefinedKeys({ parent_span_id, span_id, trace_id, data, op, status, origin });
};
export const updateMetricSummaryOnActiveSpan = function updateMetricSummaryOnActiveSpan(metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, tags, bucketKey) {
  const tmp = getActiveSpan();
  if (tmp) {
    const obj = require(dependencyMap[6]);
    const result = obj.updateMetricSummaryOnSpan(tmp, metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, tags, bucketKey);
  }
};
export const updateSpanName = function updateSpanName(updateName) {
  updateName.updateName(arg1);
  updateName.setAttributes(callback(callback({}, require(dependencyMap[5]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom"), require(dependencyMap[5]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME, arg1));
};
