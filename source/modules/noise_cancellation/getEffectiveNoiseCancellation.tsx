// Module ID: 10714
// Function ID: 83382
// Name: set
// Dependencies: []
// Exports: default

// Module 10714 (set)
const set = new Set([-51565538125756000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 4013454016352173000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000]);
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/noise_cancellation/getEffectiveNoiseCancellation.tsx");

export default function getEffectiveNoiseCancellation(arg0, arg1) {
  let obj = require(dependencyMap[0]);
  if (!obj.isIOS()) {
    if (!obj2.isMac()) {
      let tmp3 = arg0;
      if (arg0) {
        let tmp5 = null == arg1;
        if (!tmp5) {
          tmp5 = "" === arg1;
        }
        if (!tmp5) {
          tmp5 = !require(dependencyMap[0]).isWindows();
          const obj3 = require(dependencyMap[0]);
        }
        if (!tmp5) {
          tmp5 = arg1 !== "deep_noise_suppression";
        }
        if (!tmp5) {
          obj = { location: "setNoiseCancellation" };
          tmp5 = !require(dependencyMap[1]).getWindowsAudioEffectsExperimentConfig(obj).preferSystemEffects;
          const obj4 = require(dependencyMap[1]);
        }
        if (tmp5) {
          tmp5 = arg0;
        }
        tmp3 = tmp5;
      }
    }
    return tmp3;
  }
  tmp3 = !set.has(arg1) && arg0;
};
export const WINDOWS_NOISE_SUPPRESSION_EFFECT = "deep_noise_suppression";
