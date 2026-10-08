// Module ID: 11032
// Function ID: 11033
// Dependencies: [11025, 11020, 11033, 11021, 10993]
// Exports: sampleSpan

// Module 11032
import _mod11020 from "module_11020" /* 11020 */;
import _mod11021 from "module_11021" /* 11021 */;
import _mod11025 from "module_11025" /* 11025 */;
import _mod11033 from "module_11033" /* 11033 */;


export const sampleSpan = function sampleSpan(tracesSampler, normalizedRequest) {
  const obj = _mod11025;
  if (obj.hasTracingEnabled(tracesSampler)) {
    let num;
    let items3;
    const tmpResult = _mod11020;
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
    const tmpResult2 = _mod11033;
    const parseSampleRateResult = tmpResult2.parseSampleRate(num);
    if (undefined === parseSampleRateResult) {
      if (_mod11021.DEBUG_BUILD) {
        const logger3 = tmp(10993).logger;
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
        if (_mod11021.DEBUG_BUILD) {
          const logger2 = tmp(10993).logger;
          const _Number = Number;
          const _HermesInternal = HermesInternal;
          logger2.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(num) + ")");
        }
        items2 = [false, parseSampleRateResult];
      }
      items3 = items2;
    } else {
      if (_mod11021.DEBUG_BUILD) {
        const logger = tmp(10993).logger;
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
