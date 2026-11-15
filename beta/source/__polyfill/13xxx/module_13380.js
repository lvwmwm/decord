// Module ID: 13380
// Function ID: 13381
// Dependencies: [13305, 13308, 13337, 13323, 13336, 13357, 13327, 13328, 13314, 13345, 13322, 13321, 13309]
// Exports: getTraceData

// Module 13380
import _mod13314 from "module_13314" /* 13314 */;
import _mod13321 from "module_13321" /* 13321 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13322 */;
import _mod13327 from "module_13327" /* 13327 */;
import _mod13328 from "module_13328" /* 13328 */;
import _mod13336 from "module_13336" /* 13336 */;
import _mod13345 from "module_13345" /* 13345 */;
import _mod13357 from "module_13357" /* 13357 */;
import registerSpanErrorInstrumentation from "module_13305" /* 13305 */;
import "module_13308";
import DEBUG_BUILD from "module_13337" /* 13337 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13323 */;


export function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod13336;
  const client = obj2.getClient();
  const obj3 = _mod13357;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod13327;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod13328;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod13336;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod13314;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod13314;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod13321;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod13345;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13321).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(13309).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
}
