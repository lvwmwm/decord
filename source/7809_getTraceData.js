// Module ID: 7809
// Function ID: 7810
// Name: getTraceData
// Dependencies: [7734, 7737, 7766, 7752, 7765, 7786, 7756, 7757, 7743, 7774, 7751, 7750, 7738]
// Exports: getTraceData

// Module 7809 (getTraceData)
import "errorCallback";
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__";
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__";
import dateTimestampInSeconds from "dateTimestampInSeconds";


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = require(7765) /* getClient */.getClient();
  const obj2 = require(7765) /* getClient */;
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = tmp(7756);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(7757);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(7765).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(7743).getActiveSpan();
          const tmpResult2 = tmp(7743);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(7743).spanToTraceHeader(span);
          const tmpResult3 = tmp(7743);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(7750).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(7750);
        }
        const tmpResult5 = tmp(7774);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(7765);
        const result = tmp(7751).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(7750).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(7738).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};
