// Module ID: 684
// Function ID: 685
// Name: TRACE_FLAG_NONE
// Dependencies: [685, 694, 699, 703, 704, 705, 687, 690, 706, 709, 713, 689]
// Exports: addChildSpanToSpan, convertSpanLinksForEnvelope, getActiveSpan, getRootSpan, getSpanDescendants, getStatusMessage, removeChildSpanFromSpan, showSpanDropWarning, spanTimeInputToSeconds, spanToTraceContext, spanToTraceHeader, spanToTraceparentHeader, spanToTransactionTraceContext, updateSpanName

// Module 684 (TRACE_FLAG_NONE)
import _mod685 from "module_685" /* 685 */;
import _mod687 from "module_687" /* 687 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 689 */;
import _mod690 from "module_690" /* 690 */;
import regExp from "regExp" /* 699 */;
import browserPerformanceTimeOrigin from "browserPerformanceTimeOrigin" /* 703 */;
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 704 */;
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 705 */;
import _mod706 from "module_706" /* 706 */;
import _getSpanForScope2 from "_getSpanForScope" /* 709 */;
import _mod713 from "module_713" /* 713 */;

let set;

let tmp3;
const generateSpanId = tmp3(694);
const f71765 = (attributes) => {
  let spanId;
  let traceFlags;
  let traceId;
  const context = attributes.context;
  ({ spanId, traceId, traceFlags } = context);
  const obj = { span_id: spanId, trace_id: traceId, sampled: 1 === traceFlags, attributes: attributes.attributes };
  const merged = Object.assign(Object.assign(context, Object.assign({ spanId: 0, traceId: 0, traceFlags: 0 })));
  return obj;
};
function spanToJSON(getSpanJSON) {
  let attributes;
  let endTime;
  let links;
  let mapped;
  let parentSpanId;
  let spanId;
  let startTime;
  let status;
  let sum;
  let sum1;
  let tmp16;
  let traceId;
  if (typeof getSpanJSON.getSpanJSON === "function") {
    return getSpanJSON.getSpanJSON();
  } else {
    ({ spanId, traceId } = getSpanJSON.spanContext());
    getSpanJSON.spanContext();
    const tmp = getSpanJSON.attributes && getSpanJSON.startTime && getSpanJSON.name && getSpanJSON.endTime && getSpanJSON.status;
    if (tmp) {
      ({ attributes, startTime, endTime, status, links } = getSpanJSON);
      const obj2 = { span_id: spanId, trace_id: traceId, data: attributes, description: getSpanJSON.name, parent_span_id: parentSpanId, start_timestamp: sum, timestamp: sum1, status: tmp16, op: attributes[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP], origin: attributes[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN], links: mapped };
      if ("parentSpanId" in getSpanJSON) {
        parentSpanId = getSpanJSON.parentSpanId;
      } else if ("parentSpanContext" in getSpanJSON) {
        const parentSpanContext = getSpanJSON.parentSpanContext;
        let spanId1;
        if (parentSpanContext != null) {
          spanId1 = parentSpanContext.spanId;
        }
        parentSpanId = spanId1;
      }
      if (typeof startTime === "number") {
        let result = startTime;
        if (startTime > 9999999999) {
          result = startTime / 1000;
        }
        sum = result;
      } else {
        const _Array = Array;
        if (Array.isArray(startTime)) {
          sum = startTime[0] + startTime[1] / 1000000000;
        } else {
          const _Date = Date;
          if (startTime instanceof Date) {
            const time = startTime.getTime();
            let result1 = time;
            if (time > 9999999999) {
              result1 = time / 1000;
            }
            sum = result1;
          } else {
            const obj3 = browserPerformanceTimeOrigin;
            sum = obj3.timestampInSeconds();
          }
        }
      }
      if (typeof endTime === "number") {
        let result2 = endTime;
        if (endTime > 9999999999) {
          result2 = endTime / 1000;
        }
        sum1 = result2;
      } else {
        const _Array2 = Array;
        if (Array.isArray(endTime)) {
          sum1 = endTime[0] + endTime[1] / 1000000000;
        } else {
          const _Date2 = Date;
          if (endTime instanceof Date) {
            const time1 = endTime.getTime();
            let result3 = time1;
            if (time1 > 9999999999) {
              result3 = time1 / 1000;
            }
            sum1 = result3;
          } else {
            const obj4 = browserPerformanceTimeOrigin;
            sum1 = obj4.timestampInSeconds();
          }
        }
      }
      tmp16 = undefined;
      if (status) {
        const tmp17 = require;
        if (status.code !== SPAN_STATUS_ERROR.SPAN_STATUS_UNSET) {
          let str3 = "ok";
          if (status.code !== tmp17(705).SPAN_STATUS_OK) {
            str3 = status.message || "internal_error";
          }
          tmp16 = str3;
        }
      }
      mapped = undefined;
      if (links) {
        if (links.length > 0) {
          mapped = links.map(f71765);
        }
      }
      return obj2;
    } else {
      let obj = { span_id: spanId, trace_id: traceId, start_timestamp: 0, data: {} };
      return obj;
    }
  }
}
function spanIsSampled(spanContext) {
  return 1 === spanContext.spanContext().traceFlags;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
  const obj = _mod687;
  const result = obj.addNonEnumerableProperty(arg1, tmp, tmp2);
  if (arg0[_sentryChildSpans]) {
    const obj2 = arg0[_sentryChildSpans];
    obj2.add(arg1);
  } else {
    const _Set = Set;
    const items = [arg1];
    const self = this;
    const self2 = this;
    const addNonEnumerableProperty = tmp3(687).addNonEnumerableProperty;
    _mod687;
    set = new Set(items);
    const result1 = addNonEnumerableProperty(arg0, tmp6, set);
  }
};
export const convertSpanLinksForEnvelope = function convertSpanLinksForEnvelope(_links) {
  let mapped;
  if (_links) {
    if (_links.length > 0) {
      mapped = _links.map(f71765);
    }
  }
  return mapped;
};
export const getActiveSpan = function getActiveSpan() {
  let activeSpan;
  const obj = _mod690;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod706;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const _getSpanForScope = _getSpanForScope2._getSpanForScope;
    _getSpanForScope2;
    const tmpResult2 = _mod713;
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
export const getStatusMessage = function getStatusMessage(code) {
  const tmp = code;
  if (tmp) {
    const tmp2 = require;
    if (code.code !== SPAN_STATUS_ERROR.SPAN_STATUS_UNSET) {
      let str = "ok";
      if (code.code !== tmp2(705).SPAN_STATUS_OK) {
        str = code.message || "internal_error";
      }
      return str;
    }
  }
};
export const removeChildSpanFromSpan = function removeChildSpanFromSpan(arg0, arg1) {
  if (arg0[_sentryChildSpans]) {
    const obj = arg0[tmp];
    obj.delete(arg1);
  }
};
export const showSpanDropWarning = function showSpanDropWarning() {
  const tmp = c2;
  if (!tmp) {
    const obj = CONSOLE_LEVELS;
    obj.consoleSandbox(() => {
      console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    });
    c2 = true;
  }
};
export { spanIsSampled };
export const spanTimeInputToSeconds = function spanTimeInputToSeconds(getTime) {
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
        const obj = browserPerformanceTimeOrigin;
        sum = obj.timestampInSeconds();
      }
    }
  }
  return sum;
};
export { spanToJSON };
export const spanToTraceContext = function spanToTraceContext(spanContext) {
  let isRemote;
  let spanId;
  const spanContextResult = spanContext.spanContext();
  ({ spanId, isRemote } = spanContextResult);
  let parent_span_id = spanId;
  const traceId = spanContextResult.traceId;
  if (!isRemote) {
    parent_span_id = spanToJSON(spanContext).parent_span_id;
  }
  const obj = _mod685;
  const scope = obj.getCapturedScopesOnSpan(spanContext).scope;
  const obj2 = { parent_span_id, span_id: spanId, trace_id: traceId };
  if (isRemote) {
    let propagationSpanId;
    if (scope != null) {
      propagationSpanId = scope.getPropagationContext().propagationSpanId;
    }
    if (!propagationSpanId) {
      const tmp3Result = generateSpanId;
      propagationSpanId = tmp3Result.generateSpanId();
    }
    spanId = propagationSpanId;
  }
  return obj2;
};
export const spanToTraceHeader = function spanToTraceHeader(spanContext) {
  let spanId;
  let traceId;
  ({ traceId, spanId } = spanContext.spanContext());
  spanContext.spanContext();
  const traceFlags = spanContext.spanContext().traceFlags;
  const obj = regExp;
  return obj.generateSentryTraceHeader(traceId, spanId, 1 === traceFlags);
};
export const spanToTraceparentHeader = function spanToTraceparentHeader(span) {
  let spanId;
  let traceId;
  ({ traceId, spanId } = span.spanContext());
  span.spanContext();
  const traceFlags = span.spanContext().traceFlags;
  const obj = regExp;
  return obj.generateTraceparentHeader(traceId, spanId, 1 === traceFlags);
};
export const spanToTransactionTraceContext = function spanToTransactionTraceContext(spanContext) {
  let spanId;
  let traceId;
  ({ spanId, traceId } = spanContext.spanContext());
  spanContext.spanContext();
  const tmp2 = spanToJSON(spanContext);
  return { parent_span_id: tmp2.parent_span_id, span_id: spanId, trace_id: traceId, data: tmp2.data, op: tmp2.op, status: tmp2.status, origin: tmp2.origin, links: tmp2.links };
};
export const updateSpanName = function updateSpanName(updateName, arg1) {
  updateName.updateName(arg1);
  const obj = { [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom", [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: arg1 };
  updateName.setAttributes(obj);
};
