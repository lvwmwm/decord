// Module ID: 12585
// Function ID: 12586
// Dependencies: [12510, 12513, 12542, 12528, 12541, 12562, 12532, 12533, 12519, 12550, 12527, 12526, 12514]
// Exports: getTraceData

// Module 12585
import errorCallback from "errorCallback" /* 12510 */;
import _mod12541 from "module_12541" /* 12541 */;
import "module_12513";
import __SENTRY_DEBUG__ from "module_12542" /* 12542 */;
import dateTimestampInSeconds from "module_12528" /* 12528 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12541.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(12532).getMainCarrier();
      const tmpResult = tmp(12532);
      const asyncContextStrategy = tmp(12533).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12541).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12519).getActiveSpan();
          const tmpResult10 = tmp(12519);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12519).spanToTraceHeader(span);
          const tmpResult11 = tmp(12519);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12526).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(12526);
        }
        const tmpResult13 = tmp(12550);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(12541);
        const result = tmp(12527).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12526).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(12514).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(12533);
    }
  }
  return {};
};
