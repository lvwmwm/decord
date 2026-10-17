// Module ID: 12440
// Function ID: 12441
// Dependencies: [12365, 12368, 12397, 12383, 12396, 12417, 12387, 12388, 12374, 12405, 12382, 12381, 12369]
// Exports: getTraceData

// Module 12440
import _mod12374 from "module_12374" /* 12374 */;
import _mod12381 from "module_12381" /* 12381 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12382 */;
import _mod12387 from "module_12387" /* 12387 */;
import _mod12388 from "module_12388" /* 12388 */;
import _mod12396 from "module_12396" /* 12396 */;
import _mod12405 from "module_12405" /* 12405 */;
import _mod12417 from "module_12417" /* 12417 */;
import registerSpanErrorInstrumentation from "module_12365" /* 12365 */;
import "module_12368";
import DEBUG_BUILD from "module_12397" /* 12397 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12383 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12396;
  const client = obj2.getClient();
  const obj3 = _mod12417;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12387;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12388;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12396;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12374;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12374;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12381;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12405;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12381).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12369).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
