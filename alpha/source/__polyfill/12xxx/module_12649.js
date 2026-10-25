// Module ID: 12649
// Function ID: 12650
// Dependencies: [12574, 12577, 12606, 12592, 12605, 12626, 12596, 12597, 12583, 12614, 12591, 12590, 12578]
// Exports: getTraceData

// Module 12649
import _mod12583 from "module_12583" /* 12583 */;
import _mod12590 from "module_12590" /* 12590 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12591 */;
import _mod12596 from "module_12596" /* 12596 */;
import _mod12597 from "module_12597" /* 12597 */;
import _mod12605 from "module_12605" /* 12605 */;
import _mod12614 from "module_12614" /* 12614 */;
import _mod12626 from "module_12626" /* 12626 */;
import registerSpanErrorInstrumentation from "module_12574" /* 12574 */;
import "module_12577";
import DEBUG_BUILD from "module_12606" /* 12606 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12592 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12605;
  const client = obj2.getClient();
  const obj3 = _mod12626;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12596;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12597;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12605;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12583;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12583;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12590;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12614;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12590).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12578).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
