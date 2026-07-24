// Module ID: 7275
// Function ID: 58645
// Name: sampleSpan
// Dependencies: [7268, 7263, 7276, 7264, 7236]

// Module 7275 (sampleSpan)
const require = arg1;
const dependencyMap = arg6;
arg5.sampleSpan = function sampleSpan(tracesSampler, normalizedRequest) {
  let obj = require(7268) /* hasTracingEnabled */;
  if (obj.hasTracingEnabled(tracesSampler)) {
    let num = 1;
    const isolationScope = require(7263) /* getCurrentScope */.getIsolationScope();
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
    const obj2 = require(7263) /* getCurrentScope */;
    const parseSampleRateResult = require(7276) /* parseSampleRate */.parseSampleRate(num);
    if (undefined === parseSampleRateResult) {
      if (require(7264).DEBUG_BUILD) {
        const logger3 = require(7236) /* consoleSandbox */.logger;
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
        if (require(7264).DEBUG_BUILD) {
          const logger2 = require(7236) /* consoleSandbox */.logger;
          const _Number = Number;
          const _HermesInternal = HermesInternal;
          logger2.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(num) + ")");
        }
        items2 = [false, parseSampleRateResult];
      }
    } else {
      if (require(7264).DEBUG_BUILD) {
        const logger = require(7236) /* consoleSandbox */.logger;
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
