// Module ID: 9802
// Function ID: 9803
// Dependencies: [9727, 9730, 9759, 9745, 9758, 9779, 9749, 9750, 9736, 9767, 9744, 9743, 9731]
// Exports: getTraceData

// Module 9802
import _mod9736 from "module_9736" /* 9736 */;
import _mod9743 from "module_9743" /* 9743 */;
import _mod9744 from "module_9744" /* 9744 */;
import _mod9749 from "module_9749" /* 9749 */;
import _mod9750 from "module_9750" /* 9750 */;
import _mod9758 from "module_9758" /* 9758 */;
import _mod9767 from "module_9767" /* 9767 */;
import _mod9779 from "module_9779" /* 9779 */;
import registerSpanErrorInstrumentation from "module_9727" /* 9727 */;
import "module_9730";
import DEBUG_BUILD from "module_9759" /* 9759 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 9745 */;


export function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod9758;
  const client = obj2.getClient();
  const obj3 = _mod9779;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod9749;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod9750;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod9758;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod9736;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod9736;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod9743;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod9767;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = _mod9744;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(9743).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(9731).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
}
