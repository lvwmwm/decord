// Module ID: 13344
// Function ID: 13345
// Dependencies: [13269, 13272, 13301, 13287, 13300, 13321, 13291, 13292, 13278, 13309, 13286, 13285, 13273]
// Exports: getTraceData

// Module 13344
import _mod13278 from "module_13278" /* 13278 */;
import _mod13285 from "module_13285" /* 13285 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13286 */;
import _mod13291 from "module_13291" /* 13291 */;
import _mod13292 from "module_13292" /* 13292 */;
import _mod13300 from "module_13300" /* 13300 */;
import _mod13309 from "module_13309" /* 13309 */;
import _mod13321 from "module_13321" /* 13321 */;
import registerSpanErrorInstrumentation from "module_13269" /* 13269 */;
import "module_13272";
import DEBUG_BUILD from "module_13301" /* 13301 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13287 */;


export function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod13300;
  const client = obj2.getClient();
  const obj3 = _mod13321;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod13291;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod13292;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod13300;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod13278;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod13278;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod13285;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod13309;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13285).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(13273).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
}
