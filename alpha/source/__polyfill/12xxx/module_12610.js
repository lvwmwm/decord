// Module ID: 12610
// Function ID: 12611
// Dependencies: [12535, 12538, 12567, 12553, 12566, 12587, 12557, 12558, 12544, 12575, 12552, 12551, 12539]
// Exports: getTraceData

// Module 12610
import _mod12544 from "module_12544" /* 12544 */;
import _mod12551 from "module_12551" /* 12551 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12552 */;
import _mod12557 from "module_12557" /* 12557 */;
import _mod12558 from "module_12558" /* 12558 */;
import _mod12566 from "module_12566" /* 12566 */;
import _mod12575 from "module_12575" /* 12575 */;
import _mod12587 from "module_12587" /* 12587 */;
import registerSpanErrorInstrumentation from "module_12535" /* 12535 */;
import "module_12538";
import DEBUG_BUILD from "module_12567" /* 12567 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12553 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12566;
  const client = obj2.getClient();
  const obj3 = _mod12587;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12557;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12558;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12566;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12544;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12544;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12551;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12575;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12551).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12539).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
