// Module ID: 13075
// Function ID: 13076
// Dependencies: [13000, 13003, 13032, 13018, 13031, 13052, 13022, 13023, 13009, 13040, 13017, 13016, 13004]
// Exports: getTraceData

// Module 13075
import _mod13009 from "module_13009" /* 13009 */;
import _mod13016 from "module_13016" /* 13016 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13017 */;
import _mod13022 from "module_13022" /* 13022 */;
import _mod13023 from "module_13023" /* 13023 */;
import _mod13031 from "module_13031" /* 13031 */;
import _mod13040 from "module_13040" /* 13040 */;
import _mod13052 from "module_13052" /* 13052 */;
import registerSpanErrorInstrumentation from "module_13000" /* 13000 */;
import "module_13003";
import DEBUG_BUILD from "module_13032" /* 13032 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13018 */;


export function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod13031;
  const client = obj2.getClient();
  const obj3 = _mod13052;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod13022;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod13023;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod13031;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod13009;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod13009;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod13016;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod13040;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13016).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(13004).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
}
