// Module ID: 11064
// Function ID: 11065
// Dependencies: [10989, 10992, 11021, 11007, 11020, 11041, 11011, 11012, 10998, 11029, 11006, 11005, 10993]
// Exports: getTraceData

// Module 11064
import _mod10998 from "module_10998" /* 10998 */;
import _mod11005 from "module_11005" /* 11005 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 11006 */;
import _mod11011 from "module_11011" /* 11011 */;
import _mod11012 from "module_11012" /* 11012 */;
import _mod11020 from "module_11020" /* 11020 */;
import _mod11029 from "module_11029" /* 11029 */;
import _mod11041 from "module_11041" /* 11041 */;
import registerSpanErrorInstrumentation from "module_10989" /* 10989 */;
import "module_10992";
import DEBUG_BUILD from "module_11021" /* 11021 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 11007 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod11020;
  const client = obj2.getClient();
  const obj3 = _mod11041;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod11011;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod11012;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod11020;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod10998;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod10998;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod11005;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod11029;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(11005).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(10993).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
