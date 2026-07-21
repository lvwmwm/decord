// Module ID: 844
// Function ID: 9400
// Name: sampleSpan
// Dependencies: []

// Module 844 (sampleSpan)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.sampleSpan = function sampleSpan(tracesSampler, parentSampled) {
  let obj = parentSampled(arg6[0]);
  if (obj.hasSpansEnabled(tracesSampler)) {
    if ("function" === typeof tracesSampler.tracesSampler) {
      const _Object = Object;
      obj = {
        inheritOrSampleWith(arg0, self) {
              let parentSampleRate = arg0;
              if ("number" === typeof self.parentSampleRate) {
                parentSampleRate = self.parentSampleRate;
              } else if ("boolean" === typeof self.parentSampled) {
                const _Number = Number;
                parentSampleRate = Number(self.parentSampled);
              }
              return parentSampleRate;
            }
      };
      let tracesSampleRate = tracesSampler.tracesSampler(Object.assign({}, parentSampled, obj));
      let flag2 = true;
    } else if (undefined !== parentSampled.parentSampled) {
      tracesSampleRate = parentSampled.parentSampled;
    } else if (undefined !== tracesSampler.tracesSampleRate) {
      tracesSampleRate = tracesSampler.tracesSampleRate;
      flag2 = true;
    }
    const parseSampleRateResult = parentSampled(arg6[1]).parseSampleRate(tracesSampleRate);
    if (undefined === parseSampleRateResult) {
      if (parentSampled(arg6[2]).DEBUG_BUILD) {
        const debug3 = parentSampled(arg6[3]).debug;
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
        if (parentSampled(arg6[2]).DEBUG_BUILD) {
          const debug2 = parentSampled(arg6[3]).debug;
          const _Number = Number;
          const _HermesInternal = HermesInternal;
          debug2.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(tracesSampleRate) + ")");
        }
      }
      const items1 = [arg2 < parseSampleRateResult, parseSampleRateResult, flag2];
      return items1;
    } else {
      if (parentSampled(arg6[2]).DEBUG_BUILD) {
        const debug = parentSampled(arg6[3]).debug;
        let str2 = "a negative sampling decision was inherited or tracesSampleRate is set to 0";
        if ("function" === typeof tracesSampler.tracesSampler) {
          str2 = "tracesSampler returned 0 or false";
        }
        debug.log(`[Tracing] Discarding transaction because ${str2}`);
      }
      const items2 = [false, parseSampleRateResult, flag2];
      return items2;
    }
    const obj3 = parentSampled(arg6[1]);
  } else {
    const items3 = [false];
    return items3;
  }
};
