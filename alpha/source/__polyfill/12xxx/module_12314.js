// Module ID: 12314
// Function ID: 12315
// Dependencies: [12307, 12302, 12315, 12303, 12275]
// Exports: sampleSpan

// Module 12314
import _mod12302 from "module_12302" /* 12302 */;
import _mod12303 from "module_12303" /* 12303 */;
import _mod12307 from "module_12307" /* 12307 */;
import _mod12315 from "module_12315" /* 12315 */;


export const sampleSpan = function sampleSpan(tracesSampler, normalizedRequest) {
  const obj = _mod12307;
  if (obj.hasTracingEnabled(tracesSampler)) {
    let num;
    let items3;
    const tmpResult = _mod12302;
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
    const tmpResult2 = _mod12315;
    const parseSampleRateResult = tmpResult2.parseSampleRate(num);
    if (undefined === parseSampleRateResult) {
      if (_mod12303.DEBUG_BUILD) {
        const logger3 = tmp(12275).logger;
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
        if (_mod12303.DEBUG_BUILD) {
          const logger2 = tmp(12275).logger;
          const _Number = Number;
          const _HermesInternal = HermesInternal;
          logger2.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(num) + ")");
        }
        items2 = [false, parseSampleRateResult];
      }
      items3 = items2;
    } else {
      if (_mod12303.DEBUG_BUILD) {
        const logger = tmp(12275).logger;
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
