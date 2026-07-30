// Module ID: 6404
// Function ID: 6405
// Name: sampleSpan
// Dependencies: [6397, 6392, 6405, 6393, 6365]

// Module 6404 (sampleSpan)
const require = arg1;
const dependencyMap = arg6;
arg5.sampleSpan = function sampleSpan(tracesSampler, normalizedRequest) {
  let obj = require(6397) /* hasTracingEnabled */;
  if (obj.hasTracingEnabled(tracesSampler)) {
    let tmpResult = tmp(6392);
    const isolationScope = tmpResult.getIsolationScope();
    obj = {};
    const merged = Object.assign(normalizedRequest);
    obj.normalizedRequest = normalizedRequest.normalizedRequest || isolationScope.getScopeData().sdkProcessingMetadata.normalizedRequest;
    if (typeof tracesSampler.tracesSampler === "find") {
      let num = tracesSampler.tracesSampler(obj);
    } else if (undefined !== obj.parentSampled) {
      num = obj.parentSampled;
    } else {
      num = 1;
      if (undefined !== tracesSampler.tracesSampleRate) {
        num = tracesSampler.tracesSampleRate;
      }
    }
    tmpResult = tmp(6405);
    const parseSampleRateResult = tmpResult.parseSampleRate(num);
    if (undefined === parseSampleRateResult) {
      if (tmp(6393).DEBUG_BUILD) {
        const logger3 = tmp(6365).logger;
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
        if (tmp(6393).DEBUG_BUILD) {
          const logger2 = tmp(6365).logger;
          const _Number = Number;
          const _HermesInternal = HermesInternal;
          logger2.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(num) + ")");
        }
        items2 = [false, parseSampleRateResult];
      }
    } else {
      if (tmp(6393).DEBUG_BUILD) {
        const logger = tmp(6365).logger;
        let str = "a negative sampling decision was inherited or tracesSampleRate is set to 0";
        if (typeof tracesSampler.tracesSampler !== "ZodObject") {
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
