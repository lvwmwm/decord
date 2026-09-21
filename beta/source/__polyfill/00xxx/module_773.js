// Module ID: 773
// Function ID: 774
// Dependencies: [717, 738, 694, 710, 688, 726, 704, 703, 693]
// Exports: getTraceData

// Module 773
import _mod717 from "module_717" /* 717 */;

const spanToJSON = tmp3(688);
const consoleSandbox = tmp3(693);
const _mod694 = tmp3(694);
const _mod703 = tmp3(703);
const MAX_BAGGAGE_STRING_LENGTH = tmp3(704);
const _mod710 = tmp3(710);
const _mod726 = tmp3(726);
require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let client = obj.client;
  if (!client) {
    client = _mod717.getClient();
  }
  let tmp3 = require;
  let spanToTraceparentHeader = dependencyMap;
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod694.getMainCarrier();
      const tmp3Result = _mod694;
      const asyncContextStrategy = _mod710.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let scope = obj.scope;
        if (!scope) {
          scope = _mod717.getCurrentScope();
          const tmp3Result10 = _mod717;
        }
        let span = obj.span;
        if (!span) {
          span = spanToJSON.getActiveSpan();
          const tmp3Result11 = spanToJSON;
        }
        if (span) {
          let spanToTraceHeaderResult = spanToJSON.spanToTraceHeader(span);
          const tmp3Result12 = spanToJSON;
        } else {
          const propagationContext = scope.getPropagationContext();
          ({ traceId, sampled, propagationSpanId } = propagationContext);
          spanToTraceHeaderResult = _mod703.generateSentryTraceHeader(traceId, propagationSpanId, sampled);
          const tmp3Result13 = _mod703;
        }
        const tmp3Result14 = _mod726;
        if (span) {
          let dynamicSamplingContextFromSpan = tmp3Result14.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmp3Result14.getDynamicSamplingContextFromScope(client, scope);
        }
        const result = MAX_BAGGAGE_STRING_LENGTH.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod703.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          if (!obj.propagateTraceparent) {
            return obj4;
          } else {
            if (span) {
              tmp3 = spanToJSON;
              spanToTraceparentHeader = tmp3.spanToTraceparentHeader;
              let result1 = spanToTraceparentHeader(span);
            } else {
              const propagationContext1 = scope.getPropagationContext();
              ({ traceId: traceId2, sampled: sampled2, propagationSpanId: propagationSpanId2 } = propagationContext1);
              result1 = _mod703.generateTraceparentHeader(traceId2, propagationSpanId2, sampled2);
              const tmp3Result16 = _mod703;
            }
            obj4.traceparent = result1;
          }
        } else {
          const debug = consoleSandbox.debug;
          debug.warn("Invalid sentry-trace data. Cannot generate trace data");
          return {};
        }
        const tmp3Result15 = MAX_BAGGAGE_STRING_LENGTH;
      }
      const tmp3Result9 = _mod710;
    }
  }
  return {};
};
