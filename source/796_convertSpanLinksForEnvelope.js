// Module ID: 796
// Function ID: 8963
// Name: convertSpanLinksForEnvelope
// Dependencies: [77, 29, 797, 806, 811, 815, 816, 817, 799, 802, 818, 821, 825, 801]
// Exports: addChildSpanToSpan, getActiveSpan, getRootSpan, getSpanDescendants, removeChildSpanFromSpan, showSpanDropWarning, spanToTraceContext, spanToTraceHeader, spanToTraceparentHeader, spanToTransactionTraceContext, updateSpanName

// Module 796 (convertSpanLinksForEnvelope)
import _defineProperty from "_defineProperty";
import _objectWithoutProperties from "_objectWithoutProperties";

function convertSpanLinksForEnvelope(_links) {
  let mapped;
  if (_links) {
    if (_links.length > 0) {
      mapped = _links.map((attributes) => {
        let spanId;
        let traceFlags;
        let traceId;
        const context = attributes.context;
        ({ spanId, traceId, traceFlags } = context);
        return Object.assign({ span_id: spanId, trace_id: traceId, sampled: 1 === traceFlags, attributes: attributes.attributes }, outer1_3(context, outer1_4));
      });
    }
  }
  return mapped;
}
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
        sum = require(815) /* dateTimestampInSeconds */.timestampInSeconds();
        const obj = require(815) /* dateTimestampInSeconds */;
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
  let links;
  let spanId;
  let startTime;
  let status;
  let traceId;
  if ("function" === typeof getSpanJSON.getSpanJSON) {
    return getSpanJSON.getSpanJSON();
  } else {
    ({ spanId, traceId } = getSpanJSON.spanContext());
    if (!tmp) {
      let obj = { span_id: spanId, trace_id: traceId, start_timestamp: 0, data: {} };
      return obj;
    } else {
      const attributes = getSpanJSON.attributes;
      obj = { span_id: spanId, trace_id: traceId, data: attributes, description: getSpanJSON.name };
      ({ startTime, endTime, status, links } = getSpanJSON);
      if ("parentSpanId" in getSpanJSON) {
        let parentSpanId = getSpanJSON.parentSpanId;
      } else if ("parentSpanContext" in getSpanJSON) {
        const parentSpanContext = getSpanJSON.parentSpanContext;
        spanId = undefined;
        if (null != parentSpanContext) {
          spanId = parentSpanContext.spanId;
        }
        parentSpanId = spanId;
      }
      obj.parent_span_id = parentSpanId;
      obj.start_timestamp = spanTimeInputToSeconds(startTime);
      obj.timestamp = spanTimeInputToSeconds(endTime) || undefined;
      obj.status = getStatusMessage(status);
      obj.op = attributes[require(undefined, 816).SEMANTIC_ATTRIBUTE_SENTRY_OP];
      obj.origin = attributes[require(undefined, 816).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
      obj.links = convertSpanLinksForEnvelope(links);
      return obj;
    }
    const spanContextResult = getSpanJSON.spanContext();
    tmp = getSpanJSON.attributes && getSpanJSON.startTime && getSpanJSON.name && getSpanJSON.endTime && getSpanJSON.status;
  }
}
function spanIsSampled(spanContext) {
  return 1 === spanContext.spanContext().traceFlags;
}
function getStatusMessage(code) {
  if (code) {
    if (code.code !== require(817) /* getSpanStatusFromHttpCode */.SPAN_STATUS_UNSET) {
      let str = "ok";
      if (code.code !== require(817) /* getSpanStatusFromHttpCode */.SPAN_STATUS_OK) {
        str = code.message || "internal_error";
        const tmp5 = code.message || "internal_error";
      }
      return str;
    }
  }
}
let closure_4 = ["spanId", "traceId", "traceFlags"];
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c5 = false;

