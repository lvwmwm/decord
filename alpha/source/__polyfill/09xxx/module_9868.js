// Module ID: 9868
// Function ID: 9869
// Dependencies: [9793, 9796, 9825, 9811, 9824, 9845, 9815, 9816, 9802, 9833, 9810, 9809, 9797]
// Exports: getTraceData

// Module 9868
import _mod9802 from "module_9802" /* 9802 */;
import _mod9809 from "module_9809" /* 9809 */;
import _mod9810 from "module_9810" /* 9810 */;
import _mod9815 from "module_9815" /* 9815 */;
import _mod9816 from "module_9816" /* 9816 */;
import _mod9824 from "module_9824" /* 9824 */;
import _mod9833 from "module_9833" /* 9833 */;
import _mod9845 from "module_9845" /* 9845 */;
import registerSpanErrorInstrumentation from "module_9793" /* 9793 */;
import "module_9796";
import DEBUG_BUILD from "module_9825" /* 9825 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 9811 */;


export function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod9824;
  const client = obj2.getClient();
  const obj3 = _mod9845;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod9815;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod9816;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod9824;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod9802;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod9802;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod9809;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod9833;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = _mod9810;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(9809).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(9797).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
}
