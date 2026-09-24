// Module ID: 13156
// Function ID: 13157
// Dependencies: [13081, 13084, 13113, 13099, 13112, 13133, 13103, 13104, 13090, 13121, 13098, 13097, 13085]
// Exports: getTraceData

// Module 13156
import errorCallback from "errorCallback" /* 13081 */;
import _mod13112 from "module_13112" /* 13112 */;
import "module_13084";
import __SENTRY_DEBUG__ from "module_13113" /* 13113 */;
import dateTimestampInSeconds from "module_13099" /* 13099 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13112.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(13103).getMainCarrier();
      const tmpResult = tmp(13103);
      const asyncContextStrategy = tmp(13104).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(13112).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(13090).getActiveSpan();
          const tmpResult10 = tmp(13090);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(13090).spanToTraceHeader(span);
          const tmpResult11 = tmp(13090);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(13097).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(13097);
        }
        const tmpResult13 = tmp(13121);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(13112);
        const result = tmp(13098).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13097).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(13085).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(13104);
    }
  }
  return {};
};
