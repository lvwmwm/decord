// Module ID: 9429
// Function ID: 9430
// Name: utils
// Dependencies: [32, 19, 12, 2]
// Exports: sortEffectLayers, usePotentiallyRandomizedProfileEffect

// Module 9429 (utils)
import _mod12 from "module_12" /* 12 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/profile_effects/utils.tsx");

export function sortEffectLayers(effects) {
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
}
export function usePotentiallyRandomizedProfileEffect(arg0) {
  let tmp16;
  let tmp17;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  const f95670 = (acc, randomizedSources) => {
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
  const f95671 = (randomizedSources) => {
    const tmp = null != randomizedSources.randomizedSources && randomizedSources.randomizedSources.length > 0;
    if (tmp) {
      randomizedSources.src = randomizedSources.randomizedSources[rounded1].src;
    }
    return randomizedSources;
  };
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  [tmp5, tmp6] = react.useState(arg0);
  _slicedToArray(react.useState(arg0), 2);
  let rounded;
  let tmp10 = arg0;
  [tmp8, tmp9] = react.useState(tmp);
  const useState = react.useState;
  _slicedToArray(react.useState(tmp), 2);
  if (null != arg0) {
    const obj2 = _mod12;
    const cloneDeepResult = obj2.cloneDeep(arg0);
    const effects = cloneDeepResult.effects;
    const reduced = effects.reduce(f95670, 0);
    if (null == tmp) {
      let num = 1;
      const _Math2 = Math;
      const _Math3 = Math;
      const diff = reduced - 1;
      rounded = Math.floor(Math.random() * (diff + 1));
    } else {
      let _Math = Math;
      rounded = Math.floor(tmp * reduced);
    }
    const effects1 = cloneDeepResult.effects;
    cloneDeepResult.effects = effects1.map(f95671);
    tmp10 = cloneDeepResult;
  }
  [tmp16, tmp17] = _slicedToArray(useState(tmp10), 2);
  _slicedToArray(useState(tmp10), 2);
  const obj = _mod12;
  const tmp20 = obj.isEqual(tmp5, arg0) && tmp8 === tmp;
  if (!tmp20) {
    tmp6(arg0);
    tmp9(tmp);
    let rounded1;
    let tmp23 = arg0;
    if (null != arg0) {
      const tmp18Result = _mod12;
      const cloneDeepResult1 = tmp18Result.cloneDeep(arg0);
      const effects2 = cloneDeepResult1.effects;
      const reduced1 = effects2.reduce(f95670, 0);
      if (null == tmp) {
        const _Math5 = Math;
        const _Math6 = Math;
        const diff1 = reduced1 - 1;
        rounded1 = Math.floor(Math.random() * (diff1 + 1));
      } else {
        const _Math4 = Math;
        rounded1 = Math.floor(tmp * reduced1);
      }
      const effects3 = cloneDeepResult1.effects;
      cloneDeepResult1.effects = effects3.map(f95671);
      tmp23 = cloneDeepResult1;
    }
    tmp17(tmp23);
  }
  return tmp16;
}
