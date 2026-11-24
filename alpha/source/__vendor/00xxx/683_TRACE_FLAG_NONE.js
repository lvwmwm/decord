// Module ID: 683
// Function ID: 684
// Name: TRACE_FLAG_NONE
// Dependencies: [684, 693, 698, 702, 703, 704, 686, 689, 705, 708, 712, 688]
// Exports: addChildSpanToSpan, convertSpanLinksForEnvelope, getActiveSpan, getRootSpan, getSpanDescendants, getStatusMessage, removeChildSpanFromSpan, showSpanDropWarning, spanTimeInputToSeconds, spanToTraceContext, spanToTraceHeader, spanToTraceparentHeader, spanToTransactionTraceContext, updateSpanName

// Module 683 (TRACE_FLAG_NONE)
import _mod684 from "module_684" /* 684 */;
import _mod686 from "module_686" /* 686 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 688 */;
import _mod689 from "module_689" /* 689 */;
import regExp from "regExp" /* 698 */;
import browserPerformanceTimeOrigin from "browserPerformanceTimeOrigin" /* 702 */;
import GEN_AI_CONVERSATION_ID_ATTRIBUTE from "GEN_AI_CONVERSATION_ID_ATTRIBUTE" /* 703 */;
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 704 */;
import _mod705 from "module_705" /* 705 */;
import _getSpanForScope2 from "_getSpanForScope" /* 708 */;
import _mod712 from "module_712" /* 712 */;

let set;

