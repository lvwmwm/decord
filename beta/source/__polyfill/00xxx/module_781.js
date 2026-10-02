// Module ID: 781
// Function ID: 782
// Dependencies: [725, 746, 702, 718, 696, 734, 712, 711, 701]
// Exports: getTraceData

// Module 781
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 696 */;
import _mod702 from "module_702" /* 702 */;
import regExp from "regExp" /* 711 */;
import MAX_BAGGAGE_STRING_LENGTH from "MAX_BAGGAGE_STRING_LENGTH" /* 712 */;
import _mod718 from "module_718" /* 718 */;
import _mod725 from "module_725" /* 725 */;
import freezeDscOnSpan from "freezeDscOnSpan" /* 734 */;
import _mod746 from "module_746" /* 746 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getTraceData = function getTraceData() {
  let propagationSpanId;
  let propagationSpanId2;
  let sampled;
  let sampled2;
  let traceId;
  let traceId2;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let client = obj.client;
  if (!client) {
    const obj2 = _mod725;
    client = obj2.getClient();
  }
  const obj3 = _mod746;
  if (obj3.isEnabled()) {
    if (client) {
      const tmp3Result = _mod702;
      const mainCarrier = tmp3Result.getMainCarrier();
      const tmp3Result10 = _mod718;
      const asyncContextStrategy = tmp3Result10.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let scope = obj.scope;
        if (!scope) {
          const tmp3Result11 = _mod725;
          scope = tmp3Result11.getCurrentScope();
        }
        let span = obj.span;
        if (!span) {
          const tmp3Result12 = TRACE_FLAG_NONE;
          span = tmp3Result12.getActiveSpan();
        }
        if (span) {
          const tmp3Result13 = TRACE_FLAG_NONE;
          spanToTraceHeaderResult = tmp3Result13.spanToTraceHeader(span);
        } else {
          const propagationContext = scope.getPropagationContext();
          ({ traceId, sampled, propagationSpanId } = propagationContext);
          const tmp3Result14 = regExp;
          spanToTraceHeaderResult = tmp3Result14.generateSentryTraceHeader(traceId, propagationSpanId, sampled);
        }
        const tmp3Result15 = freezeDscOnSpan;
        if (span) {
          dynamicSamplingContextFromSpan = tmp3Result15.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmp3Result15.getDynamicSamplingContextFromScope(client, scope);
        }
        const tmp3Result16 = MAX_BAGGAGE_STRING_LENGTH;
        const result = tmp3Result16.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp3(711).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          if (obj.propagateTraceparent) {
            let result1;
            if (span) {
              const tmp3Result17 = TRACE_FLAG_NONE;
              result1 = tmp3Result17.spanToTraceparentHeader(span);
            } else {
              const propagationContext1 = scope.getPropagationContext();
              ({ traceId: traceId2, sampled: sampled2, propagationSpanId: propagationSpanId2 } = propagationContext1);
              const tmp3Result18 = regExp;
              result1 = tmp3Result18.generateTraceparentHeader(traceId2, propagationSpanId2, sampled2);
            }
            obj4.traceparent = result1;
          }
          return obj4;
        } else {
          const debug = tmp3(701).debug;
          debug.warn("Invalid sentry-trace data. Cannot generate trace data");
          return {};
        }
      }
    }
  }
  return {};
};
