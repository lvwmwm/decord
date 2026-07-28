// Module ID: 6418
// Function ID: 57533
// Name: getTraceData
// Dependencies: [6343, 6346, 6375, 6361, 6374, 6395, 6365, 6366, 6352, 6383, 6360, 6359, 6347]
// Exports: getTraceData

// Module 6418 (getTraceData)
import "errorCallback";
import module_6346 from "module_6346";
import module_6375 from "module_6375";
import dateTimestampInSeconds from "dateTimestampInSeconds";


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const client = require(6374) /* getCurrentScope */.getClient();
    const obj2 = require(6374) /* getCurrentScope */;
    if (obj3.isEnabled()) {
      if (client) {
        const mainCarrier = require(6365) /* getSentryCarrier */.getMainCarrier();
        const obj4 = require(6365) /* getSentryCarrier */;
        const asyncContextStrategy = require(6366) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.getTraceData) {
          return asyncContextStrategy.getTraceData(first);
        } else {
          const currentScope = require(6374) /* getCurrentScope */.getCurrentScope();
          let span = first.span;
          if (!span) {
            span = require(6352) /* spanTimeInputToSeconds */.getActiveSpan();
            const obj9 = require(6352) /* spanTimeInputToSeconds */;
          }
          if (span) {
            let spanToTraceHeaderResult = require(6352) /* spanTimeInputToSeconds */.spanToTraceHeader(span);
            const obj11 = require(6352) /* spanTimeInputToSeconds */;
          } else {
            const propagationContext = currentScope.getPropagationContext();
            ({ traceId, sampled, spanId } = propagationContext);
            spanToTraceHeaderResult = require(6359) /* extractTraceparentData */.generateSentryTraceHeader(traceId, spanId, sampled);
            const obj10 = require(6359) /* extractTraceparentData */;
          }
          const obj12 = require(6383) /* getDynamicSamplingContextFromClient */;
          if (span) {
            let dynamicSamplingContextFromSpan = obj12.getDynamicSamplingContextFromSpan(span);
          } else {
            dynamicSamplingContextFromSpan = obj12.getDynamicSamplingContextFromScope(client, currentScope);
          }
          const obj7 = require(6374) /* getCurrentScope */;
          const result = require(6360) /* parseBaggageHeader */.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
          const TRACEPARENT_REGEXP = require(6359) /* extractTraceparentData */.TRACEPARENT_REGEXP;
          if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
            let obj = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          } else {
            const logger = require(6347) /* consoleSandbox */.logger;
            logger.warn("Invalid sentry-trace data. Cannot generate trace data");
            obj = {};
          }
          return obj;
        }
        const obj5 = require(6366) /* getAsyncContextStrategy */;
      }
    }
    return {};
  }
  first = {};
};
