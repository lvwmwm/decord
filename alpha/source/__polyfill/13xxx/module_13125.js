// Module ID: 13125
// Function ID: 13126
// Dependencies: [13050, 13053, 13082, 13068, 13081, 13102, 13072, 13073, 13059, 13090, 13067, 13066, 13054]
// Exports: getTraceData

// Module 13125
import _mod13059 from "module_13059" /* 13059 */;
import _mod13066 from "module_13066" /* 13066 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13067 */;
import _mod13072 from "module_13072" /* 13072 */;
import _mod13073 from "module_13073" /* 13073 */;
import _mod13081 from "module_13081" /* 13081 */;
import _mod13090 from "module_13090" /* 13090 */;
import _mod13102 from "module_13102" /* 13102 */;
import registerSpanErrorInstrumentation from "module_13050" /* 13050 */;
import "module_13053";
import DEBUG_BUILD from "module_13082" /* 13082 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13068 */;


export function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod13081;
  const client = obj2.getClient();
  const obj3 = _mod13102;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod13072;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod13073;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod13081;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod13059;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod13059;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod13066;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod13090;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13066).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(13054).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
}
