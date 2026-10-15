// Module ID: 12346
// Function ID: 12347
// Dependencies: [12271, 12274, 12303, 12289, 12302, 12323, 12293, 12294, 12280, 12311, 12288, 12287, 12275]
// Exports: getTraceData

// Module 12346
import _mod12280 from "module_12280" /* 12280 */;
import _mod12287 from "module_12287" /* 12287 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12288 */;
import _mod12293 from "module_12293" /* 12293 */;
import _mod12294 from "module_12294" /* 12294 */;
import _mod12302 from "module_12302" /* 12302 */;
import _mod12311 from "module_12311" /* 12311 */;
import _mod12323 from "module_12323" /* 12323 */;
import registerSpanErrorInstrumentation from "module_12271" /* 12271 */;
import "module_12274";
import DEBUG_BUILD from "module_12303" /* 12303 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12289 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12302;
  const client = obj2.getClient();
  const obj3 = _mod12323;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12293;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12294;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12302;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12280;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12280;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12287;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12311;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12287).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12275).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
