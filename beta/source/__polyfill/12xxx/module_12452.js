// Module ID: 12452
// Function ID: 12453
// Dependencies: [12377, 12380, 12409, 12395, 12408, 12429, 12399, 12400, 12386, 12417, 12394, 12393, 12381]
// Exports: getTraceData

// Module 12452
import _mod12386 from "module_12386" /* 12386 */;
import _mod12393 from "module_12393" /* 12393 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12394 */;
import _mod12399 from "module_12399" /* 12399 */;
import _mod12400 from "module_12400" /* 12400 */;
import _mod12408 from "module_12408" /* 12408 */;
import _mod12417 from "module_12417" /* 12417 */;
import _mod12429 from "module_12429" /* 12429 */;
import registerSpanErrorInstrumentation from "module_12377" /* 12377 */;
import "module_12380";
import DEBUG_BUILD from "module_12409" /* 12409 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12395 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12408;
  const client = obj2.getClient();
  const obj3 = _mod12429;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12399;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12400;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12408;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12386;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12386;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12393;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12417;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12393).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12381).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
