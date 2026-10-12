// Module ID: 11279
// Function ID: 11280
// Dependencies: [11204, 11207, 11236, 11222, 11235, 11256, 11226, 11227, 11213, 11244, 11221, 11220, 11208]
// Exports: getTraceData

// Module 11279
import _mod11213 from "module_11213" /* 11213 */;
import _mod11220 from "module_11220" /* 11220 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 11221 */;
import _mod11226 from "module_11226" /* 11226 */;
import _mod11227 from "module_11227" /* 11227 */;
import _mod11235 from "module_11235" /* 11235 */;
import _mod11244 from "module_11244" /* 11244 */;
import _mod11256 from "module_11256" /* 11256 */;
import registerSpanErrorInstrumentation from "module_11204" /* 11204 */;
import "module_11207";
import DEBUG_BUILD from "module_11236" /* 11236 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 11222 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod11235;
  const client = obj2.getClient();
  const obj3 = _mod11256;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod11226;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod11227;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod11235;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod11213;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod11213;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod11220;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod11244;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(11220).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(11208).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
