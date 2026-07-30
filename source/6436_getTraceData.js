// Module ID: 6436
// Function ID: 6437
// Name: getTraceData
// Dependencies: [6361, 6364, 6393, 6379, 6392, 6413, 6383, 6384, 6370, 6401, 6378, 6377, 6365]
// Exports: getTraceData

// Module 6436 (getTraceData)
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
  const client = require(6392) /* getClient */.getClient();
  const obj2 = require(6392) /* getClient */;
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = tmp(6383);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(6384);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(6392).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(6370).getActiveSpan();
          const tmpResult2 = tmp(6370);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(6370).spanToTraceHeader(span);
          const tmpResult3 = tmp(6370);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(6377).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(6377);
        }
        const tmpResult5 = tmp(6401);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(6392);
        const result = tmp(6378).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(6377).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(6365).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};
