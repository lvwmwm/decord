// Module ID: 12375
// Function ID: 12376
// Dependencies: [12300, 12303, 12332, 12318, 12331, 12352, 12322, 12323, 12309, 12340, 12317, 12316, 12304]
// Exports: getTraceData

// Module 12375
import _mod12309 from "module_12309" /* 12309 */;
import _mod12316 from "module_12316" /* 12316 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12317 */;
import _mod12322 from "module_12322" /* 12322 */;
import _mod12323 from "module_12323" /* 12323 */;
import _mod12331 from "module_12331" /* 12331 */;
import _mod12340 from "module_12340" /* 12340 */;
import _mod12352 from "module_12352" /* 12352 */;
import registerSpanErrorInstrumentation from "module_12300" /* 12300 */;
import "module_12303";
import DEBUG_BUILD from "module_12332" /* 12332 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12318 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12331;
  const client = obj2.getClient();
  const obj3 = _mod12352;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12322;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12323;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12331;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12309;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12309;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12316;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12340;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12316).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12304).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
