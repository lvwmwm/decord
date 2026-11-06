// Module ID: 13326
// Function ID: 13327
// Dependencies: [13251, 13254, 13283, 13269, 13282, 13303, 13273, 13274, 13260, 13291, 13268, 13267, 13255]
// Exports: getTraceData

// Module 13326
import _mod13260 from "module_13260" /* 13260 */;
import _mod13267 from "module_13267" /* 13267 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13268 */;
import _mod13273 from "module_13273" /* 13273 */;
import _mod13274 from "module_13274" /* 13274 */;
import _mod13282 from "module_13282" /* 13282 */;
import _mod13291 from "module_13291" /* 13291 */;
import _mod13303 from "module_13303" /* 13303 */;
import registerSpanErrorInstrumentation from "module_13251" /* 13251 */;
import "module_13254";
import DEBUG_BUILD from "module_13283" /* 13283 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13269 */;


export function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod13282;
  const client = obj2.getClient();
  const obj3 = _mod13303;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod13273;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod13274;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod13282;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod13260;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod13260;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod13267;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod13291;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13267).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(13255).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
}
