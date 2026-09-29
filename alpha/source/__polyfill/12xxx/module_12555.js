// Module ID: 12555
// Function ID: 12556
// Dependencies: [12480, 12483, 12512, 12498, 12511, 12532, 12502, 12503, 12489, 12520, 12497, 12496, 12484]
// Exports: getTraceData

// Module 12555
import errorCallback from "errorCallback" /* 12480 */;
import _mod12511 from "module_12511" /* 12511 */;
import "module_12483";
import __SENTRY_DEBUG__ from "module_12512" /* 12512 */;
import dateTimestampInSeconds from "module_12498" /* 12498 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12511.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(12502).getMainCarrier();
      const tmpResult = tmp(12502);
      const asyncContextStrategy = tmp(12503).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12511).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12489).getActiveSpan();
          const tmpResult10 = tmp(12489);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12489).spanToTraceHeader(span);
          const tmpResult11 = tmp(12489);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12496).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(12496);
        }
        const tmpResult13 = tmp(12520);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(12511);
        const result = tmp(12497).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12496).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(12484).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(12503);
    }
  }
  return {};
};
