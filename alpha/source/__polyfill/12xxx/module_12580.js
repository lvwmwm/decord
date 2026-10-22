// Module ID: 12580
// Function ID: 12581
// Dependencies: [12505, 12508, 12537, 12523, 12536, 12557, 12527, 12528, 12514, 12545, 12522, 12521, 12509]
// Exports: getTraceData

// Module 12580
import _mod12514 from "module_12514" /* 12514 */;
import _mod12521 from "module_12521" /* 12521 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12522 */;
import _mod12527 from "module_12527" /* 12527 */;
import _mod12528 from "module_12528" /* 12528 */;
import _mod12536 from "module_12536" /* 12536 */;
import _mod12545 from "module_12545" /* 12545 */;
import _mod12557 from "module_12557" /* 12557 */;
import registerSpanErrorInstrumentation from "module_12505" /* 12505 */;
import "module_12508";
import DEBUG_BUILD from "module_12537" /* 12537 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12523 */;


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12536;
  const client = obj2.getClient();
  const obj3 = _mod12557;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12527;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12528;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12536;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12514;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12514;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12521;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12545;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12521).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12509).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
