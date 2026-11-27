// Module ID: 12648
// Function ID: 12649
// Name: useCompositeImagesLoaded
// Dependencies: [32, 19, 12639, 2]
// Exports: default

// Module 12648 (useCompositeImagesLoaded)
import CheckpointTransitionConstants from "CheckpointTransitionConstants" /* 12639 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_0, map;

let _slicedToArray = _slicedToArray_mod;
let closure_2 = CheckpointTransitionConstants.CHECKPOINT_COMPOSITE_LOAD_DEADLINE_MS;
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useCompositeImagesLoaded.tsx");

export default function useCompositeImagesLoaded(arg0) {
  let closure_3;
  let tmp4;
  let tmp5;
  let uniqueUrls;
  const f103097 = () => {
    map = new Map();
    return { key, generation: 0, urls: uniqueUrls, outcomes: map, revealOutcomes: map, timedOut: false };
  };
  _slicedToArray = arg0;
  let obj = uniqueUrls;
  let items = [arg0];
  const memo = uniqueUrls.useMemo(() => {
    const items = [...new Set(closure_0)];
    new Set(closure_0);
    const obj = { uniqueUrls: items, key: JSON.stringify(items) };
    return obj;
  }, items);
  uniqueUrls = memo.uniqueUrls;
  const key = memo.key;
  [tmp4, tmp5] = _slicedToArray(uniqueUrls.useState(f103097), 2);
  let tmp6 = tmp4;
  const tmp3 = _slicedToArray(uniqueUrls.useState(f103097), 2);
  if (tmp4.key !== key) {
    let _Map = Map;
    const items1 = [];
    HermesBuiltin.arraySpread(items1, tmp4.outcomes, 0);
    let self2 = this;
    let self = this;
    map = new Map(items1.filter((item) => {
      let tmp;
      [tmp] = item;
      return uniqueUrls.includes(tmp);
    }));
    const obj2 = { key, generation: tmp4.generation + 1, urls: uniqueUrls, outcomes: map, revealOutcomes: map, timedOut: false };
    tmp5(obj2);
    tmp6 = obj2;
  }
  const generation = tmp6.generation;
  let revealOutcomes = tmp6.revealOutcomes;
  let str = "timedOut";
  if (!tmp6.timedOut) {
    const items2 = [];
    HermesBuiltin.arraySpread(items2, revealOutcomes.values(), 0);
    let str2 = "errored";
    let str3 = "failed";
    if (!items2.includes("errored")) {
      let str4 = "loading";
      if (revealOutcomes.size === arr3.length) {
        str4 = "ready";
      }
      str3 = str4;
    }
    str = str3;
  }
  const items3 = [generation, str];
  const effect = obj.useEffect(() => {
    if ("loading" === str) {
      const _setTimeout = setTimeout;
      let tmp2 = key;
      const timeout = setTimeout(() => {
        closure_1_3((generation) => {
          let tmp2 = generation;
          if (generation.generation === closure_1_4) {
            const revealOutcomes = generation.revealOutcomes;
            let str4 = "timedOut";
            if (!generation.timedOut) {
              const items = [];
              HermesBuiltin.arraySpread(items, revealOutcomes.values(), 0);
              let str2 = "failed";
              if (!items.includes("errored")) {
                let str3 = "loading";
                if (revealOutcomes.size === arr2.length) {
                  str3 = "ready";
                }
                str2 = str3;
              }
              str4 = str2;
            }
            tmp2 = generation;
            if ("loading" === str4) {
              const obj = { timedOut: true };
              const merged = Object.assign(generation);
              tmp2 = obj;
            }
          }
          return tmp2;
        });
      }, key);
      return () => clearTimeout(closure_0);
    }
  }, items3);
  const items4 = [generation];
  const callback = obj.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    const tmp = tmp5(function(generation) {
      if (generation.generation === generation) {
        const urls = generation.urls;
        if (urls.includes(closure_0)) {
          const outcomes = generation.outcomes;
          if (outcomes.get(closure_0) !== closure_1) {
            const _Map = Map;
            const self2 = this;
            const self = this;
            map = new Map(generation.outcomes);
            let revealOutcomes = map.set(tmp4, tmp);
            const obj = { outcomes: revealOutcomes, revealOutcomes };
            const merged = Object.assign(generation);
            const revealOutcomes2 = generation.revealOutcomes;
            let str4 = "timedOut";
            if (!generation.timedOut) {
              const items = [];
              HermesBuiltin.arraySpread(items, revealOutcomes2.values(), 0);
              let str2 = "failed";
              if (!items.includes("errored")) {
                let str3 = "loading";
                if (revealOutcomes2.size === arr2.length) {
                  str3 = "ready";
                }
                str2 = str3;
              }
              str4 = str2;
            }
            if ("loading" !== str4) {
              revealOutcomes = generation.revealOutcomes;
            }
            return obj;
          }
        }
      }
      return generation;
    });
  }, items4);
  const items5 = [callback];
  const items6 = [callback];
  const callback1 = obj.useCallback((arg0) => callback(arg0, "loaded"), items5);
  const obj3 = { urls: tmp6.urls, status: str, onLoad: callback1, onError: obj.useCallback((arg0) => callback(arg0, "errored"), items6) };
  return obj3;
};
