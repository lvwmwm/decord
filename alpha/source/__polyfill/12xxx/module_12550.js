// Module ID: 12550
// Function ID: 12551
// Dependencies: [12475, 12478, 12507, 12493, 12506, 12527, 12497, 12498, 12484, 12515, 12492, 12491, 12479]
// Exports: getTraceData

// Module 12550
import _mod12484 from "module_12484" /* 12484 */;
import _mod12491 from "module_12491" /* 12491 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12492 */;
import _mod12497 from "module_12497" /* 12497 */;
import _mod12498 from "module_12498" /* 12498 */;
import _mod12506 from "module_12506" /* 12506 */;
import _mod12515 from "module_12515" /* 12515 */;
import _mod12527 from "module_12527" /* 12527 */;
import registerSpanErrorInstrumentation from "module_12475" /* 12475 */;
import "module_12478";
import DEBUG_BUILD from "module_12507" /* 12507 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12493 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12506;
  const client = obj2.getClient();
  const obj3 = _mod12527;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12497;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12498;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12506;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12484;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12484;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12491;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12515;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12491).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12479).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
