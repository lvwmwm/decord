// Module ID: 13207
// Function ID: 13208
// Dependencies: [13132, 13135, 13164, 13150, 13163, 13184, 13154, 13155, 13141, 13172, 13149, 13148, 13136]
// Exports: getTraceData

// Module 13207
import errorCallback from "errorCallback" /* 13132 */;
import _mod13163 from "module_13163" /* 13163 */;
import "module_13135";
import __SENTRY_DEBUG__ from "module_13164" /* 13164 */;
import dateTimestampInSeconds from "module_13150" /* 13150 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13163.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(13154).getMainCarrier();
      const tmpResult = tmp(13154);
      const asyncContextStrategy = tmp(13155).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(13163).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(13141).getActiveSpan();
          const tmpResult10 = tmp(13141);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(13141).spanToTraceHeader(span);
          const tmpResult11 = tmp(13141);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(13148).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(13148);
        }
        const tmpResult13 = tmp(13172);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(13163);
        const result = tmp(13149).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13148).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(13136).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(13155);
    }
  }
  return {};
};
