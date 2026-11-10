// Module ID: 13363
// Function ID: 13364
// Dependencies: [13288, 13291, 13320, 13306, 13319, 13340, 13310, 13311, 13297, 13328, 13305, 13304, 13292]
// Exports: getTraceData

// Module 13363
import _mod13297 from "module_13297" /* 13297 */;
import _mod13304 from "module_13304" /* 13304 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13305 */;
import _mod13310 from "module_13310" /* 13310 */;
import _mod13311 from "module_13311" /* 13311 */;
import _mod13319 from "module_13319" /* 13319 */;
import _mod13328 from "module_13328" /* 13328 */;
import _mod13340 from "module_13340" /* 13340 */;
import registerSpanErrorInstrumentation from "module_13288" /* 13288 */;
import "module_13291";
import DEBUG_BUILD from "module_13320" /* 13320 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13306 */;


export function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod13319;
  const client = obj2.getClient();
  const obj3 = _mod13340;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod13310;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod13311;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod13319;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod13297;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod13297;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod13304;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod13328;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13304).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(13292).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
}
