// Module ID: 11238
// Function ID: 11239
// Dependencies: [11163, 11166, 11195, 11181, 11194, 11215, 11185, 11186, 11172, 11203, 11180, 11179, 11167]
// Exports: getTraceData

// Module 11238
import _mod11172 from "module_11172" /* 11172 */;
import _mod11179 from "module_11179" /* 11179 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 11180 */;
import _mod11185 from "module_11185" /* 11185 */;
import _mod11186 from "module_11186" /* 11186 */;
import _mod11194 from "module_11194" /* 11194 */;
import _mod11203 from "module_11203" /* 11203 */;
import _mod11215 from "module_11215" /* 11215 */;
import registerSpanErrorInstrumentation from "module_11163" /* 11163 */;
import "module_11166";
import DEBUG_BUILD from "module_11195" /* 11195 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 11181 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod11194;
  const client = obj2.getClient();
  const obj3 = _mod11215;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod11185;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod11186;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod11194;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod11172;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod11172;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod11179;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod11203;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(11179).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(11167).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
