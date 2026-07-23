// Module ID: 8219
// Function ID: 64975
// Name: randomizeProfileEffect
// Dependencies: [57, 31, 22, 2]
// Exports: sortEffectLayers, usePotentiallyRandomizedProfileEffect

// Module 8219 (randomizeProfileEffect)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
function randomizeProfileEffect(arg0) {
  if (null == arg0) {
    return arg0;
  } else {
    const cloneDeepResult = _require(22).cloneDeep(arg0);
    const effects = cloneDeepResult.effects;
    let _Math = Math;
    const _Math2 = Math;
    const diff = effects.reduce((arg0, randomizedSources) => {
      randomizedSources = randomizedSources.randomizedSources;
      let length;
      if (null != randomizedSources) {
        length = randomizedSources.length;
      }
      let num = 0;
      if (null != length) {
        num = length;
      }
      let tmp2 = arg0;
      if (num > 0) {
        let bound = num;
        if (0 !== arg0) {
          const _Math = Math;
          bound = Math.min(arg0, num);
        }
        tmp2 = bound;
      }
      return tmp2;
    }, 0) - 1;
    _require = Math.floor(Math.random() * (diff + 1));
    const effects1 = cloneDeepResult.effects;
    cloneDeepResult.effects = effects1.map((randomizedSources) => {
      let tmp = null != randomizedSources.randomizedSources;
      if (tmp) {
        tmp = randomizedSources.randomizedSources.length > 0;
      }
      if (tmp) {
        randomizedSources.src = randomizedSources.randomizedSources[closure_0].src;
      }
      return randomizedSources;
    });
    return cloneDeepResult;
  }
}
const result = require("apply").fileFinishedImporting("modules/collectibles/profile_effects/utils.tsx");

export const sortEffectLayers = function sortEffectLayers(effects) {
  return effects.sort((zIndex, zIndex2) => {
    zIndex = zIndex.zIndex;
    let num = 0;
    if (null != zIndex) {
      num = zIndex;
    }
    zIndex2 = zIndex2.zIndex;
    let num2 = 0;
    if (null != zIndex2) {
      num2 = zIndex2;
    }
    return num - num2;
  });
};
export const usePotentiallyRandomizedProfileEffect = function usePotentiallyRandomizedProfileEffect(arg0) {
  let tmp2;
  let tmp3;
  let tmp5;
  let tmp6;
  [tmp2, tmp3] = callback(React.useState(arg0), 2);
  const tmp = callback(React.useState(arg0), 2);
  [tmp5, tmp6] = callback(React.useState(randomizeProfileEffect(arg0)), 2);
  const tmp4 = callback(React.useState(randomizeProfileEffect(arg0)), 2);
  if (!obj.isEqual(tmp2, arg0)) {
    tmp3(arg0);
    tmp6(randomizeProfileEffect(arg0));
  }
  return tmp5;
};
