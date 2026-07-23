// Module ID: 1077
// Function ID: 12389
// Name: enrichWithThreadInformation
// Dependencies: [77, 794, 1004, 1048]
// Exports: addProfileToGlobalCache, addProfilesToEnvelope, attachProfiledThreadToEvent, createProfileChunkPayload, createProfilingEvent, findProfiledTransactionsFromEnvelope, getActiveProfilesCount, hasLegacyProfiling, isAutomatedPageLoadSpan, shouldProfileSession, shouldProfileSpanLegacy, startJSSelfProfile, takeProfileFromGlobalCache, validateProfileChunk

// Module 1077 (enrichWithThreadInformation)
import _defineProperty from "_defineProperty";
import StringResult from "_defineProperty";

function enrichWithThreadInformation(samples) {
  let tmp = samples;
  if (!("thread_metadata" in samples)) {
    tmp = convertJSSelfProfileToSampledFormat(samples);
  }
  return tmp;
}
function createProfilePayload(event_id, arg1, resources, type) {
  if ("transaction" !== type.type) {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("Profiling events may only be attached to transactions, this should never occur.");
    throw typeError;
  } else if (null == resources) {
    const _TypeError = TypeError;
    const _HermesInternal2 = HermesInternal;
    const typeError1 = new TypeError("Cannot construct profiling event envelope without a valid profile. Got " + resources + " instead.");
    throw typeError1;
  } else {
    const contexts = type.contexts;
    let trace_id;
    if (null != contexts) {
      const trace = contexts.trace;
      if (null != trace) {
        trace_id = trace.trace_id;
      }
    }
    let DEBUG_BUILD = "string" === tmp2;
    if (DEBUG_BUILD) {
      DEBUG_BUILD = 32 !== trace_id.length;
    }
    if (DEBUG_BUILD) {
      DEBUG_BUILD = require(1048).DEBUG_BUILD;
    }
    if (DEBUG_BUILD) {
      const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
      const _HermesInternal = HermesInternal;
      debug.log("[Profiling] Invalid traceId: " + trace_id + " on profiled event");
    }
    let str5 = "";
    if ("string" === typeof trace_id) {
      str5 = trace_id;
    }
    if (arg1) {
      if ("number" === typeof type.timestamp) {
        let result = 1000 * type.timestamp;
      } else {
        let obj1 = require(794) /* registerSpanErrorInstrumentation */;
        result = 1000 * obj1.timestampInSeconds();
      }
      let obj = { event_id };
      const _Date = Date;
      const date = new Date(arg1);
      obj.timestamp = date.toISOString();
      obj.platform = "javascript";
      obj.version = "1";
      obj.release = type.release || "";
      let DEFAULT_ENVIRONMENT = type.environment;
      if (!DEFAULT_ENVIRONMENT) {
        DEFAULT_ENVIRONMENT = require(794) /* registerSpanErrorInstrumentation */.DEFAULT_ENVIRONMENT;
      }
      obj.environment = DEFAULT_ENVIRONMENT;
      obj = { name: "javascript", version: require(1004) /* ignoreNextOnError */.WINDOW.navigator.userAgent };
      obj.runtime = obj;
      obj1 = { name: c6, version: c7, build_number: str3 };
      obj.os = obj1;
      const obj2 = { locale: str4, model: c10, manufacturer: str3, architecture: c8, is_emulator: false };
      obj.device = obj2;
      const obj3 = { images: applyDebugMetadata(resources.resources) };
      obj.debug_meta = obj3;
      obj.profile = tmp10;
      const obj4 = { name: type.transaction || "" };
      event_id = type.event_id;
      if (!event_id) {
        event_id = require(794) /* registerSpanErrorInstrumentation */.uuid4();
        const obj10 = require(794) /* registerSpanErrorInstrumentation */;
      }
      obj4.id = event_id;
      obj4.trace_id = str5;
      obj4.active_thread_id = closure_4;
      obj4.relative_start_ns = "0";
      const result1 = 1000000 * (result - arg1);
      obj4.relative_end_ns = result1.toFixed(0);
      const items = [obj4];
      obj.transactions = items;
      return obj;
    } else if ("number" === typeof type.start_timestamp) {
      let result2 = 1000 * type.start_timestamp;
    } else {
      obj = require(794) /* registerSpanErrorInstrumentation */;
      result2 = 1000 * obj.timestampInSeconds();
    }
  }
}
function convertJSSelfProfileToSampledFormat(samples) {
  const _require = samples;
  const _defineProperty = 0;
  obj = { samples: [], stacks: [], frames: [], thread_metadata: _defineProperty({}, timestamp, obj) };
  obj = { name: closure_5 };
  const first = samples.samples[0];
  if (first) {
    timestamp = first.timestamp;
    let result = _require(794).browserPerformanceTimeOrigin();
    const _performance = performance;
    if ("number" === typeof performance.timeOrigin) {
      const _performance2 = performance;
      let num2 = performance.timeOrigin;
    } else {
      num2 = result;
      if (!result) {
        num2 = 0;
      }
    }
    if (!result) {
      result = num2;
    }
    closure_5 = num2 - result;
    samples = samples.samples;
    const item = samples.forEach((stackId) => {
      let tmp9;
      if (undefined === stackId.stackId) {
        if (undefined === closure_1) {
          closure_1 = closure_2;
          obj.stacks[closure_1] = [];
          closure_2 = closure_2 + 1;
        }
        obj = {};
        const result = (stackId.timestamp + closure_5 - timestamp) * obj;
        obj.elapsed_since_start_ns = result.toFixed(0);
        obj.stack_id = closure_1;
        obj.thread_id = timestamp;
        obj.samples[arg1] = obj;
      } else {
        let tmp11 = samples.stacks[stackId.stackId];
        const items = [];
        if (tmp11) {
          do {
            let arr = items.push(tmp11.frameId);
            let tmp2 = samples;
            let tmp3 = samples.frames[tmp11.frameId];
            let tmp4 = tmp3;
            if (tmp3) {
              let tmp5 = obj;
              tmp4 = undefined === obj.frames[tmp11.frameId];
            }
            if (tmp4) {
              let tmp6 = obj;
              obj = { function: tmp3.name };
              let tmp7;
              if ("number" === typeof tmp3.resourceId) {
                let tmp8 = samples;
                tmp7 = samples.resources[tmp3.resourceId];
              }
              obj.abs_path = tmp7;
              ({ line: obj.lineno, column: obj.colno } = tmp3);
              obj.frames[tmp11.frameId] = obj;
            }
            tmp9 = undefined;
            if (undefined !== tmp11.parentId) {
              let tmp10 = samples;
              tmp9 = samples.stacks[tmp11.parentId];
            }
            tmp11 = tmp9;
          } while (tmp9);
        }
        obj = {};
        const result1 = (stackId.timestamp + closure_5 - timestamp) * obj;
        obj.elapsed_since_start_ns = result1.toFixed(0);
        obj.stack_id = closure_2;
        obj.thread_id = timestamp;
        obj.stacks[closure_2] = items;
        obj.samples[arg1] = obj;
        closure_2 = closure_2 + 1;
      }
    });
    return obj;
  } else {
    return obj;
  }
}
function applyDebugMetadata(resources) {
  const client = require(794) /* registerSpanErrorInstrumentation */.getClient();
  let options;
  if (null != client) {
    options = client.getOptions();
  }
  let stackParser;
  if (null != options) {
    stackParser = options.stackParser;
  }
  if (stackParser) {
    let debugImagesForResources = require(794) /* registerSpanErrorInstrumentation */.getDebugImagesForResources(stackParser, resources);
    const obj3 = require(794) /* registerSpanErrorInstrumentation */;
  } else {
    debugImagesForResources = [];
  }
  return debugImagesForResources;
}
function isValidSampleRate(concat) {
  if ("number" === typeof concat) {
    if ("number" === tmp) {
      const _isNaN = isNaN;
      return flag2;
    }
    flag2 = true === concat;
    if (!flag2) {
      flag2 = false === concat;
    }
    if (!flag2) {
      let tmp3 = concat < 0;
      if (!tmp3) {
        tmp3 = concat > 1;
      }
      let flag4 = !tmp3;
      if (tmp3) {
        flag4 = false;
        if (require(1048).DEBUG_BUILD) {
          const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
          const _HermesInternal = HermesInternal;
          debug.warn("[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got " + concat + ".");
          flag4 = false;
        }
      }
      flag2 = flag4;
    }
  }
  flag2 = false;
  if (require(1048).DEBUG_BUILD) {
    const debug2 = require(794) /* registerSpanErrorInstrumentation */.debug;
    const _JSON = JSON;
    const json = JSON.stringify(concat);
    const _JSON2 = JSON;
    const _HermesInternal2 = HermesInternal;
    debug2.warn("[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got " + json + " of type " + JSON.stringify(tmp) + ".");
    flag2 = false;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c3 = 1000000;
let tmp2 = "window" in require("registerSpanErrorInstrumentation").GLOBAL_OBJ;
if (tmp2) {
  tmp2 = require("registerSpanErrorInstrumentation").GLOBAL_OBJ.window === require("registerSpanErrorInstrumentation").GLOBAL_OBJ;
}
if (tmp2) {
  tmp2 = "undefined" === typeof globalThis.importScripts;
}
let str2 = "worker";
if (tmp2) {
  str2 = "main";
}
const _navigator = require("ignoreNextOnError").WINDOW.navigator;
let c6 = "";
let c7 = "";
let c8 = "";
let str3;
if (null != _navigator) {
  str3 = _navigator.userAgent;
}
if (!str3) {
  str3 = "";
}
let c10 = "";
let str4;
if (null != _navigator) {
  str4 = _navigator.language;
}
if (!str4) {
  let first;
  if (null != _navigator) {
    const languages = _navigator.languages;
    if (null != languages) {
      first = languages[0];
    }
  }
  str4 = first;
}
if (!str4) {
  str4 = "";
}
let userAgentData;
if (null != _navigator) {
  userAgentData = _navigator.userAgentData;
}
let tmp6 = "object" === typeof userAgentData && null !== userAgentData;
if (tmp6) {
  tmp6 = "getHighEntropyValues" in userAgentData;
}
if (tmp6) {
  const highEntropyValues = userAgentData.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]);
  highEntropyValues.then((platform) => {
    let closure_6 = platform.platform || "";
    let closure_8 = platform.architecture || "";
    let closure_10 = platform.model || "";
    let closure_7 = platform.platformVersion || "";
    const fullVersionList = platform.fullVersionList;
    if (null != fullVersionList) {
      if (fullVersionList.length) {
        const _HermesInternal = HermesInternal;
        let closure_9 = "" + tmp.brand + " " + tmp.version;
      }
    }
  }).catch((arg0) => {

  });
  const nextPromise = highEntropyValues.then((platform) => {
    let closure_6 = platform.platform || "";
    let closure_8 = platform.architecture || "";
    let closure_10 = platform.model || "";
    let closure_7 = platform.platformVersion || "";
    const fullVersionList = platform.fullVersionList;
    if (null != fullVersionList) {
      if (fullVersionList.length) {
        const _HermesInternal = HermesInternal;
        let closure_9 = "" + tmp.brand + " " + tmp.version;
      }
    }
  });
}
let c12 = false;
const map = new Map();

