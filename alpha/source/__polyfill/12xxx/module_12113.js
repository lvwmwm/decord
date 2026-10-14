// Module ID: 12113
// Function ID: 12114
// Dependencies: [12038, 12041, 12070, 12056, 12069, 12090, 12060, 12061, 12047, 12078, 12055, 12054, 12042]
// Exports: getTraceData

// Module 12113
import _mod12047 from "module_12047" /* 12047 */;
import _mod12054 from "module_12054" /* 12054 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12055 */;
import _mod12060 from "module_12060" /* 12060 */;
import _mod12061 from "module_12061" /* 12061 */;
import _mod12069 from "module_12069" /* 12069 */;
import _mod12078 from "module_12078" /* 12078 */;
import _mod12090 from "module_12090" /* 12090 */;
import registerSpanErrorInstrumentation from "module_12038" /* 12038 */;
import "module_12041";
import DEBUG_BUILD from "module_12070" /* 12070 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12056 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12069;
  const client = obj2.getClient();
  const obj3 = _mod12090;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12060;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12061;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12069;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12047;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12047;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12054;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12078;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12054).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12042).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
