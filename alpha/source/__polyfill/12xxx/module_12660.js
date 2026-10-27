// Module ID: 12660
// Function ID: 12661
// Dependencies: [12585, 12588, 12617, 12603, 12616, 12637, 12607, 12608, 12594, 12625, 12602, 12601, 12589]
// Exports: getTraceData

// Module 12660
import _mod12594 from "module_12594" /* 12594 */;
import _mod12601 from "module_12601" /* 12601 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12602 */;
import _mod12607 from "module_12607" /* 12607 */;
import _mod12608 from "module_12608" /* 12608 */;
import _mod12616 from "module_12616" /* 12616 */;
import _mod12625 from "module_12625" /* 12625 */;
import _mod12637 from "module_12637" /* 12637 */;
import registerSpanErrorInstrumentation from "module_12585" /* 12585 */;
import "module_12588";
import DEBUG_BUILD from "module_12617" /* 12617 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12603 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12616;
  const client = obj2.getClient();
  const obj3 = _mod12637;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12607;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12608;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12616;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12594;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12594;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12601;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12625;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12601).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12589).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
