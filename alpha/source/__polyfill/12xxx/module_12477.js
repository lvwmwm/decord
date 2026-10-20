// Module ID: 12477
// Function ID: 12478
// Dependencies: [12402, 12405, 12434, 12420, 12433, 12454, 12424, 12425, 12411, 12442, 12419, 12418, 12406]
// Exports: getTraceData

// Module 12477
import _mod12411 from "module_12411" /* 12411 */;
import _mod12418 from "module_12418" /* 12418 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12419 */;
import _mod12424 from "module_12424" /* 12424 */;
import _mod12425 from "module_12425" /* 12425 */;
import _mod12433 from "module_12433" /* 12433 */;
import _mod12442 from "module_12442" /* 12442 */;
import _mod12454 from "module_12454" /* 12454 */;
import registerSpanErrorInstrumentation from "module_12402" /* 12402 */;
import "module_12405";
import DEBUG_BUILD from "module_12434" /* 12434 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12420 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12433;
  const client = obj2.getClient();
  const obj3 = _mod12454;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12424;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12425;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12433;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12411;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12411;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12418;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12442;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12418).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12406).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
