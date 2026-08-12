// Module ID: 7566
// Function ID: 7567
// Name: getTraceData
// Dependencies: [7491, 7494, 7523, 7509, 7522, 7543, 7513, 7514, 7500, 7531, 7508, 7507, 7495]
// Exports: getTraceData

// Module 7566 (getTraceData)
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
  const client = require(7522) /* getClient */.getClient();
  const obj2 = require(7522) /* getClient */;
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = tmp(7513);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(7514);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(7522).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(7500).getActiveSpan();
          const tmpResult2 = tmp(7500);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(7500).spanToTraceHeader(span);
          const tmpResult3 = tmp(7500);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(7507).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(7507);
        }
        const tmpResult5 = tmp(7531);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(7522);
        const result = tmp(7508).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(7507).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(7495).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};
