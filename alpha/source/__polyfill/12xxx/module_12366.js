// Module ID: 12366
// Function ID: 12367
// Dependencies: [12291, 12294, 12323, 12309, 12322, 12343, 12313, 12314, 12300, 12331, 12308, 12307, 12295]
// Exports: getTraceData

// Module 12366
import errorCallback from "errorCallback" /* 12291 */;
import _mod12322 from "module_12322" /* 12322 */;
import "module_12294";
import __SENTRY_DEBUG__ from "module_12323" /* 12323 */;
import dateTimestampInSeconds from "module_12309" /* 12309 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12322.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(12313).getMainCarrier();
      const tmpResult = tmp(12313);
      const asyncContextStrategy = tmp(12314).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12322).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12300).getActiveSpan();
          const tmpResult10 = tmp(12300);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12300).spanToTraceHeader(span);
          const tmpResult11 = tmp(12300);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12307).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(12307);
        }
        const tmpResult13 = tmp(12331);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(12322);
        const result = tmp(12308).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12307).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(12295).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(12314);
    }
  }
  return {};
};
