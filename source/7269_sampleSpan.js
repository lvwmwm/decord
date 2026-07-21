// Module ID: 7269
// Function ID: 58559
// Name: sampleSpan
// Dependencies: []

// Module 7269 (sampleSpan)
arg5.sampleSpan = function sampleSpan(tracesSampler, normalizedRequest) {
  let obj = normalizedRequest(arg6[0]);
  if (obj.hasTracingEnabled(tracesSampler)) {
    let num = 1;
    const isolationScope = normalizedRequest(arg6[1]).getIsolationScope();
    obj = {};
    normalizedRequest = normalizedRequest.normalizedRequest;
    if (!normalizedRequest) {
      normalizedRequest = isolationScope.getScopeData().sdkProcessingMetadata.normalizedRequest;
    }
    obj.normalizedRequest = normalizedRequest;
    const merged = Object.assign({}, normalizedRequest, obj);
    if ("function" === typeof tracesSampler.tracesSampler) {
      num = tracesSampler.tracesSampler(merged);
    } else if (undefined !== merged.parentSampled) {
      num = merged.parentSampled;
    } else if (undefined !== tracesSampler.tracesSampleRate) {
      num = tracesSampler.tracesSampleRate;
    }
    const obj2 = normalizedRequest(arg6[1]);
    const parseSampleRateResult = normalizedRequest(arg6[2]).parseSampleRate(num);
    if (undefined === parseSampleRateResult) {
      if (normalizedRequest(arg6[3]).DEBUG_BUILD) {
        const logger3 = normalizedRequest(arg6[4]).logger;
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
        if (normalizedRequest(arg6[3]).DEBUG_BUILD) {
          const logger2 = normalizedRequest(arg6[4]).logger;
          const _Number = Number;
          const _HermesInternal = HermesInternal;
          logger2.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(num) + ")");
        }
        items2 = [false, parseSampleRateResult];
      }
    } else {
      if (normalizedRequest(arg6[3]).DEBUG_BUILD) {
        const logger = normalizedRequest(arg6[4]).logger;
        let str2 = "a negative sampling decision was inherited or tracesSampleRate is set to 0";
        if ("function" === typeof tracesSampler.tracesSampler) {
          str2 = "tracesSampler returned 0 or false";
        }
        logger.log(`[Tracing] Discarding transaction because ${str2}`);
      }
      items3 = [false, parseSampleRateResult];
    }
    return items3;
  } else {
    const items4 = [false];
    return items4;
  }
};
