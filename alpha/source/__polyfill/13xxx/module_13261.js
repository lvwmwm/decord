// Module ID: 13261
// Function ID: 13262
// Dependencies: [13186, 13189, 13218, 13204, 13217, 13238, 13208, 13209, 13195, 13226, 13203, 13202, 13190]
// Exports: getTraceData

// Module 13261
import _mod13195 from "module_13195" /* 13195 */;
import _mod13202 from "module_13202" /* 13202 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13203 */;
import _mod13208 from "module_13208" /* 13208 */;
import _mod13209 from "module_13209" /* 13209 */;
import _mod13217 from "module_13217" /* 13217 */;
import _mod13226 from "module_13226" /* 13226 */;
import _mod13238 from "module_13238" /* 13238 */;
import registerSpanErrorInstrumentation from "module_13186" /* 13186 */;
import "module_13189";
import DEBUG_BUILD from "module_13218" /* 13218 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13204 */;


export function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod13217;
  const client = obj2.getClient();
  const obj3 = _mod13238;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod13208;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod13209;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod13217;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod13195;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod13195;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod13202;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod13226;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13202).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(13190).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
}
