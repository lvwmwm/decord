// Module ID: 12384
// Function ID: 12385
// Dependencies: [12309, 12312, 12341, 12327, 12340, 12361, 12331, 12332, 12318, 12349, 12326, 12325, 12313]
// Exports: getTraceData

// Module 12384
import _mod12318 from "module_12318" /* 12318 */;
import _mod12325 from "module_12325" /* 12325 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12326 */;
import _mod12331 from "module_12331" /* 12331 */;
import _mod12332 from "module_12332" /* 12332 */;
import _mod12340 from "module_12340" /* 12340 */;
import _mod12349 from "module_12349" /* 12349 */;
import _mod12361 from "module_12361" /* 12361 */;
import registerSpanErrorInstrumentation from "module_12309" /* 12309 */;
import "module_12312";
import DEBUG_BUILD from "module_12341" /* 12341 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12327 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12340;
  const client = obj2.getClient();
  const obj3 = _mod12361;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12331;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12332;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12340;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12318;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12318;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12325;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12349;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12325).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12313).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
