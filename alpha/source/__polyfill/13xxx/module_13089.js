// Module ID: 13089
// Function ID: 13090
// Dependencies: [13082, 13077, 13090, 13078, 13050]
// Exports: sampleSpan

// Module 13089
import _mod13082 from "module_13082" /* 13082 */;

require = arg1;
const dependencyMap = arg6;

export const sampleSpan = function sampleSpan(tracesSampler, normalizedRequest) {
  if (obj.hasTracingEnabled(tracesSampler)) {
    const isolationScope = tmp(13077).getIsolationScope();
    const obj2 = {};
    const merged = Object.assign(normalizedRequest);
    obj2.normalizedRequest = normalizedRequest.normalizedRequest || isolationScope.getScopeData().sdkProcessingMetadata.normalizedRequest;
    if (typeof tracesSampler.tracesSampler === "function") {
      let num = tracesSampler.tracesSampler(obj2);
    } else if (undefined !== obj2.parentSampled) {
      num = obj2.parentSampled;
    } else {
      num = 1;
      if (undefined !== tracesSampler.tracesSampleRate) {
        num = tracesSampler.tracesSampleRate;
      }
    }
    const tmpResult = tmp(13077);
    const parseSampleRateResult = tmp(13090).parseSampleRate(num);
    if (undefined === parseSampleRateResult) {
      if (tmp(13078).DEBUG_BUILD) {
        const logger3 = tmp(13050).logger;
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
        if (tmp(13078).DEBUG_BUILD) {
          const logger2 = tmp(13050).logger;
          const _Number = Number;
          const _HermesInternal = HermesInternal;
          logger2.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(num) + ")");
        }
        items2 = [false, parseSampleRateResult];
      }
    } else {
      if (tmp(13078).DEBUG_BUILD) {
        const logger = tmp(13050).logger;
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
  obj = _mod13082;
};
