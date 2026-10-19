// Module ID: 12457
// Function ID: 12458
// Dependencies: [12382, 12385, 12414, 12400, 12413, 12434, 12404, 12405, 12391, 12422, 12399, 12398, 12386]
// Exports: getTraceData

// Module 12457
import _mod12391 from "module_12391" /* 12391 */;
import _mod12398 from "module_12398" /* 12398 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12399 */;
import _mod12404 from "module_12404" /* 12404 */;
import _mod12405 from "module_12405" /* 12405 */;
import _mod12413 from "module_12413" /* 12413 */;
import _mod12422 from "module_12422" /* 12422 */;
import _mod12434 from "module_12434" /* 12434 */;
import registerSpanErrorInstrumentation from "module_12382" /* 12382 */;
import "module_12385";
import DEBUG_BUILD from "module_12414" /* 12414 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12400 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12413;
  const client = obj2.getClient();
  const obj3 = _mod12434;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12404;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12405;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12413;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12391;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12391;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12398;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12422;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12398).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12386).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
