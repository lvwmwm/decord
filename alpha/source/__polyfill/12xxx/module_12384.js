// Module ID: 12384
// Function ID: 12385
// Dependencies: [12309, 12312, 12341, 12327, 12340, 12361, 12331, 12332, 12318, 12349, 12326, 12325, 12313]
// Exports: getTraceData

// Module 12384
import errorCallback from "errorCallback" /* 12309 */;
import _mod12340 from "module_12340" /* 12340 */;
import "module_12312";
import __SENTRY_DEBUG__ from "module_12341" /* 12341 */;
import dateTimestampInSeconds from "module_12327" /* 12327 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12340.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(12331).getMainCarrier();
      const tmpResult = tmp(12331);
      const asyncContextStrategy = tmp(12332).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12340).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12318).getActiveSpan();
          const tmpResult10 = tmp(12318);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12318).spanToTraceHeader(span);
          const tmpResult11 = tmp(12318);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12325).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(12325);
        }
        const tmpResult13 = tmp(12349);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(12340);
        const result = tmp(12326).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12325).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(12313).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(12332);
    }
  }
  return {};
};
