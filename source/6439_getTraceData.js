// Module ID: 6439
// Function ID: 6440
// Name: getTraceData
// Dependencies: [6364, 6367, 6396, 6382, 6395, 6416, 6386, 6387, 6373, 6404, 6381, 6380, 6368]
// Exports: getTraceData

// Module 6439 (getTraceData)
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
  const client = require(6395) /* getClient */.getClient();
  const obj2 = require(6395) /* getClient */;
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = tmp(6386);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(6387);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(6395).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(6373).getActiveSpan();
          const tmpResult2 = tmp(6373);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(6373).spanToTraceHeader(span);
          const tmpResult3 = tmp(6373);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(6380).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(6380);
        }
        const tmpResult5 = tmp(6404);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(6395);
        const result = tmp(6381).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(6380).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(6368).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};
