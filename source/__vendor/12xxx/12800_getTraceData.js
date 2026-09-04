// Module ID: 12800
// Function ID: 12801
// Name: getTraceData
// Dependencies: [12725, 12728, 12757, 12743, 12756, 12777, 12747, 12748, 12734, 12765, 12742, 12741, 12729]
// Exports: getTraceData

// Module 12800 (getTraceData)
import errorCallback from "errorCallback" /* 12725 */;
import getClient from "getClient" /* 12756 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 12728 */;
import dateTimestampInSeconds from "dateTimestampInSeconds" /* 12743 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = getClient.getClient();
  const obj2 = getClient;
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = tmp(12747);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(12748);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12756).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12734).getActiveSpan();
          const tmpResult2 = tmp(12734);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12734).spanToTraceHeader(span);
          const tmpResult3 = tmp(12734);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12741).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(12741);
        }
        const tmpResult5 = tmp(12765);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(12756);
        const result = tmp(12742).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12741).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(12729).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};
