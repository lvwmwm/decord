// Module ID: 7418
// Function ID: 7419
// Name: getTraceData
// Dependencies: [7343, 7346, 7375, 7361, 7374, 7395, 7365, 7366, 7352, 7383, 7360, 7359, 7347]
// Exports: getTraceData

// Module 7418 (getTraceData)
import "errorCallback";
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__";
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__";
import dateTimestampInSeconds from "dateTimestampInSeconds";


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = require(7374) /* getClient */.getClient();
  const obj2 = require(7374) /* getClient */;
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = tmp(7365);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(7366);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(7374).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(7352).getActiveSpan();
          const tmpResult2 = tmp(7352);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(7352).spanToTraceHeader(span);
          const tmpResult3 = tmp(7352);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(7359).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(7359);
        }
        const tmpResult5 = tmp(7383);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(7374);
        const result = tmp(7360).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(7359).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(7347).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};
