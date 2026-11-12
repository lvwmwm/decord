// Module ID: 13381
// Function ID: 13382
// Dependencies: [13306, 13309, 13338, 13324, 13337, 13358, 13328, 13329, 13315, 13346, 13323, 13322, 13310]
// Exports: getTraceData

// Module 13381
import _mod13315 from "module_13315" /* 13315 */;
import _mod13322 from "module_13322" /* 13322 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13323 */;
import _mod13328 from "module_13328" /* 13328 */;
import _mod13329 from "module_13329" /* 13329 */;
import _mod13337 from "module_13337" /* 13337 */;
import _mod13346 from "module_13346" /* 13346 */;
import _mod13358 from "module_13358" /* 13358 */;
import registerSpanErrorInstrumentation from "module_13306" /* 13306 */;
import "module_13309";
import DEBUG_BUILD from "module_13338" /* 13338 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13324 */;


export function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod13337;
  const client = obj2.getClient();
  const obj3 = _mod13358;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod13328;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod13329;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod13337;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod13315;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod13315;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod13322;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod13346;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13322).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(13310).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
}
