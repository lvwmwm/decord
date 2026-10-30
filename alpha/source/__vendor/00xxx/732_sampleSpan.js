// Module ID: 732
// Function ID: 733
// Name: sampleSpan
// Dependencies: [719, 700, 687, 688]
// Exports: sampleSpan

// Module 732 (sampleSpan)
import _mod719 from "module_719" /* 719 */;

let parentSampleRate;

let tmp;
const _mod687 = tmp(687);
const CONSOLE_LEVELS = tmp(688);
const _mod700 = tmp(700);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function sampleSpan(tracesSampler, parentSampled, arg2) {
  let closure_0 = parentSampled;
  const tmp = require;
  const obj = _mod719;
  if (obj.hasSpansEnabled(tracesSampler)) {
    let tracesSampleRate;
    let flag2;
    if (typeof tracesSampler.tracesSampler === "function") {
      tracesSampler = tracesSampler.tracesSampler;
      const obj2 = {
        inheritOrSampleWith(arg0) {
              if (typeof parentSampleRate.parentSampleRate === "number") {
                parentSampleRate = tmp.parentSampleRate;
              } else {
                parentSampleRate = arg0;
                if (typeof parentSampleRate.parentSampled === "boolean") {
                  const _Number = Number;
                  parentSampleRate = Number(tmp.parentSampled);
                }
              }
              return parentSampleRate;
            }
      };
      const merged = Object.assign(parentSampled);
      tracesSampleRate = tracesSampler(obj2);
      flag2 = true;
    } else if (undefined !== parentSampled.parentSampled) {
      tracesSampleRate = parentSampled.parentSampled;
    } else if (undefined !== tracesSampler.tracesSampleRate) {
      tracesSampleRate = tracesSampler.tracesSampleRate;
      flag2 = true;
    }
    const tmpResult = _mod700;
    const parseSampleRateResult = tmpResult.parseSampleRate(tracesSampleRate);
    if (undefined === parseSampleRateResult) {
      if (_mod687.DEBUG_BUILD) {
        const debug3 = CONSOLE_LEVELS.debug;
        const _JSON = JSON;
        const warn = debug3.warn;
        const json = JSON.stringify(tracesSampleRate);
        const _JSON2 = JSON;
        const _HermesInternal2 = HermesInternal;
        warn("[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got " + json + " of type " + JSON.stringify(typeof tracesSampleRate) + ".");
      }
      const items = [false];
      return items;
    } else if (parseSampleRateResult) {
      if (arg2 >= parseSampleRateResult) {
        if (_mod687.DEBUG_BUILD) {
          const debug2 = CONSOLE_LEVELS.debug;
          let _Number = Number;
          const _HermesInternal = HermesInternal;
          debug2.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(tracesSampleRate) + ")");
        }
      }
      const items1 = [arg2 < parseSampleRateResult, parseSampleRateResult, flag2];
      return items1;
    } else {
      if (_mod687.DEBUG_BUILD) {
        const debug = CONSOLE_LEVELS.debug;
        let str = "a negative sampling decision was inherited or tracesSampleRate is set to 0";
        const log = debug.log;
        if (typeof tracesSampler.tracesSampler === "function") {
          str = "tracesSampler returned 0 or false";
        }
        log(`[Tracing] Discarding transaction because ${str}`);
      }
      const items2 = [false, parseSampleRateResult, flag2];
      return items2;
    }
  } else {
    const items3 = [false];
    return items3;
  }
}
