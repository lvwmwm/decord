// Module ID: 6382
// Function ID: 57444
// Name: getTraceData
// Dependencies: [6307, 6310, 6339, 6325, 6338, 6359, 6329, 6330, 6316, 6347, 6324, 6323, 6311]
// Exports: getTraceData

// Module 6382 (getTraceData)
import "errorCallback";
import module_6310 from "module_6310";
import module_6339 from "module_6339";
import dateTimestampInSeconds from "dateTimestampInSeconds";


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const client = require(6338) /* getCurrentScope */.getClient();
    const obj2 = require(6338) /* getCurrentScope */;
    if (obj3.isEnabled()) {
      if (client) {
        const mainCarrier = require(6329) /* getSentryCarrier */.getMainCarrier();
        const obj4 = require(6329) /* getSentryCarrier */;
        const asyncContextStrategy = require(6330) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.getTraceData) {
          return asyncContextStrategy.getTraceData(first);
        } else {
          const currentScope = require(6338) /* getCurrentScope */.getCurrentScope();
          let span = first.span;
          if (!span) {
            span = require(6316) /* spanTimeInputToSeconds */.getActiveSpan();
            const obj9 = require(6316) /* spanTimeInputToSeconds */;
          }
          if (span) {
            let spanToTraceHeaderResult = require(6316) /* spanTimeInputToSeconds */.spanToTraceHeader(span);
            const obj11 = require(6316) /* spanTimeInputToSeconds */;
          } else {
            const propagationContext = currentScope.getPropagationContext();
            ({ traceId, sampled, spanId } = propagationContext);
            spanToTraceHeaderResult = require(6323) /* extractTraceparentData */.generateSentryTraceHeader(traceId, spanId, sampled);
            const obj10 = require(6323) /* extractTraceparentData */;
          }
          const obj12 = require(6347) /* getDynamicSamplingContextFromClient */;
          if (span) {
            let dynamicSamplingContextFromSpan = obj12.getDynamicSamplingContextFromSpan(span);
          } else {
            dynamicSamplingContextFromSpan = obj12.getDynamicSamplingContextFromScope(client, currentScope);
          }
          const obj7 = require(6338) /* getCurrentScope */;
          const result = require(6324) /* parseBaggageHeader */.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
          const TRACEPARENT_REGEXP = require(6323) /* extractTraceparentData */.TRACEPARENT_REGEXP;
          if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
            let obj = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          } else {
            const logger = require(6311) /* consoleSandbox */.logger;
            logger.warn("Invalid sentry-trace data. Cannot generate trace data");
            obj = {};
          }
          return obj;
        }
        const obj5 = require(6330) /* getAsyncContextStrategy */;
      }
    }
    return {};
  }
  first = {};
};
