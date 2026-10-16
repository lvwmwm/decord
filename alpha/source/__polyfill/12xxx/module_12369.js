// Module ID: 12369
// Function ID: 12370
// Dependencies: [12294, 12297, 12326, 12312, 12325, 12346, 12316, 12317, 12303, 12334, 12311, 12310, 12298]
// Exports: getTraceData

// Module 12369
import _mod12303 from "module_12303" /* 12303 */;
import _mod12310 from "module_12310" /* 12310 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12311 */;
import _mod12316 from "module_12316" /* 12316 */;
import _mod12317 from "module_12317" /* 12317 */;
import _mod12325 from "module_12325" /* 12325 */;
import _mod12334 from "module_12334" /* 12334 */;
import _mod12346 from "module_12346" /* 12346 */;
import registerSpanErrorInstrumentation from "module_12294" /* 12294 */;
import "module_12297";
import DEBUG_BUILD from "module_12326" /* 12326 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12312 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12325;
  const client = obj2.getClient();
  const obj3 = _mod12346;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12316;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12317;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12325;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12303;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12303;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12310;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12334;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12310).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12298).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
