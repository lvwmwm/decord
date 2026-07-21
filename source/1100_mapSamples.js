// Module ID: 1100
// Function ID: 12569
// Name: mapSamples
// Dependencies: []
// Exports: convertToSentryProfile

// Module 1100 (mapSamples)
function mapSamples(samples) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let tmp = arguments[1];
    }
    const items = [];
    const _Set = Set;
    const set = new Set();
    let obj = set;
    const _Set2 = Set;
    const set1 = new Set();
    let obj1 = set1;
    const first = samples[0];
    if (first) {
      const _Number = Number;
      const NumberResult = Number(first.ts);
      const iter = samples[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp30 = nextResult;
        let tmp31 = set;
        let addResult = obj.add(nextResult.tid);
        let tmp33 = set1;
        let addResult1 = obj1.add(nextResult.sf);
        let _Number2 = Number;
        let tmp35 = NumberResult;
        let result = 1000 * (Number(nextResult.ts) - NumberResult);
        let obj6 = result;
        let tmp37 = tmp;
        if (result >= tmp2) {
          let tmp25 = require;
          let tmp26 = dependencyMap;
          let debug2 = require(dependencyMap[1]).debug;
          let tmp27 = result;
          let tmp28 = tmp;
          let _HermesInternal = HermesInternal;
          let str2 = "[Profiling] Sample has elapsed time since start ";
          let str3 = "ns greater than the max elapsed time ";
          let str4 = "ns.";
          let warnResult = debug2.warn("[Profiling] Sample has elapsed time since start " + obj6 + "ns greater than the max elapsed time " + tmp2 + "ns.");
          iter.return();
          // break
        } else {
          let tmp21 = items;
          obj = {};
          let tmp22 = nextResult;
          ({ sf: obj4.stack_id, tid: obj4.thread_id } = tmp30);
          let tmp23 = result;
          obj.elapsed_since_start_ns = obj6.toFixed(0);
          let arr = items.push(obj);
          // continue
        }
        obj = { samples: items, hermesStacks: set1, jsThreads: set };
        return obj;
      }
    } else {
      const debug = require(dependencyMap[1]).debug;
      debug.warn("[Profiling] No samples found in profile.");
      obj1 = { samples: items };
      obj1.hermesStacks = obj1;
      obj1.jsThreads = obj;
      return obj1;
    }
  }
  tmp = closure_2;
}
function parseHermesJSStackFrame(category) {
  if ("JavaScript" !== category.category) {
    if ("[root]" === category.name) {
      let obj = { function: category.name, in_app: false };
    } else {
      obj = { function: category.name };
    }
    return obj;
  } else {
    if (undefined !== category.funcVirtAddr) {
      if (undefined !== category.offset) {
        const obj1 = { function: category.name, abs_path: require(dependencyMap[2]).DEFAULT_BUNDLE_NAME, lineno: 1 };
        const _Number3 = Number;
        const _Number4 = Number;
        obj1.colno = Number(category.funcVirtAddr) + Number(category.offset) + 1;
        return obj1;
      }
    }
    let name = category.name;
    const index = name.indexOf("(");
    obj = {};
    if (-1 !== index) {
      name = category.name.substring(0, index) || undefined;
      const str2 = category.name;
      const tmp2 = category.name.substring(0, index) || undefined;
    } else {
      name = category.name;
    }
    obj.function = name;
    obj.abs_path = require(dependencyMap[2]).DEFAULT_BUNDLE_NAME;
    let NumberResult1;
    if (undefined !== category.line) {
      const _Number = Number;
      NumberResult1 = Number(category.line);
    }
    obj.lineno = NumberResult1;
    let NumberResult2;
    if (undefined !== category.column) {
      const _Number2 = Number;
      NumberResult2 = Number(category.column);
    }
    obj.colno = NumberResult2;
    return obj;
  }
}
let closure_2 = 1000000 * require(dependencyMap[0]).MAX_PROFILE_DURATION_MS;

