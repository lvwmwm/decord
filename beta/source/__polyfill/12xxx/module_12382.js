// Module ID: 12382
// Function ID: 12383
// Dependencies: [12307, 12310, 12339, 12325, 12338, 12359, 12329, 12330, 12316, 12347, 12324, 12323, 12311]
// Exports: getTraceData

// Module 12382
import _mod12316 from "module_12316" /* 12316 */;
import _mod12323 from "module_12323" /* 12323 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12324 */;
import _mod12329 from "module_12329" /* 12329 */;
import _mod12330 from "module_12330" /* 12330 */;
import _mod12338 from "module_12338" /* 12338 */;
import _mod12347 from "module_12347" /* 12347 */;
import _mod12359 from "module_12359" /* 12359 */;
import registerSpanErrorInstrumentation from "module_12307" /* 12307 */;
import "module_12310";
import DEBUG_BUILD from "module_12339" /* 12339 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12325 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12338;
  const client = obj2.getClient();
  const obj3 = _mod12359;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12329;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12330;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12338;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12316;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12316;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12323;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12347;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12323).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12311).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
