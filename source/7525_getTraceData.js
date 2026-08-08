// Module ID: 7525
// Function ID: 7526
// Name: getTraceData
// Dependencies: [7450, 7453, 7482, 7468, 7481, 7502, 7472, 7473, 7459, 7490, 7467, 7466, 7454]
// Exports: getTraceData

// Module 7525 (getTraceData)
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
  const client = require(7481) /* getClient */.getClient();
  const obj2 = require(7481) /* getClient */;
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = tmp(7472);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(7473);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(7481).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(7459).getActiveSpan();
          const tmpResult2 = tmp(7459);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(7459).spanToTraceHeader(span);
          const tmpResult3 = tmp(7459);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(7466).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(7466);
        }
        const tmpResult5 = tmp(7490);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(7481);
        const result = tmp(7467).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(7466).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(7454).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};
