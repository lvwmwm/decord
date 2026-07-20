// Module ID: 7297
// Function ID: 58894
// Name: getTraceData
// Dependencies: []
// Exports: getTraceData

// Module 7297 (getTraceData)
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
const _module2 = require(dependencyMap[2]);
const _module3 = require(dependencyMap[3]);

export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const client = require(dependencyMap[4]).getClient();
    const obj2 = require(dependencyMap[4]);
    if (obj3.isEnabled()) {
      if (client) {
        const mainCarrier = require(dependencyMap[6]).getMainCarrier();
        const obj4 = require(dependencyMap[6]);
        const asyncContextStrategy = require(dependencyMap[7]).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.getTraceData) {
          return asyncContextStrategy.getTraceData(first);
        } else {
          const currentScope = require(dependencyMap[4]).getCurrentScope();
          let span = first.span;
          if (!span) {
            span = require(dependencyMap[8]).getActiveSpan();
            const obj9 = require(dependencyMap[8]);
          }
          if (span) {
            let spanToTraceHeaderResult = require(dependencyMap[8]).spanToTraceHeader(span);
            const obj11 = require(dependencyMap[8]);
          } else {
            const propagationContext = currentScope.getPropagationContext();
            ({ traceId, sampled, spanId } = propagationContext);
            spanToTraceHeaderResult = require(dependencyMap[11]).generateSentryTraceHeader(traceId, spanId, sampled);
            const obj10 = require(dependencyMap[11]);
          }
          const obj12 = require(dependencyMap[9]);
          if (span) {
            let dynamicSamplingContextFromSpan = obj12.getDynamicSamplingContextFromSpan(span);
          } else {
            dynamicSamplingContextFromSpan = obj12.getDynamicSamplingContextFromScope(client, currentScope);
          }
          const obj7 = require(dependencyMap[4]);
          const result = require(dependencyMap[10]).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
          const TRACEPARENT_REGEXP = require(dependencyMap[11]).TRACEPARENT_REGEXP;
          if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
            let obj = { sentry-trace: spanToTraceHeaderResult, baggage: result };
          } else {
            const logger = require(dependencyMap[12]).logger;
            logger.warn("Invalid sentry-trace data. Cannot generate trace data");
            obj = {};
          }
          return obj;
        }
        const obj5 = require(dependencyMap[7]);
      }
    }
    return {};
  }
  first = {};
};
