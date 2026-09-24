// Module ID: 13216
// Function ID: 13217
// Dependencies: [13141, 13144, 13173, 13159, 13172, 13193, 13163, 13164, 13150, 13181, 13158, 13157, 13145]
// Exports: getTraceData

// Module 13216
import errorCallback from "errorCallback" /* 13141 */;
import _mod13172 from "module_13172" /* 13172 */;
import "module_13144";
import __SENTRY_DEBUG__ from "module_13173" /* 13173 */;
import dateTimestampInSeconds from "module_13159" /* 13159 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13172.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(13163).getMainCarrier();
      const tmpResult = tmp(13163);
      const asyncContextStrategy = tmp(13164).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(13172).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(13150).getActiveSpan();
          const tmpResult10 = tmp(13150);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(13150).spanToTraceHeader(span);
          const tmpResult11 = tmp(13150);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(13157).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(13157);
        }
        const tmpResult13 = tmp(13181);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(13172);
        const result = tmp(13158).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13157).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(13145).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(13164);
    }
  }
  return {};
};