let tmp3;
const generateSpanId = tmp3(693);
const f79150 = (attributes) => {
  let spanId;
  let traceFlags;
  let traceId;
  const context = attributes.context;
  ({ spanId, traceId, traceFlags } = context);
  const obj = { span_id: spanId, trace_id: traceId, sampled: 1 === traceFlags, attributes: attributes.attributes };
  const merged = Object.assign(Object.assign(context, Object.assign({ spanId: 0, traceId: 0, traceFlags: 0 })));
  return obj;
};
function spanToJSON(activeSpan) {
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
  if (typeof activeSpan.getSpanJSON === "function") {
    return activeSpan.getSpanJSON();
  } else {
    ({ spanId, traceId } = activeSpan.spanContext());
    activeSpan.spanContext();
    const tmp = activeSpan.attributes && activeSpan.startTime && activeSpan.name && activeSpan.endTime && activeSpan.status;
    if (tmp) {
      ({ attributes, startTime, endTime, status, links } = activeSpan);
      const obj2 = { span_id: spanId, trace_id: traceId, data: attributes, description: activeSpan.name, parent_span_id: parentSpanId, start_timestamp: sum, timestamp: sum1, status: tmp16, op: attributes[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_OP], origin: attributes[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN], links: mapped };
      if ("parentSpanId" in activeSpan) {
        parentSpanId = activeSpan.parentSpanId;
      } else if ("parentSpanContext" in activeSpan) {
        const parentSpanContext = activeSpan.parentSpanContext;
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
          if (status.code !== tmp17(704).SPAN_STATUS_OK) {
            str3 = status.message || "internal_error";
          }
          tmp16 = str3;
        }
      }
      mapped = undefined;
      if (links) {
        if (links.length > 0) {
          mapped = links.map(f79150);
        }
      }
      return obj2;
    } else {
      let obj = { span_id: spanId, trace_id: traceId, start_timestamp: 0, data: {} };
      return obj;
    }
  }
}
function spanIsSampled(parentSpan) {
  return 1 === parentSpan.spanContext().traceFlags;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = false;
const _sentryChildSpans = "_sentryChildSpans";
const _sentryRootSpan = "_sentryRootSpan";

export const TRACE_FLAG_NONE = 0;
export const TRACE_FLAG_SAMPLED = 1;
export function addChildSpanToSpan(parentSpan, sentrySpan) {
  let tmp2 = parentSpan[_sentryRootSpan];
  const tmp = _sentryRootSpan;
  if (!tmp2) {
    tmp2 = parentSpan;
  }
  const obj = _mod686;
  const result = obj.addNonEnumerableProperty(sentrySpan, tmp, tmp2);
  if (parentSpan[_sentryChildSpans]) {
    const obj2 = parentSpan[_sentryChildSpans];
    obj2.add(sentrySpan);
  } else {
    const _Set = Set;
    const items = [sentrySpan];
    const self = this;
    const self2 = this;
    const addNonEnumerableProperty = tmp3(686).addNonEnumerableProperty;
    _mod686;
    set = new Set(items);
    const result1 = addNonEnumerableProperty(parentSpan, tmp6, set);
  }
}
export function convertSpanLinksForEnvelope(_links) {
  let mapped;
  if (_links) {
    if (_links.length > 0) {
      mapped = _links.map(f79150);
    }
  }
  return mapped;
}
export function getActiveSpan() {
  let activeSpan;
  const obj = _mod689;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod705;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const _getSpanForScope = _getSpanForScope2._getSpanForScope;
    _getSpanForScope2;
    const tmpResult2 = _mod712;
    activeSpan = _getSpanForScope(tmpResult2.getCurrentScope());
  }
  return activeSpan;
}
export function getRootSpan(activeSpan) {
  return activeSpan[_sentryRootSpan] || activeSpan;
}
export function getSpanDescendants(activeSpan) {
  set = new Set();
  function addSpanChildren(item10019) {
    const obj = set;
    if (!set.has(item10019)) {
      if (spanIsSampled(item10019)) {
        obj.add(item10019);
        if (item10019[_sentryChildSpans]) {
          const _Array = Array;
          let items = Array.from(item10019[tmp3]);
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
  addSpanChildren(activeSpan);
  return Array.from(set);
}
export function getStatusMessage(_status) {
  const tmp = _status;
  if (tmp) {
    const tmp2 = require;
    if (_status.code !== SPAN_STATUS_ERROR.SPAN_STATUS_UNSET) {
      let str = "ok";
      if (_status.code !== tmp2(704).SPAN_STATUS_OK) {
        str = _status.message || "internal_error";
      }
      return str;
    }
  }
}
export function removeChildSpanFromSpan(c14, isRecording) {
  if (c14[_sentryChildSpans]) {
    const obj = c14[tmp];
    obj.delete(isRecording);
  }
}
export function showSpanDropWarning() {
  const tmp = c2;
  if (!tmp) {
    const obj = CONSOLE_LEVELS;
    obj.consoleSandbox(() => {
      console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    });
    c2 = true;
  }
}
export { spanIsSampled };
export function spanTimeInputToSeconds(startTime) {
  let sum;
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
        const obj = browserPerformanceTimeOrigin;
        sum = obj.timestampInSeconds();
      }
    }
  }
  return sum;
}
export { spanToJSON };
export function spanToTraceContext(activeSpan) {
  let isRemote;
  let spanId;
  const spanContextResult = activeSpan.spanContext();
  ({ spanId, isRemote } = spanContextResult);
  let parent_span_id = spanId;
  const traceId = spanContextResult.traceId;
  if (!isRemote) {
    parent_span_id = spanToJSON(activeSpan).parent_span_id;
  }
  const obj = _mod684;
  const scope = obj.getCapturedScopesOnSpan(activeSpan).scope;
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
}
export function spanToTraceHeader(span) {
  let spanId;
  let traceId;
  ({ traceId, spanId } = span.spanContext());
  span.spanContext();
  const traceFlags = span.spanContext().traceFlags;
  const obj = regExp;
  return obj.generateSentryTraceHeader(traceId, spanId, 1 === traceFlags);
}
export function spanToTraceparentHeader(span) {
  let spanId;
  let traceId;
  ({ traceId, spanId } = span.spanContext());
  span.spanContext();
  const traceFlags = span.spanContext().traceFlags;
  const obj = regExp;
  return obj.generateTraceparentHeader(traceId, spanId, 1 === traceFlags);
}
export function spanToTransactionTraceContext(self) {
  let spanId;
  let traceId;
  ({ spanId, traceId } = self.spanContext());
  self.spanContext();
  const tmp2 = spanToJSON(self);
  return { parent_span_id: tmp2.parent_span_id, span_id: spanId, trace_id: traceId, data: tmp2.data, op: tmp2.op, status: tmp2.status, origin: tmp2.origin, links: tmp2.links };
}
export function updateSpanName(updateName, arg1) {
  updateName.updateName(arg1);
  const obj = { [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom", [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: arg1 };
  updateName.setAttributes(obj);
}
