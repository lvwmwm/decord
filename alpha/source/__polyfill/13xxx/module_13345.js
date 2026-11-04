// Module ID: 13345
// Function ID: 13346
// Dependencies: [13270, 13273, 13302, 13288, 13301, 13322, 13292, 13293, 13279, 13310, 13287, 13286, 13274]
// Exports: getTraceData

// Module 13345
import _mod13279 from "module_13279" /* 13279 */;
import _mod13286 from "module_13286" /* 13286 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13287 */;
import _mod13292 from "module_13292" /* 13292 */;
import _mod13293 from "module_13293" /* 13293 */;
import _mod13301 from "module_13301" /* 13301 */;
import _mod13310 from "module_13310" /* 13310 */;
import _mod13322 from "module_13322" /* 13322 */;
import registerSpanErrorInstrumentation from "module_13270" /* 13270 */;
import "module_13273";
import DEBUG_BUILD from "module_13302" /* 13302 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13288 */;


export function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod13301;
  const client = obj2.getClient();
  const obj3 = _mod13322;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod13292;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod13293;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod13301;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod13279;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod13279;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod13286;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod13310;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13286).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(13274).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
}
