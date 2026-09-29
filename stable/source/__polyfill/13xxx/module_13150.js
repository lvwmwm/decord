// Module ID: 13150
// Function ID: 13151
// Dependencies: [13075, 13078, 13107, 13093, 13106, 13127, 13097, 13098, 13084, 13115, 13092, 13091, 13079]
// Exports: getTraceData

// Module 13150
import errorCallback from "errorCallback" /* 13075 */;
import _mod13106 from "module_13106" /* 13106 */;
import "module_13078";
import __SENTRY_DEBUG__ from "module_13107" /* 13107 */;
import dateTimestampInSeconds from "module_13093" /* 13093 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13106.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(13097).getMainCarrier();
      const tmpResult = tmp(13097);
      const asyncContextStrategy = tmp(13098).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(13106).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(13084).getActiveSpan();
          const tmpResult10 = tmp(13084);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(13084).spanToTraceHeader(span);
          const tmpResult11 = tmp(13084);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(13091).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(13091);
        }
        const tmpResult13 = tmp(13115);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(13106);
        const result = tmp(13092).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13091).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(13079).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(13098);
    }
  }
  return {};
};
