// Module ID: 12591
// Function ID: 12592
// Dependencies: [12516, 12519, 12548, 12534, 12547, 12568, 12538, 12539, 12525, 12556, 12533, 12532, 12520]
// Exports: getTraceData

// Module 12591
import _mod12525 from "module_12525" /* 12525 */;
import _mod12532 from "module_12532" /* 12532 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12533 */;
import _mod12538 from "module_12538" /* 12538 */;
import _mod12539 from "module_12539" /* 12539 */;
import _mod12547 from "module_12547" /* 12547 */;
import _mod12556 from "module_12556" /* 12556 */;
import _mod12568 from "module_12568" /* 12568 */;
import registerSpanErrorInstrumentation from "module_12516" /* 12516 */;
import "module_12519";
import DEBUG_BUILD from "module_12548" /* 12548 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12534 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12547;
  const client = obj2.getClient();
  const obj3 = _mod12568;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12538;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12539;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12547;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12525;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12525;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12532;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12556;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12532).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12520).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
