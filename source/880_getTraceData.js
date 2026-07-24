// Module ID: 880
// Function ID: 9760
// Name: getTraceData
// Dependencies: [825, 845, 802, 818, 796, 833, 812, 811, 801]

// Module 880 (getTraceData)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getTraceData = function getTraceData() {
  let propagationSpanId;
  let propagationSpanId2;
  let sampled;
  let sampled2;
  let traceId;
  let traceId2;
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    let client = first.client;
    if (!client) {
      client = require(825) /* getCurrentScope */.getClient();
      const obj2 = require(825) /* getCurrentScope */;
    }
    if (obj3.isEnabled()) {
      if (client) {
        const mainCarrier = require(802) /* getSentryCarrier */.getMainCarrier();
        const obj4 = require(802) /* getSentryCarrier */;
        const asyncContextStrategy = require(818) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.getTraceData) {
          return asyncContextStrategy.getTraceData(first);
        } else {
          let scope = first.scope;
          if (!scope) {
            scope = require(825) /* getCurrentScope */.getCurrentScope();
            const obj7 = require(825) /* getCurrentScope */;
          }
          let span = first.span;
          if (!span) {
            span = require(796) /* convertSpanLinksForEnvelope */.getActiveSpan();
            const obj8 = require(796) /* convertSpanLinksForEnvelope */;
          }
          if (span) {
            let spanToTraceHeaderResult = require(796) /* convertSpanLinksForEnvelope */.spanToTraceHeader(span);
            const obj10 = require(796) /* convertSpanLinksForEnvelope */;
          } else {
            const propagationContext = scope.getPropagationContext();
            ({ traceId, sampled, propagationSpanId } = propagationContext);
            spanToTraceHeaderResult = require(811) /* extractTraceparentData */.generateSentryTraceHeader(traceId, propagationSpanId, sampled);
            const obj9 = require(811) /* extractTraceparentData */;
          }
          const obj11 = require(833) /* getDynamicSamplingContextFromClient */;
          if (span) {
            let dynamicSamplingContextFromSpan = obj11.getDynamicSamplingContextFromSpan(span);
          } else {
            dynamicSamplingContextFromSpan = obj11.getDynamicSamplingContextFromScope(client, scope);
          }
          const result = require(812) /* parseBaggageHeader */.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
          const TRACEPARENT_REGEXP = require(811) /* extractTraceparentData */.TRACEPARENT_REGEXP;
          if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
            const obj = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
            if (!first.propagateTraceparent) {
              return obj;
            } else {
              if (span) {
                let result1 = require(796) /* convertSpanLinksForEnvelope */.spanToTraceparentHeader(span);
                const obj15 = require(796) /* convertSpanLinksForEnvelope */;
              } else {
                const propagationContext1 = scope.getPropagationContext();
                ({ traceId: traceId2, sampled: sampled2, propagationSpanId: propagationSpanId2 } = propagationContext1);
                result1 = require(811) /* extractTraceparentData */.generateTraceparentHeader(traceId2, propagationSpanId2, sampled2);
                const obj14 = require(811) /* extractTraceparentData */;
              }
              obj.traceparent = result1;
            }
          } else {
            const debug = require(801) /* consoleSandbox */.debug;
            debug.warn("Invalid sentry-trace data. Cannot generate trace data");
            return {};
          }
          const obj12 = require(812) /* parseBaggageHeader */;
        }
        const obj5 = require(818) /* getAsyncContextStrategy */;
      }
    }
    return {};
  }
  first = {};
};
