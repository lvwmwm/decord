// Module ID: 737
// Function ID: 738
// Name: sampleSpan
// Dependencies: [724, 705, 692, 693]
// Exports: sampleSpan

// Module 737 (sampleSpan)
import _mod724 from "module_724" /* 724 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const sampleSpan = function sampleSpan(tracesSampler, parentSampled, arg2) {
  if (obj.hasSpansEnabled(tracesSampler)) {
    if (typeof tracesSampler.tracesSampler === "function") {
      const obj2 = {};
      const merged = Object.assign(parentSampled);
      obj2.inheritOrSampleWith = function inheritOrSampleWith(arg0) {
        if (typeof parentSampled.parentSampleRate === "number") {
          let parentSampleRate = tmp.parentSampleRate;
        } else {
          parentSampleRate = arg0;
          if (typeof tmp.parentSampled === "boolean") {
            const _Number = Number;
            parentSampleRate = Number(tmp.parentSampled);
          }
        }
        return parentSampleRate;
      };
      let tracesSampleRate = tracesSampler.tracesSampler(obj2);
      let flag2 = true;
    } else if (undefined !== parentSampled.parentSampled) {
      tracesSampleRate = parentSampled.parentSampled;
    } else if (undefined !== tracesSampler.tracesSampleRate) {
      tracesSampleRate = tracesSampler.tracesSampleRate;
      flag2 = true;
    }
    const parseSampleRateResult = tmp(705).parseSampleRate(tracesSampleRate);
    if (undefined === parseSampleRateResult) {
      if (tmp(692).DEBUG_BUILD) {
        const debug3 = tmp(693).debug;
        const _JSON = JSON;
        const json = JSON.stringify(tracesSampleRate);
        const _JSON2 = JSON;
        const _HermesInternal2 = HermesInternal;
        debug3.warn("[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got " + json + " of type " + JSON.stringify(typeof tracesSampleRate) + ".");
      }
      const items = [false];
      return items;
    } else if (parseSampleRateResult) {
      if (arg2 >= parseSampleRateResult) {
        if (tmp(692).DEBUG_BUILD) {
          const debug2 = tmp(693).debug;
          let _Number = Number;
          const _HermesInternal = HermesInternal;
          debug2.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(tracesSampleRate) + ")");
        }
      }
      const items1 = [arg2 < parseSampleRateResult, parseSampleRateResult, flag2];
      return items1;
    } else {
      if (tmp(692).DEBUG_BUILD) {
        const debug = tmp(693).debug;
        let str = "a negative sampling decision was inherited or tracesSampleRate is set to 0";
        if (typeof tracesSampler.tracesSampler === "function") {
          str = "tracesSampler returned 0 or false";
        }
        debug.log(`[Tracing] Discarding transaction because ${str}`);
      }
      const items2 = [false, parseSampleRateResult, flag2];
      return items2;
    }
    const tmpResult = tmp(705);
  } else {
    const items3 = [false];
    return items3;
  }
  obj = _mod724;
};
