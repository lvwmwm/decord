// Module ID: 12494
// Function ID: 12495
// Dependencies: [12419, 12422, 12451, 12437, 12450, 12471, 12441, 12442, 12428, 12459, 12436, 12435, 12423]
// Exports: getTraceData

// Module 12494
import _mod12428 from "module_12428" /* 12428 */;
import _mod12435 from "module_12435" /* 12435 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12436 */;
import _mod12441 from "module_12441" /* 12441 */;
import _mod12442 from "module_12442" /* 12442 */;
import _mod12450 from "module_12450" /* 12450 */;
import _mod12459 from "module_12459" /* 12459 */;
import _mod12471 from "module_12471" /* 12471 */;
import registerSpanErrorInstrumentation from "module_12419" /* 12419 */;
import "module_12422";
import DEBUG_BUILD from "module_12451" /* 12451 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12437 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12450;
  const client = obj2.getClient();
  const obj3 = _mod12471;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12441;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12442;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12450;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12428;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12428;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12435;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12459;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12435).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12423).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
