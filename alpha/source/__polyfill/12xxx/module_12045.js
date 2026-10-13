// Module ID: 12045
// Function ID: 12046
// Dependencies: [12038, 12033, 12046, 12034, 12006]
// Exports: sampleSpan

// Module 12045
import _mod12033 from "module_12033" /* 12033 */;
import _mod12034 from "module_12034" /* 12034 */;
import _mod12038 from "module_12038" /* 12038 */;
import _mod12046 from "module_12046" /* 12046 */;


export const sampleSpan = function sampleSpan(tracesSampler, normalizedRequest) {
  const obj = _mod12038;
  if (obj.hasTracingEnabled(tracesSampler)) {
    let num;
    let items3;
    const tmpResult = _mod12033;
    const isolationScope = tmpResult.getIsolationScope();
    const obj2 = { normalizedRequest: normalizedRequest.normalizedRequest || normalizedRequest };
    normalizedRequest = isolationScope.getScopeData().sdkProcessingMetadata.normalizedRequest;
    const merged = Object.assign(normalizedRequest);
    if (typeof tracesSampler.tracesSampler === "function") {
      num = tracesSampler.tracesSampler(obj2);
    } else if (undefined !== obj2.parentSampled) {
      num = obj2.parentSampled;
    } else {
      num = 1;
      if (undefined !== tracesSampler.tracesSampleRate) {
        num = tracesSampler.tracesSampleRate;
      }
    }
    const tmpResult2 = _mod12046;
    const parseSampleRateResult = tmpResult2.parseSampleRate(num);
    if (undefined === parseSampleRateResult) {
      if (_mod12034.DEBUG_BUILD) {
        const logger3 = tmp(12006).logger;
        logger3.warn("[Tracing] Discarding transaction because of invalid sample rate.");
      }
      const items = [false];
      items3 = items;
    } else if (parseSampleRateResult) {
      let items2;
      const _Math = Math;
      if (Math.random() < parseSampleRateResult) {
        const items1 = [true, parseSampleRateResult];
        items2 = items1;
      } else {
        if (_mod12034.DEBUG_BUILD) {
          const logger2 = tmp(12006).logger;
          const _Number = Number;
          const _HermesInternal = HermesInternal;
          logger2.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(num) + ")");
        }
        items2 = [false, parseSampleRateResult];
      }
      items3 = items2;
    } else {
      if (_mod12034.DEBUG_BUILD) {
        const logger = tmp(12006).logger;
        let str = "a negative sampling decision was inherited or tracesSampleRate is set to 0";
        const log = logger.log;
        if (typeof tracesSampler.tracesSampler === "function") {
          str = "tracesSampler returned 0 or false";
        }
        log(`[Tracing] Discarding transaction because ${str}`);
      }
      items3 = [false, parseSampleRateResult];
    }
    return items3;
  } else {
    const items4 = [false];
    return items4;
  }
};
