// Module ID: 880
// Function ID: 9754
// Name: getTraceData
// Dependencies: []

// Module 880 (getTraceData)
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
      client = arg1(arg6[0]).getClient();
      const obj2 = arg1(arg6[0]);
    }
    if (obj3.isEnabled()) {
      if (client) {
        const mainCarrier = arg1(arg6[2]).getMainCarrier();
        const obj4 = arg1(arg6[2]);
        const asyncContextStrategy = arg1(arg6[3]).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.getTraceData) {
          return asyncContextStrategy.getTraceData(first);
        } else {
          let scope = first.scope;
          if (!scope) {
            scope = arg1(arg6[0]).getCurrentScope();
            const obj7 = arg1(arg6[0]);
          }
          let span = first.span;
          if (!span) {
            span = arg1(arg6[4]).getActiveSpan();
            const obj8 = arg1(arg6[4]);
          }
          if (span) {
            let spanToTraceHeaderResult = arg1(arg6[4]).spanToTraceHeader(span);
            const obj10 = arg1(arg6[4]);
          } else {
            const propagationContext = scope.getPropagationContext();
            ({ traceId, sampled, propagationSpanId } = propagationContext);
            spanToTraceHeaderResult = arg1(arg6[7]).generateSentryTraceHeader(traceId, propagationSpanId, sampled);
            const obj9 = arg1(arg6[7]);
          }
          const obj11 = arg1(arg6[5]);
          if (span) {
            let dynamicSamplingContextFromSpan = obj11.getDynamicSamplingContextFromSpan(span);
          } else {
            dynamicSamplingContextFromSpan = obj11.getDynamicSamplingContextFromScope(client, scope);
          }
          const result = arg1(arg6[6]).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
          const TRACEPARENT_REGEXP = arg1(arg6[7]).TRACEPARENT_REGEXP;
          if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
            const obj = { sentry-trace: spanToTraceHeaderResult, baggage: result };
            if (!first.propagateTraceparent) {
              return obj;
            } else {
              if (span) {
                let result1 = arg1(arg6[4]).spanToTraceparentHeader(span);
                const obj15 = arg1(arg6[4]);
              } else {
                const propagationContext1 = scope.getPropagationContext();
                ({ traceId: traceId2, sampled: sampled2, propagationSpanId: propagationSpanId2 } = propagationContext1);
                result1 = arg1(arg6[7]).generateTraceparentHeader(traceId2, propagationSpanId2, sampled2);
                const obj14 = arg1(arg6[7]);
              }
              obj.traceparent = result1;
            }
          } else {
            const debug = arg1(arg6[8]).debug;
            debug.warn("Invalid sentry-trace data. Cannot generate trace data");
            return {};
          }
          const obj12 = arg1(arg6[6]);
        }
        const obj5 = arg1(arg6[3]);
      }
    }
    return {};
  }
  first = {};
};
