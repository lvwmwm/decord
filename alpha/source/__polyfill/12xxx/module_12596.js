// Module ID: 12596
// Function ID: 12597
// Dependencies: [12521, 12524, 12553, 12539, 12552, 12573, 12543, 12544, 12530, 12561, 12538, 12537, 12525]
// Exports: getTraceData

// Module 12596
import errorCallback from "errorCallback" /* 12521 */;
import _mod12552 from "module_12552" /* 12552 */;
import "module_12524";
import __SENTRY_DEBUG__ from "module_12553" /* 12553 */;
import dateTimestampInSeconds from "module_12539" /* 12539 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12552.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(12543).getMainCarrier();
      const tmpResult = tmp(12543);
      const asyncContextStrategy = tmp(12544).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12552).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12530).getActiveSpan();
          const tmpResult10 = tmp(12530);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12530).spanToTraceHeader(span);
          const tmpResult11 = tmp(12530);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12537).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(12537);
        }
        const tmpResult13 = tmp(12561);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(12552);
        const result = tmp(12538).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12537).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(12525).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(12544);
    }
  }
  return {};
};
