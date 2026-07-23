// Module ID: 1092
// Function ID: 12522
// Name: startProfiling
// Dependencies: [65, 27, 978, 794, 1093, 1094, 1098, 1099, 977, 1100]
// Exports: hermesProfilingIntegration

// Module 1092 (startProfiling)
import _toConsumableArray from "_toConsumableArray";
import { Platform } from "get ActivityIndicator";

const require = arg1;
function startProfiling(arg0) {
  const NATIVE = require(977) /* getRNSentryModule */.NATIVE;
  let result = null;
  if (NATIVE.startProfiling(arg0)) {
    const _Date = Date;
    result = Date.now() * c3;
  }
  return result;
}
function stopProfiling(arg0) {
  const NATIVE = require(977) /* getRNSentryModule */.NATIVE;
  const stopProfilingResult = NATIVE.stopProfiling();
  if (stopProfilingResult) {
    const _Date = Date;
    const result = Date.now() * c3;
    const result1 = require(1100) /* mapSamples */.convertToSentryProfile(stopProfilingResult.hermesProfile);
    if (result1) {
      const hermesProfilingEvent = require(1094) /* isValidProfile */.createHermesProfilingEvent(result1);
      if (hermesProfilingEvent) {
        if (stopProfilingResult.androidProfile) {
          return createAndroidWithHermesProfile(hermesProfilingEvent, stopProfilingResult.androidProfile, result - arg0);
        } else {
          let tmp14 = hermesProfilingEvent;
          if (stopProfilingResult.nativeProfile) {
            tmp14 = addNativeProfileToHermesProfile(hermesProfilingEvent, stopProfilingResult.nativeProfile);
          }
          return tmp14;
        }
      } else {
        return null;
      }
      const obj2 = require(1094) /* isValidProfile */;
    } else {
      return null;
    }
    const obj = require(1100) /* mapSamples */;
  } else {
    return null;
  }
}
function createAndroidWithHermesProfile(hermesProfilingEvent, androidProfile, arg2) {
  const obj = { platform: "android", js_profile: hermesProfilingEvent.profile };
  const merged = Object.assign({}, androidProfile);
  obj.duration_ns = arg2.toString(10);
  obj.active_thread_id = hermesProfilingEvent.transaction.active_thread_id;
  return Object.assign(merged, obj);
}
function addNativeProfileToHermesProfile(hermesProfilingEvent, nativeProfile) {
  let obj = {};
  const merged = Object.assign({}, hermesProfilingEvent);
  obj.profile = addNativeThreadCpuProfileToHermes(hermesProfilingEvent.profile, nativeProfile.profile, hermesProfilingEvent.transaction.active_thread_id);
  const debug_meta = nativeProfile.debug_meta;
  let images;
  const merged1 = Object.assign(merged, obj);
  if (null !== debug_meta) {
    if (undefined !== debug_meta) {
      images = debug_meta.images;
    }
  }
  if (images) {
    obj = {};
    obj = { images: nativeProfile.debug_meta.images };
    obj.debug_meta = obj;
    let obj1 = obj;
  } else {
    obj1 = {};
  }
  return Object.assign(Object.assign(merged1, obj1), { measurements: nativeProfile.measurements });
}
function addNativeThreadCpuProfileToHermes(profile, profile2, active_thread_id) {
  let closure_0 = active_thread_id;
  profile.thread_metadata = Object.assign(Object.assign({}, profile2.thread_metadata), profile.thread_metadata);
  profile.queue_metadata = Object.assign(Object.assign({}, profile2.queue_metadata), profile.queue_metadata);
  let length = profile.frames.length;
  length = profile.stacks.length;
  if (profile2.frames) {
    let frames = profile2.frames;
    for (const item10032 of frames) {
      let tmp3 = arg0;
      frames = tmp.frames;
      let obj = {};
      ({ function: obj.function, instruction_addr: obj.instruction_addr } = item10032);
      obj.platform = undefined;
      let arr = frames.push(obj);
      continue;
    }
  }
  const items = [];
  let stacks = tmp.stacks;
  if (!stacks) {
    stacks = [];
  }
  let stacks1 = profile2.stacks;
  if (!stacks1) {
    stacks1 = [];
  }
  profile.stacks = items.concat(length(stacks), length(stacks1.map((arr) => arr.map((arg0) => arg0 + outer1_1))));
  const items1 = [];
  let samples = tmp.samples;
  if (!samples) {
    samples = [];
  }
  let samples1 = profile2.samples;
  const tmp5 = length;
  const tmp5Result = length(stacks);
  const tmp7 = length;
  const tmp8 = length;
  if (!samples1) {
    samples1 = [];
  }
  const found = samples1.filter((thread_id) => thread_id.thread_id !== closure_0);
  profile.samples = items1.concat(length(samples), length(found.map((stack_id) => Object.assign(Object.assign({}, stack_id), { stack_id: length + stack_id.stack_id }))));
  return profile;
}
let c3 = 1000000;
let closure_4 = { platformProfilers: true };

