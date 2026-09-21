// Module ID: 13120
// Function ID: 13121
// Dependencies: [13045, 13048, 13077, 13063, 13076, 13097, 13067, 13068, 13054, 13085, 13062, 13061, 13049]
// Exports: getTraceData

// Module 13120
import errorCallback from "errorCallback" /* 13045 */;
import _mod13076 from "module_13076" /* 13076 */;
import "module_13048";
import __SENTRY_DEBUG__ from "module_13077" /* 13077 */;
import dateTimestampInSeconds from "module_13063" /* 13063 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13076.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(13067).getMainCarrier();
      const tmpResult = tmp(13067);
      const asyncContextStrategy = tmp(13068).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(13076).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(13054).getActiveSpan();
          const tmpResult10 = tmp(13054);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(13054).spanToTraceHeader(span);
          const tmpResult11 = tmp(13054);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(13061).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(13061);
        }
        const tmpResult13 = tmp(13085);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(13076);
        const result = tmp(13062).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13061).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(13049).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(13068);
    }
  }
  return {};
};
