// Module ID: 12652
// Function ID: 12653
// Dependencies: [12577, 12580, 12609, 12595, 12608, 12629, 12599, 12600, 12586, 12617, 12594, 12593, 12581]
// Exports: getTraceData

// Module 12652
import _mod12586 from "module_12586" /* 12586 */;
import _mod12593 from "module_12593" /* 12593 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12594 */;
import _mod12599 from "module_12599" /* 12599 */;
import _mod12600 from "module_12600" /* 12600 */;
import _mod12608 from "module_12608" /* 12608 */;
import _mod12617 from "module_12617" /* 12617 */;
import _mod12629 from "module_12629" /* 12629 */;
import registerSpanErrorInstrumentation from "module_12577" /* 12577 */;
import "module_12580";
import DEBUG_BUILD from "module_12609" /* 12609 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12595 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12608;
  const client = obj2.getClient();
  const obj3 = _mod12629;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12599;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12600;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12608;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12586;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12586;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12593;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12617;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12593).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12581).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
