// Module ID: 12924
// Function ID: 12925
// Dependencies: [12849, 12852, 12881, 12867, 12880, 12901, 12871, 12872, 12858, 12889, 12866, 12865, 12853]
// Exports: getTraceData

// Module 12924
import _mod12858 from "module_12858" /* 12858 */;
import _mod12865 from "module_12865" /* 12865 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12866 */;
import _mod12871 from "module_12871" /* 12871 */;
import _mod12872 from "module_12872" /* 12872 */;
import _mod12880 from "module_12880" /* 12880 */;
import _mod12889 from "module_12889" /* 12889 */;
import _mod12901 from "module_12901" /* 12901 */;
import registerSpanErrorInstrumentation from "module_12849" /* 12849 */;
import "module_12852";
import DEBUG_BUILD from "module_12881" /* 12881 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12867 */;


export function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12880;
  const client = obj2.getClient();
  const obj3 = _mod12901;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12871;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12872;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12880;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12858;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12858;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12865;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12889;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12865).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12853).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
}
