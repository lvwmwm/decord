// Module ID: 12682
// Function ID: 12683
// Dependencies: [12607, 12610, 12639, 12625, 12638, 12659, 12629, 12630, 12616, 12647, 12624, 12623, 12611]
// Exports: getTraceData

// Module 12682
import _mod12616 from "module_12616" /* 12616 */;
import _mod12623 from "module_12623" /* 12623 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12624 */;
import _mod12629 from "module_12629" /* 12629 */;
import _mod12630 from "module_12630" /* 12630 */;
import _mod12638 from "module_12638" /* 12638 */;
import _mod12647 from "module_12647" /* 12647 */;
import _mod12659 from "module_12659" /* 12659 */;
import registerSpanErrorInstrumentation from "module_12607" /* 12607 */;
import "module_12610";
import DEBUG_BUILD from "module_12639" /* 12639 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12625 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12638;
  const client = obj2.getClient();
  const obj3 = _mod12659;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12629;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12630;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12638;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12616;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12616;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12623;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12647;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12623).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12611).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