export const TRACE_FLAG_NONE = 0;
export const TRACE_FLAG_SAMPLED = 1;
export const addChildSpanToSpan = function addChildSpanToSpan(_sentryRootSpan) {
  const result = require(799) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg1, "_sentryRootSpan", _sentryRootSpan._sentryRootSpan || _sentryRootSpan);
  if (_sentryRootSpan._sentryChildSpans) {
    const _sentryChildSpans = _sentryRootSpan._sentryChildSpans;
    _sentryChildSpans.add(arg1);
  } else {
    const _Set = Set;
    const items = [arg1];
    const set = new Set(items);
    const result1 = require(799) /* addNonEnumerableProperty */.addNonEnumerableProperty(_sentryRootSpan, "_sentryChildSpans", set);
    const obj2 = require(799) /* addNonEnumerableProperty */;
  }
};
export { convertSpanLinksForEnvelope };
export const getActiveSpan = function getActiveSpan() {
  const mainCarrier = require(802) /* getSentryCarrier */.getMainCarrier();
  const obj = require(802) /* getSentryCarrier */;
  const asyncContextStrategy = require(818) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const obj4 = require(821) /* _getSpanForScope */;
    activeSpan = obj4._getSpanForScope(require(825) /* getCurrentScope */.getCurrentScope());
    const obj5 = require(825) /* getCurrentScope */;
  }
  return activeSpan;
};
export const getRootSpan = function getRootSpan(_sentryRootSpan) {
  return _sentryRootSpan._sentryRootSpan || _sentryRootSpan;
};
export const getSpanDescendants = function getSpanDescendants(arg0) {
  const set = new Set();
  function addSpanChildren(arg0) {
    let tmp = arg0;
    if (!set.has(arg0)) {
      if (outer1_10(tmp)) {
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
  if (!c5) {
    require(801) /* consoleSandbox */.consoleSandbox(() => {
      console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    });
    c5 = true;
    const obj = require(801) /* consoleSandbox */;
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
  let obj = require(797) /* unwrapScopeFromWeakRef */;
  const scope = obj.getCapturedScopesOnSpan(spanContext).scope;
  obj = { parent_span_id };
  if (isRemote) {
    let propagationSpanId;
    if (null != scope) {
      propagationSpanId = scope.getPropagationContext().propagationSpanId;
    }
    if (!propagationSpanId) {
      propagationSpanId = require(806) /* generateSpanId */.generateSpanId();
      const obj3 = require(806) /* generateSpanId */;
    }
    spanId = propagationSpanId;
  }
  obj.span_id = spanId;
  obj.trace_id = spanContextResult.traceId;
  return obj;
};
export const spanToTraceHeader = function spanToTraceHeader(spanContext) {
  let spanId;
  let traceId;
  ({ traceId, spanId } = spanContext.spanContext());
  const spanContextResult = spanContext.spanContext();
  const tmp2 = spanIsSampled(spanContext);
  return require(811) /* extractTraceparentData */.generateSentryTraceHeader(traceId, spanId, tmp2);
};
export const spanToTraceparentHeader = function spanToTraceparentHeader(span) {
  let spanId;
  let traceId;
  ({ traceId, spanId } = span.spanContext());
  const spanContextResult = span.spanContext();
  const tmp2 = spanIsSampled(span);
  return require(811) /* extractTraceparentData */.generateTraceparentHeader(traceId, spanId, tmp2);
};
export const spanToTransactionTraceContext = function spanToTransactionTraceContext(spanContext) {
  let spanId;
  let traceId;
  ({ spanId, traceId } = spanContext.spanContext());
  const tmp2 = spanToJSON(spanContext);
  return { parent_span_id: tmp2.parent_span_id, span_id: spanId, trace_id: traceId, data: tmp2.data, op: tmp2.op, status: tmp2.status, origin: tmp2.origin, links: tmp2.links };
};
export const updateSpanName = function updateSpanName(updateName) {
  updateName.updateName(arg1);
  updateName.setAttributes(_defineProperty(_defineProperty({}, require(816).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom"), require(816).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME, arg1));
};
