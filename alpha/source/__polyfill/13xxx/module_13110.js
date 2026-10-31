// Module ID: 13110
// Function ID: 13111
// Dependencies: [13035, 13038, 13067, 13053, 13066, 13087, 13057, 13058, 13044, 13075, 13052, 13051, 13039]
// Exports: getTraceData

// Module 13110
import _mod13044 from "module_13044" /* 13044 */;
import _mod13051 from "module_13051" /* 13051 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13052 */;
import _mod13057 from "module_13057" /* 13057 */;
import _mod13058 from "module_13058" /* 13058 */;
import _mod13066 from "module_13066" /* 13066 */;
import _mod13075 from "module_13075" /* 13075 */;
import _mod13087 from "module_13087" /* 13087 */;
import registerSpanErrorInstrumentation from "module_13035" /* 13035 */;
import "module_13038";
import DEBUG_BUILD from "module_13067" /* 13067 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13053 */;


export function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod13066;
  const client = obj2.getClient();
  const obj3 = _mod13087;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod13057;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod13058;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod13066;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod13044;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod13044;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod13051;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod13075;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13051).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(13039).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
}
