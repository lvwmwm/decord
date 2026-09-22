// Module ID: 13001
// Function ID: 13002
// Dependencies: [12926, 12929, 12958, 12944, 12957, 12978, 12948, 12949, 12935, 12966, 12943, 12942, 12930]
// Exports: getTraceData

// Module 13001
import errorCallback from "errorCallback" /* 12926 */;
import _mod12957 from "module_12957" /* 12957 */;
import "module_12929";
import __SENTRY_DEBUG__ from "module_12958" /* 12958 */;
import dateTimestampInSeconds from "module_12944" /* 12944 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12957.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(12948).getMainCarrier();
      const tmpResult = tmp(12948);
      const asyncContextStrategy = tmp(12949).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12957).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12935).getActiveSpan();
          const tmpResult10 = tmp(12935);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12935).spanToTraceHeader(span);
          const tmpResult11 = tmp(12935);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12942).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(12942);
        }
        const tmpResult13 = tmp(12966);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(12957);
        const result = tmp(12943).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12942).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(12930).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(12949);
    }
  }
  return {};
};
