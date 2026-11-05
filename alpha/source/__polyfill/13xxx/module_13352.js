// Module ID: 13352
// Function ID: 13353
// Dependencies: [13277, 13280, 13309, 13295, 13308, 13329, 13299, 13300, 13286, 13317, 13294, 13293, 13281]
// Exports: getTraceData

// Module 13352
import _mod13286 from "module_13286" /* 13286 */;
import _mod13293 from "module_13293" /* 13293 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13294 */;
import _mod13299 from "module_13299" /* 13299 */;
import _mod13300 from "module_13300" /* 13300 */;
import _mod13308 from "module_13308" /* 13308 */;
import _mod13317 from "module_13317" /* 13317 */;
import _mod13329 from "module_13329" /* 13329 */;
import registerSpanErrorInstrumentation from "module_13277" /* 13277 */;
import "module_13280";
import DEBUG_BUILD from "module_13309" /* 13309 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13295 */;


export function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod13308;
  const client = obj2.getClient();
  const obj3 = _mod13329;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod13299;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod13300;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod13308;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod13286;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod13286;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod13293;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod13317;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13293).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(13281).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
}