export const hermesProfilingIntegration = function hermesProfilingIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const platformProfilers = first.platformProfilers;
    let _toConsumableArray = null === platformProfilers || undefined === platformProfilers || platformProfilers;
    let c3 = false;
    function _startCurrentProfileForActiveTransaction() {
      if (!closure_0) {
        const activeSpan = outer1_0(outer1_1[3]).getActiveSpan();
        if (activeSpan) {
          _startCurrentProfile(activeSpan);
        }
        const obj = outer1_0(outer1_1[3]);
      }
    }
    function _startCurrentProfile(activeSpan) {
      if (obj.isRootSpan(activeSpan)) {
        _finishCurrentProfile();
        if (_shouldStartProfiling(activeSpan)) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(_finishCurrentProfile, outer1_0(outer1_1[7]).MAX_PROFILE_DURATION_MS);
          _startNewProfile(activeSpan);
        }
      }
    }
    function _shouldStartProfiling(startTimestampNs) {
      const obj = outer1_0(outer1_1[3]);
      const obj2 = outer1_0(outer1_1[3]);
      if (spanIsSampledResult) {
        const client = obj2.getClient();
        let getOptions;
        if (null != client) {
          getOptions = client.getOptions;
        }
        let callResult;
        if (null !== getOptions) {
          if (undefined !== getOptions) {
            callResult = getOptions.call(client);
          }
        }
        let profilesSampleRate;
        if (callResult) {
          if ("number" === typeof callResult.profilesSampleRate) {
            profilesSampleRate = callResult.profilesSampleRate;
          }
        }
        if (undefined === profilesSampleRate) {
          const debug3 = outer1_0(outer1_1[3]).debug;
          debug3.log("[Profiling] Profiling disabled, enable it by setting `profilesSampleRate` option to SDK init call.");
          let flag2 = false;
        } else {
          const _Math = Math;
          const tmp9 = Math.random() > profilesSampleRate;
          flag2 = !tmp9;
          if (tmp9) {
            const debug2 = outer1_0(outer1_1[3]).debug;
            debug2.log("[Profiling] Skip profiling transaction due to sampling.");
            flag2 = false;
          }
        }
        return flag2;
      } else {
        const debug = obj2.debug;
        debug.log("[Profiling] Transaction is not sampled, skipping profiling");
        return false;
      }
      spanIsSampledResult = outer1_0(outer1_1[3]).spanIsSampled(startTimestampNs);
    }
    function _startNewProfile(spanContext) {
      const tmp = _startCurrentProfile(_toConsumableArray);
      if (tmp) {
        const obj = { span_id: spanContext.spanContext().spanId, profile_id: outer1_0(outer1_1[3]).uuid4(), startTimestampNs: tmp };
        const attr = spanContext.setAttribute("profile_id", obj.profile_id);
        const debug = outer1_0(outer1_1[3]).debug;
        debug.log("[Profiling] started profiling: ", obj.profile_id);
        const obj2 = outer1_0(outer1_1[3]);
      }
    }
    function _finishCurrentProfileForSpan(spanContext) {
      if (obj.isRootSpan(spanContext)) {
        let span_id;
        if (null != closure_0) {
          span_id = closure_0.span_id;
        }
        if (spanContext.spanContext().spanId === span_id) {
          _finishCurrentProfile();
        } else {
          const debug = outer1_0(outer1_1[3]).debug;
          const spanId = spanContext.spanContext().spanId;
          let span_id1;
          if (null != closure_0) {
            span_id1 = closure_0.span_id;
          }
          const _HermesInternal = HermesInternal;
          debug.log("[Profiling] Span (" + spanId + ") ended is not the currently profiled span (" + span_id1 + "). Not stopping profiling.");
        }
      }
    }
    function _finishCurrentProfile() {
      _clearCurrentProfileTimeout();
      if (undefined !== c0) {
        const tmp9 = _shouldStartProfiling(c0.startTimestampNs);
        if (tmp9) {
          const PROFILE_QUEUE = tmp10(tmp11[4]).PROFILE_QUEUE;
          PROFILE_QUEUE.add(c0.profile_id, tmp9);
          const debug2 = tmp10(tmp11[3]).debug;
          debug2.log("[Profiling] finished profiling: ", c0.profile_id);
          c0 = undefined;
        } else {
          const debug = tmp10(tmp11[3]).debug;
          debug.warn("[Profiling] Stop failed. Cleaning up...");
          c0 = undefined;
        }
      }
    }
    function _createProfileEventFor(contexts) {
      contexts = undefined;
      if (null != contexts) {
        contexts = contexts.contexts;
      }
      let trace;
      if (null !== contexts) {
        if (undefined !== contexts) {
          trace = contexts.trace;
        }
      }
      let data;
      if (null !== trace) {
        if (undefined !== trace) {
          data = trace.data;
        }
      }
      let profile_id;
      if (null !== data) {
        if (undefined !== data) {
          profile_id = data.profile_id;
        }
      }
      if ("string" !== typeof profile_id) {
        const debug3 = outer1_0(outer1_1[3]).debug;
        debug3.log("[Profiling] cannot find profile for a transaction without a profile context");
        return null;
      } else {
        let contexts1;
        if (null != contexts) {
          contexts1 = contexts.contexts;
        }
        let trace1;
        if (null !== contexts1) {
          if (undefined !== contexts1) {
            trace1 = contexts1.trace;
          }
        }
        let data1;
        if (null !== trace1) {
          if (undefined !== trace1) {
            data1 = trace1.data;
          }
        }
        let profile_id1;
        if (null !== data1) {
          if (undefined !== data1) {
            profile_id1 = data1.profile_id;
          }
        }
        if (profile_id1) {
          data = contexts.contexts.trace.data;
          delete tmp.profile_id;
        }
        const PROFILE_QUEUE = outer1_0(outer1_1[4]).PROFILE_QUEUE;
        const value = PROFILE_QUEUE.get(profile_id);
        const PROFILE_QUEUE2 = outer1_0(outer1_1[4]).PROFILE_QUEUE;
        PROFILE_QUEUE2.delete(profile_id);
        if (value) {
          const result = tmp14(tmp15[5]).enrichCombinedProfileWithEventContext(profile_id, value, contexts);
          const debug2 = tmp14(tmp15[3]).debug;
          const _HermesInternal2 = HermesInternal;
          debug2.log("[Profiling] Created profile " + profile_id + " for transaction " + contexts.event_id);
          return result;
        } else {
          const debug = tmp14(tmp15[3]).debug;
          const _HermesInternal = HermesInternal;
          debug.log("[Profiling] cannot find profile " + profile_id + " for transaction " + contexts.event_id);
          return null;
        }
      }
    }
    function _clearCurrentProfileTimeout() {
      if (undefined !== c1) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c1);
      }
      c1 = undefined;
    }
    let obj = {
      name: "HermesProfiling",
      setupOnce() {
          if (!c3) {
            c3 = true;
            let obj = outer1_0(outer1_1[2]);
            let obj2 = outer1_0(outer1_1[3]);
            if (isHermesEnabledResult) {
              const client = obj2.getClient();
              let tmp7 = client;
              if (client) {
                tmp7 = "function" === typeof client.on;
              }
              if (tmp7) {
                _startCurrentProfileForActiveTransaction();
                client.on("spanStart", _startCurrentProfile);
                client.on("spanEnd", _finishCurrentProfileForSpan);
                client.on("beforeEnvelope", (arg0) => {
                  const PROFILE_QUEUE = outer2_0(outer2_1[4]).PROFILE_QUEUE;
                  if (PROFILE_QUEUE.size()) {
                    const result = outer2_0(outer2_1[5]).findProfiledTransactionsFromEnvelope(arg0);
                    if (result.length) {
                      const items = [];
                      for (const item10032 of result) {
                        let tmp7 = outer1_10;
                        let tmp8 = outer1_10(item10032);
                        if (tmp8) {
                          let tmp10 = items;
                          let tmp11 = tmp8;
                          let arr = items.push(tmp9);
                        }
                        continue;
                      }
                      const result1 = outer2_0(outer2_1[5]).addProfilesToEnvelope(arg0, items);
                      const obj2 = outer2_0(outer2_1[5]);
                    } else {
                      const debug = outer2_0(outer2_1[3]).debug;
                      debug.log("[Profiling] no profiled transactions found in envelope");
                    }
                    const obj = outer2_0(outer2_1[5]);
                  }
                });
              }
            } else {
              let debug = obj2.debug;
              debug.log("[Profiling] Hermes is not enabled, not adding profiling integration.");
            }
            isHermesEnabledResult = outer1_0(outer1_1[2]).isHermesEnabled();
          }
        }
    };
    return obj;
  }
  first = _startCurrentProfileForActiveTransaction;
};
export { startProfiling };
export { stopProfiling };
export { createAndroidWithHermesProfile };
export { addNativeProfileToHermesProfile };
export { addNativeThreadCpuProfileToHermes };
