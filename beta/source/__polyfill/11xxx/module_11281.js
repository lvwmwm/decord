// Module ID: 11281
// Function ID: 11282
// Dependencies: [11206, 11209, 11238, 11224, 11237, 11258, 11228, 11229, 11215, 11246, 11223, 11222, 11210]
// Exports: getTraceData

// Module 11281
import _mod11215 from "module_11215" /* 11215 */;
import _mod11222 from "module_11222" /* 11222 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 11223 */;
import _mod11228 from "module_11228" /* 11228 */;
import _mod11229 from "module_11229" /* 11229 */;
import _mod11237 from "module_11237" /* 11237 */;
import _mod11246 from "module_11246" /* 11246 */;
import _mod11258 from "module_11258" /* 11258 */;
import registerSpanErrorInstrumentation from "module_11206" /* 11206 */;
import "module_11209";
import DEBUG_BUILD from "module_11238" /* 11238 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 11224 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod11237;
  const client = obj2.getClient();
  const obj3 = _mod11258;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod11228;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod11229;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod11237;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod11215;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod11215;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod11222;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod11246;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(11222).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(11210).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
