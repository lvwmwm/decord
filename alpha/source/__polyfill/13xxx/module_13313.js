// Module ID: 13313
// Function ID: 13314
// Dependencies: [13306, 13301, 13314, 13302, 13274]
// Exports: sampleSpan

// Module 13313
import _mod13301 from "module_13301" /* 13301 */;
import _mod13302 from "module_13302" /* 13302 */;
import _mod13306 from "module_13306" /* 13306 */;
import _mod13314 from "module_13314" /* 13314 */;


export function sampleSpan(tracesSampler, normalizedRequest) {
  const obj = _mod13306;
  if (obj.hasTracingEnabled(tracesSampler)) {
    let num;
    let items3;
    const tmpResult = _mod13301;
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
    const tmpResult2 = _mod13314;
    const parseSampleRateResult = tmpResult2.parseSampleRate(num);
    if (undefined === parseSampleRateResult) {
      if (_mod13302.DEBUG_BUILD) {
        const logger3 = tmp(13274).logger;
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
        if (_mod13302.DEBUG_BUILD) {
          const logger2 = tmp(13274).logger;
          const _Number = Number;
          const _HermesInternal = HermesInternal;
          logger2.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(num) + ")");
        }
        items2 = [false, parseSampleRateResult];
      }
      items3 = items2;
    } else {
      if (_mod13302.DEBUG_BUILD) {
        const logger = tmp(13274).logger;
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
}