export const convertToSentryProfile = function convertToSentryProfile(hermesProfile) {
  let hermesStacks;
  let jsThreads;
  let samples;
  if (0 === hermesProfile.samples.length) {
    const debug2 = require(dependencyMap[1]).debug;
    debug2.warn("[Profiling] No samples found in profile.");
    return null;
  } else {
    ({ samples, hermesStacks, jsThreads } = mapSamples(hermesProfile.samples));
    const stackFrames2 = hermesProfile.stackFrames;
    const items = [];
    const _Map2 = Map;
    const map = new Map();
    for (const key10009 in stackFrames2) {
      let tmp61 = key10009;
      let _Object2 = Object;
      if (!hasOwnProperty.call(stackFrames2, key10009)) {
        continue;
      } else {
        let tmp = stackFrames2[key10009];
        let tmp2 = tmp;
        if (!tmp) {
          continue;
        } else {
          let _Number = Number;
          let result = map.set(Number(key10009), items.length);
          let tmp4 = closure_4;
          let arr = items.push(closure_4(tmp));
          let tmp6 = tmp;
          // continue
        }
        continue;
      }
      continue;
    }
    let obj = { frames: items, hermesStackFrameIdToSentryFrameIdMap: map };
    const hermesStackFrameIdToSentryFrameIdMap = obj.hermesStackFrameIdToSentryFrameIdMap;
    const stackFrames = hermesProfile.stackFrames;
    let obj1 = hermesStackFrameIdToSentryFrameIdMap;
    const _Map = Map;
    const map1 = new Map();
    const items1 = [];
    const iter = hermesStacks[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp62 = items1;
      let tmp63 = map1;
      let result1 = obj3.set(nextResult, items1.length);
      let items2 = [];
      let tmp29 = nextResult;
      if (undefined !== nextResult) {
        do {
          let tmp15 = hermesStackFrameIdToSentryFrameIdMap;
          let tmp16 = tmp29;
          let value = obj1.get(tmp29);
          if (undefined !== value) {
            let tmp19 = items2;
            let tmp20 = value;
            arr = items2.push(tmp18);
          }
          let tmp22 = stackFrames;
          let tmp23 = tmp29;
          let tmp24 = tmp7[tmp29];
          let tmp25 = tmp24;
          let parent;
          if (null !== tmp24) {
            let tmp27 = tmp24;
            if (undefined !== tmp25) {
              let tmp28 = tmp24;
              parent = tmp25.parent;
            }
          }
          tmp29 = parent;
        } while (undefined !== parent);
      }
      let tmp30 = items1;
      let tmp31 = items2;
      let arr1 = items1.push(items2);
      // continue
    }
    obj = { stacks: items1, hermesStackToSentryStackMap: map1 };
    const hermesStackToSentryStackMap = obj.hermesStackToSentryStackMap;
    const iter2 = samples[Symbol.iterator]();
    const nextResult1 = iter2.next();
    while (iter2 !== undefined) {
      let tmp36 = nextResult1;
      let tmp37 = hermesStackToSentryStackMap;
      value = hermesStackToSentryStackMap.get(nextResult1.stack_id);
      if (undefined === value) {
        let tmp42 = require;
        let tmp43 = dependencyMap;
        let debug = require(dependencyMap[1]).debug;
        let tmp44 = nextResult1;
        let _HermesInternal = HermesInternal;
        let errorResult = debug.error("[Profiling] Hermes Stack ID " + tmp36.stack_id + " not found when mapping to Sentry Stack ID.");
        tmp36.stack_id = -1;
      } else {
        let tmp40 = nextResult1;
        let tmp41 = value;
        tmp36.stack_id = tmp39;
      }
      // continue
    }
    obj = {};
    for (const item10103 of jsThreads) {
      let tmp47 = obj;
      obj[item10103] = { 0: "flex", 131072: "Array" };
    }
    obj1 = { samples, frames: obj.frames, stacks: obj.stacks, thread_metadata: obj };
    const _Object = Object;
    const obj3 = map1;
    const tmp55 = mapSamples(hermesProfile.samples);
    const tmp7 = stackFrames;
    obj1.active_thread_id = Object.keys(obj)[0] || "0";
    return obj1;
  }
};
export { mapSamples };
export { parseHermesJSStackFrame };
