// Module ID: 12644
// Function ID: 12645
// Dependencies: [12569, 12572, 12601, 12587, 12600, 12621, 12591, 12592, 12578, 12609, 12586, 12585, 12573]
// Exports: getTraceData

// Module 12644
import _mod12578 from "module_12578" /* 12578 */;
import _mod12585 from "module_12585" /* 12585 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12586 */;
import _mod12591 from "module_12591" /* 12591 */;
import _mod12592 from "module_12592" /* 12592 */;
import _mod12600 from "module_12600" /* 12600 */;
import _mod12609 from "module_12609" /* 12609 */;
import _mod12621 from "module_12621" /* 12621 */;
import registerSpanErrorInstrumentation from "module_12569" /* 12569 */;
import "module_12572";
import DEBUG_BUILD from "module_12601" /* 12601 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12587 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12600;
  const client = obj2.getClient();
  const obj3 = _mod12621;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12591;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12592;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12600;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12578;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12578;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12585;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12609;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12585).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12573).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
