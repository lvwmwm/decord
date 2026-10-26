// Module ID: 12650
// Function ID: 12651
// Dependencies: [12575, 12578, 12607, 12593, 12606, 12627, 12597, 12598, 12584, 12615, 12592, 12591, 12579]
// Exports: getTraceData

// Module 12650
import _mod12584 from "module_12584" /* 12584 */;
import _mod12591 from "module_12591" /* 12591 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12592 */;
import _mod12597 from "module_12597" /* 12597 */;
import _mod12598 from "module_12598" /* 12598 */;
import _mod12606 from "module_12606" /* 12606 */;
import _mod12615 from "module_12615" /* 12615 */;
import _mod12627 from "module_12627" /* 12627 */;
import registerSpanErrorInstrumentation from "module_12575" /* 12575 */;
import "module_12578";
import DEBUG_BUILD from "module_12607" /* 12607 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12593 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12606;
  const client = obj2.getClient();
  const obj3 = _mod12627;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12597;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12598;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12606;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12584;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12584;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12591;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12615;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12591).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12579).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
