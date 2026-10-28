// Module ID: 12707
// Function ID: 12708
// Dependencies: [12632, 12635, 12664, 12650, 12663, 12684, 12654, 12655, 12641, 12672, 12649, 12648, 12636]
// Exports: getTraceData

// Module 12707
import _mod12641 from "module_12641" /* 12641 */;
import _mod12648 from "module_12648" /* 12648 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12649 */;
import _mod12654 from "module_12654" /* 12654 */;
import _mod12655 from "module_12655" /* 12655 */;
import _mod12663 from "module_12663" /* 12663 */;
import _mod12672 from "module_12672" /* 12672 */;
import _mod12684 from "module_12684" /* 12684 */;
import registerSpanErrorInstrumentation from "module_12632" /* 12632 */;
import "module_12635";
import DEBUG_BUILD from "module_12664" /* 12664 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12650 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12663;
  const client = obj2.getClient();
  const obj3 = _mod12684;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12654;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12655;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12663;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12641;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12641;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12648;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12672;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12648).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12636).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