export const MAX_PROFILE_DURATION_MS = 30000;
export const PROFILER_THREAD_ID_STRING = StringResult;
export const PROFILER_THREAD_NAME = str2;
export const addProfileToGlobalCache = function addProfileToGlobalCache(outer3_2, arg1) {
  const result = map.set(outer3_2, arg1);
  if (map.size > 30) {
    const value = map.keys().next().value;
    if (undefined !== value) {
      map.delete(value);
    }
    const iter = map.keys();
  }
};
export const addProfilesToEnvelope = function addProfilesToEnvelope(arg0, arg1) {
  if (arg1.length) {
    const tmp3 = arg1[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp6 = arg0;
      let arr = arg0[1];
      let obj = { type: "profile" };
      let items = [obj, tmp4];
      arr = arr.push(items);
      continue;
    }
    return arg0;
  } else {
    return arg0;
  }
};
export { applyDebugMetadata };
export const attachProfiledThreadToEvent = function attachProfiledThreadToEvent(contexts) {
  if (null != contexts) {
    const contexts3 = contexts.contexts;
    if (null != contexts3) {
      if (contexts3.profile) {
        if (contexts.contexts) {
          contexts = contexts.contexts;
          let trace;
          if (null != contexts) {
            trace = contexts.trace;
          }
          if (null == trace) {
            trace = {};
          }
          const obj = {};
          const contexts2 = contexts.contexts;
          let data;
          if (null != contexts2) {
            trace = contexts2.trace;
            if (null != trace) {
              data = trace.data;
            }
          }
          if (null == data) {
            data = {};
          }
          obj.data = Object.assign({}, data, _defineProperty(_defineProperty({}, "thread.id", closure_4), "thread.name", "thread.name"));
          contexts.contexts.trace = Object.assign({}, trace, obj);
          const spans = contexts.spans;
          if (null != spans) {
            const item = spans.forEach((data) => {
              data = data.data;
              if (!data) {
                data = {};
              }
              data.data = Object.assign({}, data, outer1_2(outer1_2({}, "thread.id", outer1_4), "thread.name", outer1_5));
            });
          }
        }
      }
    }
  }
  return contexts;
};
export { convertJSSelfProfileToSampledFormat };
export const createProfileChunkPayload = function createProfileChunkPayload(frames, _client, _profilerId) {
  let uuid4Result = _profilerId;
  if (null == frames) {
    const _TypeError = TypeError;
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("Cannot construct profiling event envelope without a valid profile. Got " + frames + " instead.");
    throw typeError;
  } else {
    const items = [];
    for (let num = 0; num < frames.frames.length; num = num + 1) {
      let tmp2 = frames.frames[num];
      if (tmp2) {
        let obj = { function: tmp2.name };
        let tmp3;
        if ("number" === typeof tmp2.resourceId) {
          tmp3 = frames.resources[tmp2.resourceId];
        }
        obj.abs_path = tmp3;
        ({ line: obj.lineno, column: obj.colno } = tmp2);
        items[num] = obj;
      }
    }
    const items1 = [];
    for (let num2 = 0; num2 < frames.stacks.length; num2 = num2 + 1) {
      let tmp4 = frames.stacks[num2];
      if (tmp4) {
        let items2 = [];
        let tmp5 = tmp4;
        let tmp6 = tmp4;
        if (tmp4) {
          do {
            let arr = items2.push(tmp5.frameId);
            tmp8 = undefined;
            if (undefined !== tmp5.parentId) {
              tmp8 = frames.stacks[tmp5.parentId];
            }
            tmp5 = tmp8;
            tmp6 = tmp8;
          } while (tmp8);
        }
        items1[num2] = items2;
        let tmp9 = tmp6;
        let tmp10 = items2;
      }
    }
    let obj1 = require(794) /* registerSpanErrorInstrumentation */;
    let result = obj1.browserPerformanceTimeOrigin();
    const _performance = performance;
    if ("number" === typeof performance.timeOrigin) {
      const _performance2 = performance;
      let num4 = performance.timeOrigin;
    } else {
      num4 = result;
      if (!result) {
        num4 = 0;
      }
    }
    if (!result) {
      result = num4;
    }
    const items3 = [];
    for (let num6 = 0; num6 < frames.samples.length; num6 = num6 + 1) {
      let tmp16 = frames.samples[num6];
      if (tmp16) {
        let result1 = (num4 + (tmp16.timestamp - tmp15)) / 1000;
        obj = {};
        let stackId = tmp16.stackId;
        let num7 = 0;
        if (null != stackId) {
          num7 = stackId;
        }
        obj.stack_id = num7;
        let tmp18 = closure_4;
        obj.thread_id = closure_4;
        obj.timestamp = result1;
        items3[num6] = obj;
        let tmp19 = stackId;
        let tmp20 = result1;
      }
    }
    obj = { frames: items, stacks: items1, samples: items3 };
    obj1 = { name: str2 };
    obj.thread_metadata = _defineProperty({}, closure_4, obj1);
    const options = _client.getOptions();
    let sdk;
    if (null != _client.getSdkMetadata) {
      const sdkMetadata = _client.getSdkMetadata();
      if (null != sdkMetadata) {
        sdk = sdkMetadata.sdk;
      }
    }
    const obj2 = { chunk_id: require(794) /* registerSpanErrorInstrumentation */.uuid4() };
    const obj3 = {};
    let name;
    if (null != sdk) {
      name = sdk.name;
    }
    let str = "sentry.javascript.browser";
    if (null != name) {
      str = name;
    }
    obj3.name = str;
    let version;
    if (null != sdk) {
      version = sdk.version;
    }
    str2 = "0.0.0";
    if (null != version) {
      str2 = version;
    }
    obj3.version = str2;
    obj2.client_sdk = obj3;
    if (!uuid4Result) {
      uuid4Result = require(794) /* registerSpanErrorInstrumentation */.uuid4();
      const obj9 = require(794) /* registerSpanErrorInstrumentation */;
    }
    obj2.profiler_id = uuid4Result;
    obj2.platform = "javascript";
    obj2.version = "2";
    const release = options.release;
    let str5 = "";
    if (null != release) {
      str5 = release;
    }
    obj2.release = str5;
    const environment = options.environment;
    let str6 = "production";
    if (null != environment) {
      str6 = environment;
    }
    obj2.environment = str6;
    const obj4 = { images: applyDebugMetadata(frames.resources) };
    obj2.debug_meta = obj4;
    obj2.profile = obj;
    return obj2;
  }
};
export { createProfilePayload };
export const createProfilingEvent = function createProfilingEvent(event_id, arg1, samples, type) {
  if (samples.samples.length < 2) {
    let flag = false;
    if (require(1048).DEBUG_BUILD) {
      const debug2 = require(794) /* registerSpanErrorInstrumentation */.debug;
      debug2.log("[Profiling] Discarding profile because it contains less than 2 samples");
      flag = false;
    }
  } else {
    flag = !tmp;
    if (!samples.frames.length) {
      flag = false;
      if (require(1048).DEBUG_BUILD) {
        const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
        debug.log("[Profiling] Discarding profile because it contains no frames");
        flag = false;
      }
    }
  }
  let tmp12 = null;
  if (flag) {
    tmp12 = createProfilePayload(event_id, arg1, samples, type);
  }
  return tmp12;
};
export { enrichWithThreadInformation };
export const findProfiledTransactionsFromEnvelope = function findProfiledTransactionsFromEnvelope(arg0) {
  const items = [];
  items(794).forEachEnvelopeItem(arg0, (arg0, arg1) => {
    if ("transaction" === arg1) {
      let num = 1;
      if (1 < arg0.length) {
        do {
          let tmp3 = arg0[num];
          let profile_id = null != tmp3;
          if (profile_id) {
            let contexts = tmp3.contexts;
            profile_id = null != contexts;
            let tmp2 = contexts;
          }
          let tmp4 = tmp2;
          if (profile_id) {
            let profile = tmp2.profile;
            profile_id = null != profile;
            tmp4 = profile;
          }
          if (profile_id) {
            profile_id = tmp4.profile_id;
          }
          if (profile_id) {
            let tmp5 = items;
            let arr = items.push(arg0[num]);
          }
          num = num + 1;
          tmp2 = tmp4;
        } while (num < arg0.length);
      }
    }
  });
  return items;
};
export const getActiveProfilesCount = function getActiveProfilesCount() {
  return map.size;
};
export const hasLegacyProfiling = function hasLegacyProfiling(options) {
  return undefined !== options.profilesSampleRate;
};
export const isAutomatedPageLoadSpan = function isAutomatedPageLoadSpan(rootSpan) {
  return "pageload" === require(794) /* registerSpanErrorInstrumentation */.spanToJSON(rootSpan).op;
};
export { isValidSampleRate };
export const shouldProfileSession = function shouldProfileSession(options) {
  if (c12) {
    if (require(1048).DEBUG_BUILD) {
      const debug4 = require(794) /* registerSpanErrorInstrumentation */.debug;
      debug4.log("[Profiling] Profiling has been disabled for the duration of the current user session as the JS Profiler could not be started.");
    }
    return false;
  } else {
    if ("trace" !== options.profileLifecycle) {
      if ("manual" !== options.profileLifecycle) {
        if (require(1048).DEBUG_BUILD) {
          const debug3 = require(794) /* registerSpanErrorInstrumentation */.debug;
          debug3.warn("[Profiling] Session not sampled. Invalid `profileLifecycle` option.");
        }
        return false;
      }
    }
    const profileSessionSampleRate = options.profileSessionSampleRate;
    if (isValidSampleRate(profileSessionSampleRate)) {
      if (profileSessionSampleRate) {
        const _Math = Math;
        let flag2 = Math.random() <= profileSessionSampleRate;
      } else {
        flag2 = false;
        if (require(1048).DEBUG_BUILD) {
          const debug2 = require(794) /* registerSpanErrorInstrumentation */.debug;
          debug2.log("[Profiling] Discarding profile because profileSessionSampleRate is not defined or set to 0");
          flag2 = false;
        }
      }
    } else {
      let flag = false;
      if (require(1048).DEBUG_BUILD) {
        const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
        debug.warn("[Profiling] Discarding profile because of invalid profileSessionSampleRate.");
        flag = false;
      }
      return flag;
    }
  }
};
export const shouldProfileSpanLegacy = function shouldProfileSpanLegacy(rootSpan) {
  if (c12) {
    if (require(1048).DEBUG_BUILD) {
      const debug5 = require(794) /* registerSpanErrorInstrumentation */.debug;
      debug5.log("[Profiling] Profiling has been disabled for the duration of the current user session.");
    }
    return false;
  } else if (rootSpan.isRecording()) {
    let num3 = 1;
    const client = tmp(794).getClient();
    let options;
    if (null != client) {
      options = client.getOptions();
    }
    if (options) {
      let concat = options.profilesSampleRate;
      if (isValidSampleRate(concat)) {
        if (concat) {
          let tmp25 = true === concat;
          if (!tmp25) {
            const _Math = Math;
            tmp25 = Math.random() < concat;
          }
          let flag6 = tmp25;
          if (!tmp25) {
            flag6 = false;
            if (require(1048).DEBUG_BUILD) {
              num3 = require(dependencyMap[num3]).debug;
              const _Number = Number;
              const _HermesInternal = HermesInternal;
              concat = HermesInternal.concat;
              num3.log(concat(Number(concat), ")"));
              flag6 = false;
              const NumberResult = Number(concat);
            }
          }
          let flag4 = flag6;
        } else {
          flag4 = false;
          if (require(1048).DEBUG_BUILD) {
            const debug4 = require(dependencyMap[num3]).debug;
            debug4.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0");
            flag4 = false;
          }
        }
      } else {
        let flag3 = false;
        if (require(1048).DEBUG_BUILD) {
          const debug3 = require(dependencyMap[num3]).debug;
          debug3.warn("[Profiling] Discarding profile because of invalid sample rate.");
          flag3 = false;
        }
        return flag3;
      }
    } else {
      if (require(1048).DEBUG_BUILD) {
        const debug2 = require(dependencyMap[num3]).debug;
        debug2.log("[Profiling] Profiling disabled, no options found.");
      }
      return false;
    }
    const tmpResult = tmp(794);
  } else {
    if (tmp(1048).DEBUG_BUILD) {
      const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
      debug.log("[Profiling] Discarding profile because root span was not sampled.");
    }
    return false;
  }
};
export const startJSSelfProfile = function startJSSelfProfile() {
  const Profiler = require(1004) /* ignoreNextOnError */.WINDOW.Profiler;
  let tmp = Profiler;
  if ("function" === typeof Profiler) {
    const _Math = Math;
    const obj = { sampleInterval: 10, maxBufferSize: Math.floor(3000) };
    const prototype = tmp.prototype;
    tmp = new tmp(obj);
    return tmp;
  } else if (require(1048).DEBUG_BUILD) {
    const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
    debug.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.");
  }
};
export const takeProfileFromGlobalCache = function takeProfileFromGlobalCache(arg0) {
  const value = map.get(arg0);
  if (value) {
    map.delete(arg0);
  }
  return value;
};
export const validateProfileChunk = function validateProfileChunk(profileChunkPayload) {
  if (profileChunkPayload) {
    if ("object" === typeof profileChunkPayload) {
      function isHex32(profiler_id) {
        let isMatch = "string" === typeof profiler_id;
        if (isMatch) {
          isMatch = /^[a-f0-9]{32}$/.test(profiler_id);
          const obj = /^[a-f0-9]{32}$/;
        }
        return isMatch;
      }
      if (isHex32(profileChunkPayload.profiler_id)) {
        if (tmp15(profileChunkPayload.chunk_id)) {
          if (profileChunkPayload.client_sdk) {
            const profile = profileChunkPayload.profile;
            if (profile) {
              const _Array = Array;
              if (!Array.isArray(tmp5.frames)) {
                let obj = { reason: "profile has no frames" };
              }
              const _Array2 = Array;
              if (!Array.isArray(tmp5.stacks)) {
                obj = { reason: "profile has no stacks" };
              }
              const _Array3 = Array;
              if (!Array.isArray(tmp5.samples)) {
                let obj1 = { reason: "profile has no samples" };
              }
              const obj2 = { valid: true };
              obj1 = obj2;
            } else {
              const obj3 = { reason: "missing profile data" };
              return obj3;
            }
          } else {
            const obj4 = { reason: "missing client_sdk metadata" };
            return obj4;
          }
        } else {
          const obj5 = { reason: "missing or invalid chunk_id" };
          return obj5;
        }
      } else {
        obj = { reason: "missing or invalid profiler_id" };
        return obj;
      }
      tmp15 = isHex32;
    }
  }
  return { reason: "chunk is not an object" };
};
