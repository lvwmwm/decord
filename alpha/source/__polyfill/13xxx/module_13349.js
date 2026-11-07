// Module ID: 13349
// Function ID: 13350
// Dependencies: [13274, 13277, 13306, 13292, 13305, 13326, 13296, 13297, 13283, 13314, 13291, 13290, 13278]
// Exports: getTraceData

// Module 13349
import _mod13283 from "module_13283" /* 13283 */;
import _mod13290 from "module_13290" /* 13290 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13291 */;
import _mod13296 from "module_13296" /* 13296 */;
import _mod13297 from "module_13297" /* 13297 */;
import _mod13305 from "module_13305" /* 13305 */;
import _mod13314 from "module_13314" /* 13314 */;
import _mod13326 from "module_13326" /* 13326 */;
import registerSpanErrorInstrumentation from "module_13274" /* 13274 */;
import "module_13277";
import DEBUG_BUILD from "module_13306" /* 13306 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13292 */;


export function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod13305;
  const client = obj2.getClient();
  const obj3 = _mod13326;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod13296;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod13297;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod13305;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod13283;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod13283;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod13290;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod13314;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13290).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(13278).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
}
