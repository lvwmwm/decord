// Module ID: 7534
// Function ID: 7535
// Name: sampleSpan
// Dependencies: [7527, 7522, 7535, 7523, 7495]

// Module 7534 (sampleSpan)
const require = arg1;
const dependencyMap = arg6;
arg5.sampleSpan = function sampleSpan(tracesSampler, normalizedRequest) {
  let obj = require(7527) /* hasTracingEnabled */;
  if (obj.hasTracingEnabled(tracesSampler)) {
    let tmpResult = tmp(7522);
    const isolationScope = tmpResult.getIsolationScope();
    obj = {};
    const merged = Object.assign(normalizedRequest);
    obj.normalizedRequest = normalizedRequest.normalizedRequest || isolationScope.getScopeData().sdkProcessingMetadata.normalizedRequest;
    if (typeof tracesSampler.tracesSampler === "function") {
      let num = tracesSampler.tracesSampler(obj);
    } else if (undefined !== obj.parentSampled) {
      num = obj.parentSampled;
    } else {
      num = 1;
      if (undefined !== tracesSampler.tracesSampleRate) {
        num = tracesSampler.tracesSampleRate;
      }
    }
    tmpResult = tmp(7535);
    const parseSampleRateResult = tmpResult.parseSampleRate(num);
    if (undefined === parseSampleRateResult) {
      if (tmp(7523).DEBUG_BUILD) {
        const logger3 = tmp(7495).logger;
        logger3.warn("[Tracing] Discarding transaction because of invalid sample rate.");
      }
      const items = [false];
      let items3 = items;
    } else if (parseSampleRateResult) {
      const _Math = Math;
      if (Math.random() < parseSampleRateResult) {
        const items1 = [true, parseSampleRateResult];
        let items2 = items1;
      } else {
        if (tmp(7523).DEBUG_BUILD) {
          const logger2 = tmp(7495).logger;
          const _Number = Number;
          const _HermesInternal = HermesInternal;
          logger2.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(num) + ")");
        }
        items2 = [false, parseSampleRateResult];
      }
    } else {
      if (tmp(7523).DEBUG_BUILD) {
        const logger = tmp(7495).logger;
        let str = "a negative sampling decision was inherited or tracesSampleRate is set to 0";
        if (typeof tracesSampler.tracesSampler === "function") {
          str = "tracesSampler returned 0 or false";
        }
        logger.log(`[Tracing] Discarding transaction because ${str}`);
      }
      items3 = [false, parseSampleRateResult];
    }
    return items3;
  } else {
    const items4 = [false];
    return items4;
  }
};
