// Module ID: 12077
// Function ID: 12078
// Dependencies: [12002, 12005, 12034, 12020, 12033, 12054, 12024, 12025, 12011, 12042, 12019, 12018, 12006]
// Exports: getTraceData

// Module 12077
import _mod12011 from "module_12011" /* 12011 */;
import _mod12018 from "module_12018" /* 12018 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12019 */;
import _mod12024 from "module_12024" /* 12024 */;
import _mod12025 from "module_12025" /* 12025 */;
import _mod12033 from "module_12033" /* 12033 */;
import _mod12042 from "module_12042" /* 12042 */;
import _mod12054 from "module_12054" /* 12054 */;
import registerSpanErrorInstrumentation from "module_12002" /* 12002 */;
import "module_12005";
import DEBUG_BUILD from "module_12034" /* 12034 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12020 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12033;
  const client = obj2.getClient();
  const obj3 = _mod12054;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12024;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12025;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12033;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12011;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12011;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12018;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12042;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12018).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12006).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
