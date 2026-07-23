// Module ID: 7307
// Function ID: 58962
// Name: getTraceData
// Dependencies: [7232, 7235, 7264, 7250, 7263, 7284, 7254, 7255, 7241, 7272, 7249, 7248, 7236]
// Exports: getTraceData

// Module 7307 (getTraceData)
import "errorCallback";
import module_7235 from "module_7235";
import module_7264 from "module_7264";
import dateTimestampInSeconds from "dateTimestampInSeconds";


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const client = require(7263) /* getCurrentScope */.getClient();
    const obj2 = require(7263) /* getCurrentScope */;
    if (obj3.isEnabled()) {
      if (client) {
        const mainCarrier = require(7254) /* getSentryCarrier */.getMainCarrier();
        const obj4 = require(7254) /* getSentryCarrier */;
        const asyncContextStrategy = require(7255) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.getTraceData) {
          return asyncContextStrategy.getTraceData(first);
        } else {
          const currentScope = require(7263) /* getCurrentScope */.getCurrentScope();
          let span = first.span;
          if (!span) {
            span = require(7241) /* spanTimeInputToSeconds */.getActiveSpan();
            const obj9 = require(7241) /* spanTimeInputToSeconds */;
          }
          if (span) {
            let spanToTraceHeaderResult = require(7241) /* spanTimeInputToSeconds */.spanToTraceHeader(span);
            const obj11 = require(7241) /* spanTimeInputToSeconds */;
          } else {
            const propagationContext = currentScope.getPropagationContext();
            ({ traceId, sampled, spanId } = propagationContext);
            spanToTraceHeaderResult = require(7248) /* extractTraceparentData */.generateSentryTraceHeader(traceId, spanId, sampled);
            const obj10 = require(7248) /* extractTraceparentData */;
          }
          const obj12 = require(7272) /* getDynamicSamplingContextFromClient */;
          if (span) {
            let dynamicSamplingContextFromSpan = obj12.getDynamicSamplingContextFromSpan(span);
          } else {
            dynamicSamplingContextFromSpan = obj12.getDynamicSamplingContextFromScope(client, currentScope);
          }
          const obj7 = require(7263) /* getCurrentScope */;
          const result = require(7249) /* parseBaggageHeader */.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
          const TRACEPARENT_REGEXP = require(7248) /* extractTraceparentData */.TRACEPARENT_REGEXP;
          if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
            let obj = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          } else {
            const logger = require(7236) /* consoleSandbox */.logger;
            logger.warn("Invalid sentry-trace data. Cannot generate trace data");
            obj = {};
          }
          return obj;
        }
        const obj5 = require(7255) /* getAsyncContextStrategy */;
      }
    }
    return {};
  }
  first = {};
};
