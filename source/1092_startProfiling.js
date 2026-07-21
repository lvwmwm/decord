// Module ID: 1092
// Function ID: 12521
// Name: startProfiling
// Dependencies: [6, 7, 15, 17, 18, 31, 33, 8065, 8050, 8051]
// Exports: hermesProfilingIntegration

// Module 1092 (startProfiling)
import _classCallCheck from "_classCallCheck";
import { Platform } from "_defineProperties";

function startProfiling(arg0) {
  const NATIVE = arg1(dependencyMap[8]).NATIVE;
  let result = null;
  if (NATIVE.startProfiling(arg0)) {
    const _Date = Date;
    result = Date.now() * closure_3;
  }
  return result;
}
function stopProfiling(arg0) {
  const NATIVE = arg1(dependencyMap[8]).NATIVE;
  const stopProfilingResult = NATIVE.stopProfiling();
  if (stopProfilingResult) {
    const _Date = Date;
    const result = Date.now() * closure_3;
    const result1 = arg1(dependencyMap[9]).convertToSentryProfile(stopProfilingResult.hermesProfile);
    if (result1) {
      const hermesProfilingEvent = arg1(dependencyMap[5]).createHermesProfilingEvent(result1);
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
      const obj2 = arg1(dependencyMap[5]);
    } else {
      return null;
    }
    const obj = arg1(dependencyMap[9]);
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
  profile2 = active_thread_id;
  profile.thread_metadata = Object.assign(Object.assign({}, profile2.thread_metadata), profile.thread_metadata);
  profile.queue_metadata = Object.assign(Object.assign({}, profile2.queue_metadata), profile.queue_metadata);
  const dependencyMap = profile.frames.length;
  let _classCallCheck = profile.stacks.length;
  if (profile2.frames) {
    let frames = profile2.frames;
    for (const item10032 of frames) {
      let tmp3 = arg0;
      frames = tmp.frames;
      let obj = {};
      ({ function: obj.function, instruction_addr: obj.instruction_addr } = item10032);
      obj.platform = undefined;
      let arr = frames.push(obj);
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
  profile.stacks = items.concat(_classCallCheck(stacks), _classCallCheck(stacks1.map((arr) => arr.map((arg0) => arg0 + closure_1))));
  const items1 = [];
  let samples = tmp.samples;
  if (!samples) {
    samples = [];
  }
  let samples1 = profile2.samples;
  const tmp5 = _classCallCheck;
  const tmp5Result = _classCallCheck(stacks);
  const tmp7 = _classCallCheck;
  const tmp8 = _classCallCheck;
  if (!samples1) {
    samples1 = [];
  }
  const found = samples1.filter((thread_id) => thread_id.thread_id !== arg2);
  profile.samples = items1.concat(_classCallCheck(samples), _classCallCheck(found.map((stack_id) => Object.assign(Object.assign({}, stack_id), { stack_id: length + stack_id.stack_id }))));
  return profile;
}
let closure_3 = 1000000;
let closure_4 = { platformProfilers: true };

export const hermesProfilingIntegration = function hermesProfilingIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const platformProfilers = first.platformProfilers;
    let _classCallCheck = null === platformProfilers || undefined === platformProfilers || platformProfilers;
    let closure_3 = false;
    function _startCurrentProfileForActiveTransaction() {
      if (!lib) {
        const activeSpan = lib(closure_1[3]).getActiveSpan();
        if (activeSpan) {
          _startCurrentProfile(activeSpan);
        }
        const obj = lib(closure_1[3]);
      }
    }
    function _startCurrentProfile(activeSpan) {
      if (obj.isRootSpan(activeSpan)) {
        _finishCurrentProfile();
        if (_shouldStartProfiling(activeSpan)) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(_finishCurrentProfile, lib(timeout[7]).MAX_PROFILE_DURATION_MS);
          _startNewProfile(activeSpan);
        }
      }
    }
    function _shouldStartProfiling(startTimestampNs) {
      const obj = lib(closure_1[3]);
      const obj2 = lib(closure_1[3]);
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
          const debug3 = lib(closure_1[3]).debug;
          debug3.log("[Profiling] Profiling disabled, enable it by setting `profilesSampleRate` option to SDK init call.");
          let flag2 = false;
        } else {
          const _Math = Math;
          const tmp9 = Math.random() > profilesSampleRate;
          flag2 = !tmp9;
          if (tmp9) {
            const debug2 = lib(closure_1[3]).debug;
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
      const spanIsSampledResult = lib(closure_1[3]).spanIsSampled(startTimestampNs);
    }
    function _startNewProfile(spanContext) {
      const tmp = _startCurrentProfile(_classCallCheck);
      if (tmp) {
        const obj = { span_id: spanContext.spanContext().spanId };
        obj.profile_id = obj(closure_1[3]).uuid4();
        obj.startTimestampNs = tmp;
        const attr = spanContext.setAttribute("profile_id", obj.profile_id);
        const debug = obj(closure_1[3]).debug;
        debug.log("[Profiling] started profiling: ", obj.profile_id);
        const obj2 = obj(closure_1[3]);
      }
    }
    function _finishCurrentProfileForSpan(spanContext) {
      if (obj.isRootSpan(spanContext)) {
        let span_id;
        if (null != lib) {
          span_id = lib.span_id;
        }
        if (spanContext.spanContext().spanId === span_id) {
          _finishCurrentProfile();
        } else {
          const debug = lib(closure_1[3]).debug;
          const spanId = spanContext.spanContext().spanId;
          let span_id1;
          if (null != lib) {
            span_id1 = lib.span_id;
          }
          const _HermesInternal = HermesInternal;
          debug.log("[Profiling] Span (" + spanId + ") ended is not the currently profiled span (" + span_id1 + "). Not stopping profiling.");
        }
      }
    }
    function _finishCurrentProfile() {
      _clearCurrentProfileTimeout();
      if (undefined !== lib) {
        const tmp9 = _shouldStartProfiling(lib.startTimestampNs);
        if (tmp9) {
          const PROFILE_QUEUE = tmp10(tmp11[4]).PROFILE_QUEUE;
          PROFILE_QUEUE.add(lib.profile_id, tmp9);
          const debug2 = tmp10(tmp11[3]).debug;
          debug2.log("[Profiling] finished profiling: ", lib.profile_id);
          let lib;
        } else {
          const debug = tmp10(tmp11[3]).debug;
          debug.warn("[Profiling] Stop failed. Cleaning up...");
          lib = undefined;
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
        const debug3 = lib(closure_1[3]).debug;
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
          delete r1.profile_id;
        }
        const PROFILE_QUEUE = lib(closure_1[4]).PROFILE_QUEUE;
        const value = PROFILE_QUEUE.get(profile_id);
        const PROFILE_QUEUE2 = lib(closure_1[4]).PROFILE_QUEUE;
        PROFILE_QUEUE2.delete(profile_id);
        if (value) {
          const result = tmp13(tmp14[5]).enrichCombinedProfileWithEventContext(profile_id, value, contexts);
          const debug2 = tmp13(tmp14[3]).debug;
          const _HermesInternal2 = HermesInternal;
          debug2.log("[Profiling] Created profile " + profile_id + " for transaction " + contexts.event_id);
          return result;
        } else {
          const debug = tmp13(tmp14[3]).debug;
          const _HermesInternal = HermesInternal;
          debug.log("[Profiling] cannot find profile " + profile_id + " for transaction " + contexts.event_id);
          return null;
        }
      }
    }
    function _clearCurrentProfileTimeout() {
      if (undefined !== closure_1) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_1);
      }
      closure_1 = undefined;
    }
    const obj = {
      name: "HermesProfiling",
      setupOnce() {
          if (!closure_3) {
            closure_3 = true;
            const obj = lib(closure_1[2]);
            const obj2 = lib(closure_1[3]);
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
                  const PROFILE_QUEUE = callback(closure_1[4]).PROFILE_QUEUE;
                  if (PROFILE_QUEUE.size()) {
                    const result = callback(closure_1[5]).findProfiledTransactionsFromEnvelope(arg0);
                    if (result.length) {
                      const items = [];
                      for (const item10032 of result) {
                        let tmp7 = closure_10;
                        let tmp8 = closure_10(item10032);
                        if (tmp8) {
                          let tmp10 = items;
                          let tmp11 = tmp8;
                          let arr = items.push(tmp9);
                        }
                      }
                      const result1 = callback(closure_1[5]).addProfilesToEnvelope(arg0, items);
                      const obj2 = callback(closure_1[5]);
                    } else {
                      const debug = callback(closure_1[3]).debug;
                      debug.log("[Profiling] no profiled transactions found in envelope");
                    }
                    const obj = callback(closure_1[5]);
                  }
                });
              }
            } else {
              const debug = obj2.debug;
              debug.log("[Profiling] Hermes is not enabled, not adding profiling integration.");
            }
            const isHermesEnabledResult = lib(closure_1[2]).isHermesEnabled();
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
