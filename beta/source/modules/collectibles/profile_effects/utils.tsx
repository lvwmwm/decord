// Module ID: 8265
// Function ID: 8266
// Name: utils
// Dependencies: [32, 19, 12, 2]
// Exports: sortEffectLayers, usePotentiallyRandomizedProfileEffect

// Module 8265 (utils)
import _mod12 from "module_12" /* 12 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/profile_effects/utils.tsx");

export const sortEffectLayers = function sortEffectLayers(effects) {
  return effects.sort((zIndex, zIndex2) => {
    let num = zIndex.zIndex;
    if (num == null) {
      num = 0;
    }
    let num2 = zIndex2.zIndex;
    if (num2 == null) {
      num2 = 0;
    }
    return num - num2;
  });
};
export const usePotentiallyRandomizedProfileEffect = function usePotentiallyRandomizedProfileEffect(arg0) {
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const f86038 = (acc, randomizedSources) => {
    randomizedSources = randomizedSources.randomizedSources;
    let num;
    if (randomizedSources != null) {
      num = randomizedSources.length;
    }
    if (num == null) {
      num = 0;
    }
    let tmp = acc;
    if (num > 0) {
      let bound = num;
      if (0 !== acc) {
        const _Math = Math;
        bound = Math.min(acc, num);
      }
      tmp = bound;
    }
    return tmp;
  };
  const f86039 = (randomizedSources) => {
    const tmp = null != randomizedSources.randomizedSources && randomizedSources.randomizedSources.length > 0;
    if (tmp) {
      randomizedSources.src = randomizedSources.randomizedSources[closure_0].src;
    }
    return randomizedSources;
  };
  let tmp = react;
  let closure_0;
  let tmp6 = arg0;
  [tmp4, tmp5] = _slicedToArray(react.useState(arg0), 2);
  const useState = react.useState;
  const tmp3 = _slicedToArray(react.useState(arg0), 2);
  if (null != arg0) {
    const obj2 = _mod12;
    const cloneDeepResult = obj2.cloneDeep(arg0);
    const effects = cloneDeepResult.effects;
    let num = 0;
    let _Math = Math;
    const _Math2 = Math;
    const diff = effects.reduce(f86038, 0) - 1;
    closure_0 = Math.floor(Math.random() * (diff + 1));
    const effects1 = cloneDeepResult.effects;
    cloneDeepResult.effects = effects1.map(f86039);
    tmp6 = cloneDeepResult;
  }
  [tmp8, tmp9] = _slicedToArray(useState(tmp6), 2);
  _slicedToArray(useState(tmp6), 2);
  const obj = _mod12;
  if (!obj.isEqual(tmp4, arg0)) {
    tmp5(arg0);
    closure_0 = undefined;
    let tmp13 = arg0;
    if (null != arg0) {
      const tmp10Result = _mod12;
      const cloneDeepResult1 = tmp10Result.cloneDeep(arg0);
      const effects2 = cloneDeepResult1.effects;
      const _Math3 = Math;
      const _Math4 = Math;
      const diff1 = effects2.reduce(f86038, 0) - 1;
      closure_0 = Math.floor(Math.random() * (diff1 + 1));
      const effects3 = cloneDeepResult1.effects;
      cloneDeepResult1.effects = effects3.map(f86039);
      tmp13 = cloneDeepResult1;
    }
    tmp9(tmp13);
  }
  return tmp8;
};
