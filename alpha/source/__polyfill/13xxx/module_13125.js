// Module ID: 13125
// Function ID: 13126
// Dependencies: [13050, 13053, 13082, 13068, 13081, 13102, 13072, 13073, 13059, 13090, 13067, 13066, 13054]
// Exports: getTraceData

// Module 13125
import errorCallback from "errorCallback" /* 13050 */;
import _mod13081 from "module_13081" /* 13081 */;
import "module_13053";
import __SENTRY_DEBUG__ from "module_13082" /* 13082 */;
import dateTimestampInSeconds from "module_13068" /* 13068 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13081.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(13072).getMainCarrier();
      const tmpResult = tmp(13072);
      const asyncContextStrategy = tmp(13073).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(13081).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(13059).getActiveSpan();
          const tmpResult10 = tmp(13059);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(13059).spanToTraceHeader(span);
          const tmpResult11 = tmp(13059);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(13066).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(13066);
        }
        const tmpResult13 = tmp(13090);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(13081);
        const result = tmp(13067).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13066).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(13054).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(13073);
    }
  }
  return {};
};
