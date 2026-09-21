// Module ID: 13121
// Function ID: 13122
// Dependencies: [13046, 13049, 13078, 13064, 13077, 13098, 13068, 13069, 13055, 13086, 13063, 13062, 13050]
// Exports: getTraceData

// Module 13121
import errorCallback from "errorCallback" /* 13046 */;
import _mod13077 from "module_13077" /* 13077 */;
import "module_13049";
import __SENTRY_DEBUG__ from "module_13078" /* 13078 */;
import dateTimestampInSeconds from "module_13064" /* 13064 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13077.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(13068).getMainCarrier();
      const tmpResult = tmp(13068);
      const asyncContextStrategy = tmp(13069).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(13077).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(13055).getActiveSpan();
          const tmpResult10 = tmp(13055);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(13055).spanToTraceHeader(span);
          const tmpResult11 = tmp(13055);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(13062).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(13062);
        }
        const tmpResult13 = tmp(13086);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(13077);
        const result = tmp(13063).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13062).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(13050).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(13069);
    }
  }
  return {};
};
