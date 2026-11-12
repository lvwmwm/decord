// Module ID: 9801
// Function ID: 9802
// Dependencies: [9726, 9729, 9758, 9744, 9757, 9778, 9748, 9749, 9735, 9766, 9743, 9742, 9730]
// Exports: getTraceData

// Module 9801
import _mod9735 from "module_9735" /* 9735 */;
import _mod9742 from "module_9742" /* 9742 */;
import _mod9743 from "module_9743" /* 9743 */;
import _mod9748 from "module_9748" /* 9748 */;
import _mod9749 from "module_9749" /* 9749 */;
import _mod9757 from "module_9757" /* 9757 */;
import _mod9766 from "module_9766" /* 9766 */;
import _mod9778 from "module_9778" /* 9778 */;
import registerSpanErrorInstrumentation from "module_9726" /* 9726 */;
import "module_9729";
import DEBUG_BUILD from "module_9758" /* 9758 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 9744 */;


export function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod9757;
  const client = obj2.getClient();
  const obj3 = _mod9778;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod9748;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod9749;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod9757;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod9735;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod9735;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod9742;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod9766;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = _mod9743;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(9742).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(9730).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
}
